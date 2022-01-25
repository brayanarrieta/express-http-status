import { generateJSDocLink } from './helpers';
import { StatusCodeObj } from './types';

export const DISABLE_ESLINT_COMMENT = '/* eslint-disable */';

// TODO: Deprecate some status codes
export const STATUS_CODES: StatusCodeObj[] = [
  {
    key: 'CONTINUE',
    code: 100,
    description: 'Continue',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1',
      documentation: 'The 100 (Continue) status code indicates that the initial part of a request has been received and has not yet been rejected by the server.  The server intends to send a final response after the request has been fully received and acted upon.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'SWITCHING_PROTOCOLS',
    code: 101,
    description: 'Switching Protocols',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2',
      documentation: 'The 101 (Switching Protocols) status code indicates that the server understands and is willing to comply with the client\'s request, via the Upgrade header field (Section 6.7 of [RFC7230]), for a change in the application protocol being used on this connection',
    },
    origin: 'RFC7231',
  },
  {
    key: 'PROCESSING',
    code: 102,
    description: 'Processing',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc2518#section-10.1',
      documentation: 'The 102 (Processing) status code is an interim response used to inform the client that the server has accepted the complete request, but has not yet completed it.',
    },
    origin: 'RFC2518',
  },
  {
    key: 'EARLY_HINTS',
    code: 103,
    description: 'Early Hints',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc8297#section-2',
      documentation: 'The 103 (Early Hints) informational status code indicates to the client that the server is likely to send a final response with the header fields included in the informational response.',
    },
    origin: 'RFC8297',
  },
  {
    key: 'OK',
    code: 200,
    description: 'OK',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1',
      documentation: 'The 200 (OK) status code indicates that the request has succeeded.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'CREATED',
    code: 201,
    description: 'Created',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2',
      documentation: 'The 201 (Created) status code indicates that the request has been fulfilled and has resulted in one or more new resources being created.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'ACCEPTED',
    code: 202,
    description: 'Accepted',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3',
      documentation: 'The 202 (Accepted) status code indicates that the request has been accepted for processing, but the processing has not been completed.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'NON_AUTHORITATIVE_INFORMATION',
    code: 203,
    description: 'Non-Authoritative Information',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4',
      documentation: 'The 203 (Non-Authoritative Information) status code indicates that the request was successful but the enclosed payload has been modified from that of the origin server\'s 200 (OK) response by a transforming proxy (Section 5.7.2 of [RFC7230])',
    },
    origin: 'RFC7231',
  },
  {
    key: 'NO_CONTENT',
    code: 204,
    description: 'No Content',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5',
      documentation: 'The 204 (No Content) status code indicates that the server has successfully fulfilled the request and that there is no additional content to send in the response payload body',
    },
    origin: 'RFC7231',
  },
  {
    key: 'RESET_CONTENT',
    code: 205,
    description: 'Reset Content',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6',
      documentation: 'The 205 (Reset Content) status code indicates that the server has fulfilled the request and desires that the user agent reset the "document view", which caused the request to be sent, to its original state as received from the origin server.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'PARTIAL_CONTENT',
    code: 206,
    description: 'Partial Content',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7233#section-4.1',
      documentation: 'The 206 (Partial Content) status code indicates that the server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the request\'s Range header field.',
    },
    origin: 'RFC7233',
  },
  {
    key: 'MULTI_STATUS',
    code: 207,
    description: 'Multi-Status',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc2518#section-10.2',
      documentation: 'The 207 (Multi-Status) status code provides status for multiple independent operations. The default 207 (Multi-Status) response body is a text/xml or application/xml HTTP entity that contains a single XML element called multistatus, which contains a set of XML elements called response which contain 200, 300, 400, and 500 series status codes generated during the method invocation.  100 series status codes SHOULD NOT be recorded in a response XML element.',
    },
    origin: 'RFC2518',
  },
  {
    key: 'ALREADY_REPORTED',
    code: 208,
    description: 'Already Reported',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc5842#section-7.1',
      documentation: 'The 208 (Already Reported) status code can be used inside a DAV: propstat response element to avoid enumerating the internal members of multiple bindings to the same collection repeatedly',
    },
    origin: 'RFC5842',
  },
  {
    key: 'IM_USED',
    code: 226,
    description: 'IM Used',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1',
      documentation: 'The 226 (IM User) can be used when the server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.',
    },
    origin: 'RFC3229',
  },
  {
    key: 'MULTIPLE_CHOICES',
    code: 300,
    description: 'Multiple Choices',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1',
      documentation: 'The 300 (Multiple Choices) status code indicates that the target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers.  In other words, the server desires that the user agent engage in reactive negotiation to select the most appropriate representation(s) for its needs',
    },
    origin: 'RFC7231',
  },
  {
    key: 'MOVED_PERMANENTLY',
    code: 301,
    description: 'Moved Permanently',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2',
      documentation: 'The 301 (Moved Permanently) status code indicates that the target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'FOUND',
    code: 302,
    description: 'Found',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3',
      documentation: 'The 302 (Found) status code indicates that the target resource resides temporarily under a different URI. Since the redirection might be altered on occasion, the client ought to continue to use the effective request URI for future requests.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'SEE_OTHER',
    code: 303,
    description: 'See Other',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4',
      documentation: 'The 303 (See Other) status code indicates that the server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, which is intended to provide an indirect response to the original request.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'NOT_MODIFIED',
    code: 304,
    description: 'Not Modified',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7232#section-4.1',
      documentation: 'The 304 (Not Modified) status code indicates that a conditional GET or HEAD request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition evaluated to false.',
    },
    origin: 'RFC7232',
  },
  {
    key: 'USE_PROXY',
    code: 305,
    description: 'Use Proxy',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5',
      documentation: 'The 305 (Use Proxy) can be used when the requested resource MUST be accessed through the proxy given by the Location field. The Location field gives the URI of the proxy. The recipient is expected to repeat this single request via the proxy. 305 responses MUST only be generated by origin servers.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'TEMPORARY_REDIRECT',
    code: 307,
    description: 'Temporary Redirect',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7',
      documentation: 'The 307 (Temporary Redirect) status code indicates that the target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'PERMANENT_REDIRECT',
    code: 308,
    description: 'Permanent Redirect',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7538#section-3',
      documentation: 'The 308 (Permanent Redirect) status code indicates that the target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.',
    },
    origin: 'RFC7538',
  },
  {
    key: 'BAD_REQUEST',
    code: 400,
    description: 'Bad Request',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1',
      documentation: 'The 400 (Bad Request) status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).',
    },
    origin: 'RFC7231',
  },
  {
    key: 'UNAUTHORIZED',
    code: 401,
    description: 'Unauthorized',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7235#section-3.1',
      documentation: 'The 401 (Unauthorized) status code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.',
    },
    origin: 'RFC7235',
  },
  {
    key: 'PAYMENT_REQUIRED',
    code: 402,
    description: 'Payment Required',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2',
      documentation: 'The 402 (Payment Required) status code is reserved for future use.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'FORBIDDEN',
    code: 403,
    description: 'Forbidden',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3',
      documentation: 'The 403 (Forbidden) status code indicates that the server understood the request but refuses to authorize it.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'NOT_FOUND',
    code: 404,
    description: 'Not Found',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4',
      documentation: 'The 404 (Not Found) status code indicates that the origin server did not find a current representation for the target resource or is not willing to disclose that one exists.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'METHOD_NOT_ALLOWED',
    code: 405,
    description: 'Method Not Allowed',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5',
      documentation: 'The 405 (Method Not Allowed) status code indicates that the method received in the request-line is known by the origin server but not supported by the target resource.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'NOT_ACCEPTABLE',
    code: 406,
    description: 'Not Acceptable',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6',
      documentation: 'The 406 (Not Acceptable) status code indicates that the target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request and the server is unwilling to supply a default representation.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'PROXY_AUTHENTICATION_REQUIRED',
    code: 407,
    description: 'Proxy Authentication Required',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7235#section-3.2',
      documentation: ' The 407 (Proxy Authentication Required) status code is similar to 401 (Unauthorized), but it indicates that the client needs to authenticate itself in order to use a proxy.',
    },
    origin: 'RFC7235',
  },
  {
    key: 'REQUEST_TIMEOUT',
    code: 408,
    description: 'Request Timeout',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7',
      documentation: 'The 408 (Request Timeout) status code indicates that the server did not receive a complete request message within the time that it was prepared to wait.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'CONFLICT',
    code: 409,
    description: 'Conflict',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8',
      documentation: 'The 409 (Conflict) status code indicates that the request could not be completed due to a conflict with the current state of the target resource.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'GONE',
    code: 410,
    description: 'Gone',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9',
      documentation: 'The 410 (Gone) status code indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'LENGTH_REQUIRED',
    code: 411,
    description: 'Length Required',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10',
      documentation: 'The 411 (Length Required) status code indicates that the server refuses to accept the request without a defined Content-Length',
    },
    origin: 'RFC7231',
  },
  {
    key: 'PRECONDITION_FAILED',
    code: 412,
    description: 'Precondition Failed',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7232#section-4.2',
      documentation: 'The 412 (Precondition Failed) status code indicates that one or more conditions given in the request header fields evaluated to false when tested on the server.',
    },
    origin: 'RFC7232',
  },
  {
    key: 'PAYLOAD_TOO_LARGE',
    code: 413,
    description: 'Payload Too Large',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11',
      documentation: 'The 413 (Payload Too Large) status code indicates that the server is refusing to process a request because the request payload is larger than the server is willing or able to process.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'URI_TOO_LONG',
    code: 414,
    description: 'URI Too Long',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12',
      documentation: ' The 414 (URI Too Long) status code indicates that the server is refusing to service the request because the request-target (Section 5.3 of [RFC7230]) is longer than the server is willing to interpret.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'UNSUPPORTED_MEDIA_TYPE',
    code: 415,
    description: 'Unsupported Media Type',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13',
      documentation: 'The 415 (Unsupported Media Type) status code indicates that the origin server is refusing to service the request because the payload is in a format not supported by this method on the target resource.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'RANGE_NOT_SATISFIABLE',
    code: 416,
    description: 'Range Not Satisfiable',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7233#section-4.4',
      documentation: 'The 416 (Range Not Satisfiable) status code indicates that none of the ranges in the request\'s Range header field (Section 3.1) overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.',
    },
    origin: 'RFC7233',
  },
  {
    key: 'EXPECTATION_FAILED',
    code: 417,
    description: 'Expectation Failed',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14',
      documentation: 'The 417 (Expectation Failed) status code indicates that the expectation given in the request\'s Expect header field could not be met by at least one of the inbound servers.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'IM_A_TEAPOT',
    code: 418,
    description: "I'm a Teapot",
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc2324#section-2.3.2',
      documentation: 'The 418 (I\'m a Teapot) should be used with any attempt to brew coffee with a teapot should result in the error code "418 I\'m a teapot". The resulting entity body MAY be short and stout.',
    },
    origin: 'RFC2324',
  },
  {
    key: 'MISDIRECTED_REQUEST',
    code: 421,
    description: 'Misdirected Request',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2',
      documentation: 'The 421 (Misdirected Request) status code indicates that the request was directed at a server that is not able to produce a response.',
    },
    origin: 'RFC7540',
  },
  {
    key: 'UNPROCESSABLE_ENTITY',
    code: 422,
    description: 'Unprocessable Entity',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc2518#section-10.3',
      documentation: 'The 422 (Unprocessable Entity) status code means the server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions.',
    },
    origin: 'RFC2518',
  },
  {
    key: 'LOCKED',
    code: 423,
    description: 'Locked',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc2518#section-10.4',
      documentation: 'The 423 (Locked) status code means the source or destination resource of a method is locked.',
    },
    origin: 'RFC2518',
  },
  {
    key: 'FAILED_DEPENDENCY',
    code: 424,
    description: 'Failed Dependency',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc2518#section-10.5',
      documentation: 'The 424 (Failed Dependency) status code means that the method could not be performed on the resource because the requested action depended on another action and that action failed.',
    },
    origin: 'RFC2518',
  },
  {
    key: 'TOO_EARLY',
    code: 425,
    description: 'Too Early',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc8470#section-5.2',
      documentation: `The 425 (Too Early) status code indicates that the server is unwilling to risk processing a request that might be replayed. This status code is ${generateJSDocLink('https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425', 'experimental')}`,
    },
    isExperimental: true,
    origin: 'RFC8470',
  },
  {
    key: 'UPGRADE_REQUIRED',
    code: 426,
    description: 'Upgrade Required',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.15',
      documentation: 'The 426 (Upgrade Required) status code indicates that the server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'PRECONDITION_REQUIRED',
    code: 428,
    description: 'Precondition Required',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc6585#section-3',
      documentation: 'The 428 (Precondition Required) status code indicates that the origin server requires the request to be conditional.',
    },
    origin: 'RFC6585',
  },
  {
    key: 'TOO_MANY_REQUESTS',
    code: 429,
    description: 'Too Many Requests',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc6585#section-4',
      documentation: 'The 429 (Too Many Requests) status code indicates that the user has sent too many requests in a given amount of time ("rate limiting").',
    },
    origin: 'RFC6585',
  },
  {
    key: 'REQUEST_HEADER_FIELDS_TOO_LARGE',
    code: 431,
    description: 'Request Header Fields Too Large',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc6585#section-5',
      documentation: 'The 431 (Request Header Fields Too Large) status code indicates that the server is unwilling to process the request because its header fields are too large.  The request MAY be resubmitted after reducing the size of the request header fields.',
    },
    origin: 'RFC6585',
  },
  {
    key: 'UNAVAILABLE_FOR_LEGAL_REASONS',
    code: 451,
    description: 'Unavailable For Legal Reasons',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7725#section-3',
      documentation: 'The 451 (Unavailable For Legal Reasons) status code indicates that the server is denying access to the resource as a consequence of a legal demand.',
    },
    origin: 'RFC7725',
  },
  {
    key: 'CLIENT_CLOSED_REQUEST',
    code: 499,
    description: 'Client Closed Request',
    jsdoc: {
      documentation: 'The 499 (Client Closed Request) status code is a non-standard status code introduced by nginx for the case when a client closes the connection while nginx is processing the request.',
    },
    origin: 'NGINX',
  },
  {
    key: 'INTERNAL_SERVER_ERROR',
    code: 500,
    description: 'Internal Server Error',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1',
      documentation: 'The 500 (Internal Server Error) status code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'NOT_IMPLEMENTED',
    code: 501,
    description: 'Not Implemented',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2',
      documentation: 'The 501 (Not Implemented) status code indicates that the server does not support the functionality required to fulfill the request.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'BAD_GATEWAY',
    code: 502,
    description: 'Bad Gateway',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3',
      documentation: 'The 502 (Bad Gateway) status code indicates that the server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'SERVICE_UNAVAILABLE',
    code: 503,
    description: 'Service Unavailable',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4',
      documentation: 'The 503 (Service Unavailable) status code indicates that the server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'GATEWAY_TIMEOUT',
    code: 504,
    description: 'Gateway Timeout',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5',
      documentation: 'The 504 (Gateway Timeout) status code indicates that the server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'HTTP_VERSION_NOT_SUPPORTED',
    code: 505,
    description: 'HTTP Version Not Supported',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6',
      documentation: 'The 505 (HTTP Version Not Supported) status code indicates that the server does not support, or refuses to support, the major version of HTTP that was used in the request message.',
    },
    origin: 'RFC7231',
  },
  {
    key: 'VARIANT_ALSO_NEGOTIATES',
    code: 506,
    description: 'Variant Also Negotiates',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc2295#section-8.1',
      documentation: 'The 506 (Variant Also Negotiates) status code indicates that the server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.',
    },
    origin: 'RFC2295',
  },
  {
    key: 'INSUFFICIENT_STORAGE',
    code: 507,
    description: 'Insufficient Storage',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc2518#section-10.6',
      documentation: 'The 507 (Insufficient Storage) status code means the method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.',
    },
    origin: 'RFC2518',
  },
  {
    key: 'LOOP_DETECTED',
    code: 508,
    description: 'Loop Detected',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc5842#section-7.2',
      documentation: 'The 508 (Loop Detected) status code indicates that the server terminated an operation because it encountered an infinite loop while processing a request with "Depth: infinity".  This status indicates that the entire operation failed.',
    },
    origin: 'RFC5842',
  },
  {
    key: 'BANDWIDTH_LIMIT_EXCEEDED',
    code: 509,
    description: 'Bandwidth Limit Exceeded',
    jsdoc: {
      documentation: 'The 509 (Bandwidth Limit Exceeded) status code, despite being used by many servers, is not official.',
    },
    origin: 'No Official',
  },
  {
    key: 'NOT_EXTENDED',
    code: 510,
    description: 'Not Extended',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc2774#section-7',
      documentation: 'The 510 (Not Extended) status code should be used when the policy for accessing the resource has not been met in the request. The server should send back all the information necessary for the client to issue an extended request.',
    },
    origin: 'RFC2774',
  },
  {
    key: 'NETWORK_AUTHENTICATION_REQUIRED',
    code: 511,
    description: 'Network Authentication Required',
    jsdoc: {
      reference: 'https://datatracker.ietf.org/doc/html/rfc6585#section-6',
      documentation: 'The 511 (Network Authentication Required) status code indicates that the client needs to authenticate to gain network access.',
    },
    origin: 'RFC6585',
  },
  {
    key: 'NETWORK_CONNECT_TIMEOUT_ERROR',
    code: 599,
    description: 'Network Connect Timeout Error',
    jsdoc: {
      documentation: 'The 599 (Network Connect Timeout Error) status code is not specified in any RFCs, but is used by some HTTP proxies to signal a network connect timeout behind the proxy to a client in front of the proxy.',
    },
    origin: 'No Official',
  },
];
