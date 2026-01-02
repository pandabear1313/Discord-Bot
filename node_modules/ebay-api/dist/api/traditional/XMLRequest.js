import debug from 'debug';
import { XMLBuilder, XMLParser } from 'fast-xml-parser';
import { checkEBayTraditionalResponse, EBayNoCallError } from '../../errors/index.js';
const log = debug('ebay:xml:request');
export const defaultXmlBuilderOptions = {
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
export const defaultXML2JSONParseOptions = {
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
export const defaultApiConfig = {
    raw: false,
    parseOptions: defaultXML2JSONParseOptions,
    xmlBuilderOptions: defaultXmlBuilderOptions,
    useIaf: true,
    sign: false,
    headers: {},
    returnResponse: false
};
export const defaultHeaders = {
    'Content-Type': 'text/xml'
};
export default class XMLRequest {
    constructor(callName, fields, config, req) {
        if (!callName) {
            throw new EBayNoCallError();
        }
        this.config = { ...defaultApiConfig, ...config };
        this.j2x = new XMLBuilder({ ...defaultXmlBuilderOptions, ...this.config.xmlBuilderOptions });
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
            ...defaultXML2JSONParseOptions,
            ...this.config.parseOptions
        };
    }
    getHeaders() {
        return {
            ...defaultHeaders,
            ...this.config.headers,
        };
    }
    toJSON(xml) {
        const parseOptions = this.getParseOptions();
        log('parseOption', parseOptions);
        return new XMLParser(parseOptions).parse(xml);
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
            checkEBayTraditionalResponse(response, json);
            return json;
        }
        catch (error) {
            log('error', error);
            if (error.response?.data) {
                const json = this.toJSON(error.response.data);
                checkEBayTraditionalResponse(error, json[this.callName + 'Response']);
            }
            throw error;
        }
    }
    xml2JSON(xml) {
        const json = this.toJSON(xml);
        return json[this.getResponseWrapper()] ?? json;
    }
}
