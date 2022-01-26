# express-http-status

This is an agnostic package that provides an enum collection of HTTP response status codes from the official RFCs and others used by NGINX and some unofficial status codes. The package has support for Javascript and Typescript.

## Installation

```console
npm install express-http-status --save
```

## Features

### Enum collection of HTTP Response Status Codes

```javascript
import {
	StatusCodes,
} from 'express-http-status';

// For example
StatusCodes.OK // 200
StatusCodes.CREATED // 201
StatusCodes.NOT_FOUND // 404
```

## HTTP Response Status Codes Collection

<!-- HTTP_RESPONSE_STATUS_CODES_MARKDOWN_TABLE:START -->
| HTTP Status Code | Key                             | Description                     | Origin      |
| ---------------- | ------------------------------- | ------------------------------- | ----------- |
| 100              | CONTINUE                        | Continue                        | RFC7231     |
| 101              | SWITCHING_PROTOCOLS             | Switching Protocols             | RFC7231     |
| 102              | PROCESSING                      | Processing                      | RFC2518     |
| 103              | EARLY_HINTS                     | Early Hints                     | RFC8297     |
| 200              | OK                              | OK                              | RFC7231     |
| 201              | CREATED                         | Created                         | RFC7231     |
| 202              | ACCEPTED                        | Accepted                        | RFC7231     |
| 203              | NON_AUTHORITATIVE_INFORMATION   | Non-Authoritative Information   | RFC7231     |
| 204              | NO_CONTENT                      | No Content                      | RFC7231     |
| 205              | RESET_CONTENT                   | Reset Content                   | RFC7231     |
| 206              | PARTIAL_CONTENT                 | Partial Content                 | RFC7233     |
| 207              | MULTI_STATUS                    | Multi-Status                    | RFC2518     |
| 208              | ALREADY_REPORTED                | Already Reported                | RFC5842     |
| 226              | IM_USED                         | IM Used                         | RFC3229     |
| 300              | MULTIPLE_CHOICES                | Multiple Choices                | RFC7231     |
| 301              | MOVED_PERMANENTLY               | Moved Permanently               | RFC7231     |
| 302              | FOUND                           | Found                           | RFC7231     |
| 303              | SEE_OTHER                       | See Other                       | RFC7231     |
| 304              | NOT_MODIFIED                    | Not Modified                    | RFC7232     |
| 307              | TEMPORARY_REDIRECT              | Temporary Redirect              | RFC7231     |
| 308              | PERMANENT_REDIRECT              | Permanent Redirect              | RFC7538     |
| 400              | BAD_REQUEST                     | Bad Request                     | RFC7231     |
| 401              | UNAUTHORIZED                    | Unauthorized                    | RFC7235     |
| 402              | PAYMENT_REQUIRED                | Payment Required                | RFC7231     |
| 403              | FORBIDDEN                       | Forbidden                       | RFC7231     |
| 404              | NOT_FOUND                       | Not Found                       | RFC7231     |
| 405              | METHOD_NOT_ALLOWED              | Method Not Allowed              | RFC7231     |
| 406              | NOT_ACCEPTABLE                  | Not Acceptable                  | RFC7231     |
| 407              | PROXY_AUTHENTICATION_REQUIRED   | Proxy Authentication Required   | RFC7235     |
| 408              | REQUEST_TIMEOUT                 | Request Timeout                 | RFC7231     |
| 409              | CONFLICT                        | Conflict                        | RFC7231     |
| 410              | GONE                            | Gone                            | RFC7231     |
| 411              | LENGTH_REQUIRED                 | Length Required                 | RFC7231     |
| 412              | PRECONDITION_FAILED             | Precondition Failed             | RFC7232     |
| 413              | PAYLOAD_TOO_LARGE               | Payload Too Large               | RFC7231     |
| 414              | URI_TOO_LONG                    | URI Too Long                    | RFC7231     |
| 415              | UNSUPPORTED_MEDIA_TYPE          | Unsupported Media Type          | RFC7231     |
| 416              | RANGE_NOT_SATISFIABLE           | Range Not Satisfiable           | RFC7233     |
| 417              | EXPECTATION_FAILED              | Expectation Failed              | RFC7231     |
| 418              | IM_A_TEAPOT                     | I'm a Teapot                    | RFC2324     |
| 421              | MISDIRECTED_REQUEST             | Misdirected Request             | RFC7540     |
| 422              | UNPROCESSABLE_ENTITY            | Unprocessable Entity            | RFC2518     |
| 423              | LOCKED                          | Locked                          | RFC2518     |
| 424              | FAILED_DEPENDENCY               | Failed Dependency               | RFC2518     |
| 425              | TOO_EARLY                       | Too Early                       | RFC8470     |
| 426              | UPGRADE_REQUIRED                | Upgrade Required                | RFC7231     |
| 428              | PRECONDITION_REQUIRED           | Precondition Required           | RFC6585     |
| 429              | TOO_MANY_REQUESTS               | Too Many Requests               | RFC6585     |
| 431              | REQUEST_HEADER_FIELDS_TOO_LARGE | Request Header Fields Too Large | RFC6585     |
| 451              | UNAVAILABLE_FOR_LEGAL_REASONS   | Unavailable For Legal Reasons   | RFC7725     |
| 499              | CLIENT_CLOSED_REQUEST           | Client Closed Request           | NGINX       |
| 500              | INTERNAL_SERVER_ERROR           | Internal Server Error           | RFC7231     |
| 501              | NOT_IMPLEMENTED                 | Not Implemented                 | RFC7231     |
| 502              | BAD_GATEWAY                     | Bad Gateway                     | RFC7231     |
| 503              | SERVICE_UNAVAILABLE             | Service Unavailable             | RFC7231     |
| 504              | GATEWAY_TIMEOUT                 | Gateway Timeout                 | RFC7231     |
| 505              | HTTP_VERSION_NOT_SUPPORTED      | HTTP Version Not Supported      | RFC7231     |
| 506              | VARIANT_ALSO_NEGOTIATES         | Variant Also Negotiates         | RFC2295     |
| 507              | INSUFFICIENT_STORAGE            | Insufficient Storage            | RFC2518     |
| 508              | LOOP_DETECTED                   | Loop Detected                   | RFC5842     |
| 509              | BANDWIDTH_LIMIT_EXCEEDED        | Bandwidth Limit Exceeded        | No Official |
| 510              | NOT_EXTENDED                    | Not Extended                    | RFC2774     |
| 511              | NETWORK_AUTHENTICATION_REQUIRED | Network Authentication Required | RFC6585     |
| 599              | NETWORK_CONNECT_TIMEOUT_ERROR   | Network Connect Timeout Error   | No Official |
<!-- HTTP_RESPONSE_STATUS_CODES_MARKDOWN_TABLE:END -->
