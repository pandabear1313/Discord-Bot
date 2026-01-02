"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultHeaders = exports.defaultApiConfig = exports.defaultXML2JSONParseOptions = exports.defaultXmlBuilderOptions = void 0;
const debug_1 = __importDefault(require("debug"));
const fast_xml_parser_1 = require("fast-xml-parser");
const index_js_1 = require("../../errors/index.js");
const log = (0, debug_1.default)('ebay:xml:request');
exports.defaultXmlBuilderOptions = {
    attributeNamePrefix: '@_',
    textNodeName: '#value',
    ignoreAttributes: false,
    cdataTagName: '__cdata',
    cdataPositionChar: '\\c',
    format: false,
    indentBy: '  ',
    suppressEmptyNode: false,
    cdataPropName: '__cdata'
};
exports.defaultXML2JSONParseOptions = {
    attributeNamePrefix: '',
    textNodeName: 'value',
    ignoreAttributes: false,
    parseAttributeValue: true,
    parseNodeValue: true,
    numberParseOptions: {
        hex: false,
        leadingZeros: false
    },
    removeNSPrefix: true,
    isArray: (name, jpath) => {
        return /Array$/.test(jpath.slice(0, -name.length - 1));
    }
};
exports.defaultApiConfig = {
    raw: false,
    parseOptions: exports.defaultXML2JSONParseOptions,
    xmlBuilderOptions: exports.defaultXmlBuilderOptions,
    useIaf: true,
    sign: false,
    headers: {},
    returnResponse: false
};
exports.defaultHeaders = {
    'Content-Type': 'text/xml'
};
class XMLRequest {
    constructor(callName, fields, config, req) {
        if (!callName) {
            throw new index_js_1.EBayNoCallError();
        }
        this.config = { ...exports.defaultApiConfig, ...config };
        this.j2x = new fast_xml_parser_1.XMLBuilder({ ...exports.defaultXmlBuilderOptions, ...this.config.xmlBuilderOptions });
        this.callName = callName;
        this.fields = fields || {};
        this.req = req;
    }
    getResponseWrapper() {
        return `${this.callName}Response`;
    }
    getCredentials() {
        return this.config.eBayAuthToken ? {
            RequesterCredentials: {
                eBayAuthToken: this.config.eBayAuthToken
            }
        } : {};
    }
    getParseOptions() {
        return {
            ...exports.defaultXML2JSONParseOptions,
            ...this.config.parseOptions
        };
    }
    getHeaders() {
        return {
            ...exports.defaultHeaders,
            ...this.config.headers,
        };
    }
    toJSON(xml) {
        const parseOptions = this.getParseOptions();
        log('parseOption', parseOptions);
        return new fast_xml_parser_1.XMLParser(parseOptions).parse(xml);
    }
    toXML(fields) {
        const HEADING = '<?xml version="1.0" encoding="utf-8"?>';
        return HEADING + this.j2x.build({
            [this.callName + 'Request']: {
                '@_xmlns': this.config.xmlns,
                ...this.getCredentials(),
                ...fields
            }
        });
    }
    async request() {
        const xml = this.toXML(this.fields);
        log('xml', xml);
        try {
            const { body, headers = {} } = this.config.hook?.(xml) ?? { body: xml };
            const config = {
                headers: {
                    ...this.getHeaders(),
                    ...this.config.digitalSignatureHeaders ? this.config.digitalSignatureHeaders(body) : {},
                    ...(headers ? headers : {})
                }
            };
            log('config', config);
            const response = await this.req.post(this.config.endpoint, body, config);
            log('response', response);
            if (this.config.returnResponse) {
                return response;
            }
            const { data } = response;
            if (this.config.raw) {
                return data;
            }
            const json = this.xml2JSON(data);
            (0, index_js_1.checkEBayTraditionalResponse)(response, json);
            return json;
        }
        catch (error) {
            log('error', error);
            if (error.response?.data) {
                const json = this.toJSON(error.response.data);
                (0, index_js_1.checkEBayTraditionalResponse)(error, json[this.callName + 'Response']);
            }
            throw error;
        }
    }
    xml2JSON(xml) {
        const json = this.toJSON(xml);
        return json[this.getResponseWrapper()] ?? json;
    }
}
exports.default = XMLRequest;
