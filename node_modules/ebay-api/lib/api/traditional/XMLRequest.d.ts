import { X2jOptions, XMLBuilder, XmlBuilderOptions } from 'fast-xml-parser';
import { IEBayApiRequest } from '../../request.js';
import { ApiRequestConfig, Headers } from '../../types/index.js';
import { Fields } from './fields.js';
export declare const defaultXmlBuilderOptions: {
    attributeNamePrefix: string;
    textNodeName: string;
    ignoreAttributes: boolean;
    cdataTagName: string;
    cdataPositionChar: string;
    format: boolean;
    indentBy: string;
    suppressEmptyNode: boolean;
    cdataPropName: string;
};
export declare const defaultXML2JSONParseOptions: {
    attributeNamePrefix: string;
    textNodeName: string;
    ignoreAttributes: boolean;
    parseAttributeValue: boolean;
    parseNodeValue: boolean;
    numberParseOptions: {
        hex: boolean;
        leadingZeros: boolean;
    };
    removeNSPrefix: boolean;
    isArray: (name: string, jpath: string) => boolean;
};
export type BodyHeaders = {
    body: any;
    headers: Headers;
};
export type TraditionalApiConfig = {
    raw?: boolean;
    parseOptions?: X2jOptions;
    xmlBuilderOptions?: XmlBuilderOptions;
    useIaf?: boolean;
    sign?: boolean;
    hook?: (xml: string) => BodyHeaders;
} & ApiRequestConfig;
export type XMLReqConfig = TraditionalApiConfig & {
    endpoint: string;
    xmlns: string;
    eBayAuthToken?: string | null;
    digitalSignatureHeaders?: (payload: any) => Headers;
};
export declare const defaultApiConfig: Required<Omit<TraditionalApiConfig, 'hook'>>;
export declare const defaultHeaders: {
    'Content-Type': string;
};
export default class XMLRequest {
    private readonly callName;
    private readonly fields;
    private readonly config;
    private readonly req;
    readonly j2x: XMLBuilder;
    constructor(callName: string, fields: Fields | null, config: XMLReqConfig, req: IEBayApiRequest);
    private getResponseWrapper;
    private getCredentials;
    private getParseOptions;
    private getHeaders;
    toJSON(xml: string): any;
    toXML(fields: Fields): string;
    request(): Promise<any>;
    xml2JSON(xml: string): any;
}
