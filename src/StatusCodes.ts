/* eslint-disable */
/**
 * The 100 (Continue) status code indicates that the initial part of a request has been received and has not yet been rejected by the server.  The server intends to send a final response after the request has been fully received and acted upon.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.1}
 */
export const CONTINUE = 100;
/**
 * The 101 (Switching Protocols) status code indicates that the server understands and is willing to comply with the client's request, via the Upgrade header field (Section 6.7 of [RFC7230]), for a change in the application protocol being used on this connection
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.2.2}
 */
export const SWITCHING_PROTOCOLS = 101;
/**
 * The 102 (Processing) status code is an interim response used to inform the client that the server has accepted the complete request, but has not yet completed it.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc2518#section-10.1}
 */
export const PROCESSING = 102;
/**
 * The 103 (Early Hints) informational status code indicates to the client that the server is likely to send a final response with the header fields included in the informational response.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc8297#section-2}
 */
export const EARLY_HINTS = 103;
/**
 * The 200 (OK) status code indicates that the request has succeeded.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.1}
 */
export const OK = 200;
/**
 * The 201 (Created) status code indicates that the request has been fulfilled and has resulted in one or more new resources being created.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.2}
 */
export const CREATED = 201;
/**
 * The 202 (Accepted) status code indicates that the request has been accepted for processing, but the processing has not been completed.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.3}
 */
export const ACCEPTED = 202;
/**
 * The 203 (Non-Authoritative Information) status code indicates that the request was successful but the enclosed payload has been modified from that of the origin server's 200 (OK) response by a transforming proxy (Section 5.7.2 of [RFC7230])
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.4}
 */
export const NON_AUTHORITATIVE_INFORMATION = 203;
/**
 * The 204 (No Content) status code indicates that the server has successfully fulfilled the request and that there is no additional content to send in the response payload body
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.5}
 */
export const NO_CONTENT = 204;
/**
 * The 205 (Reset Content) status code indicates that the server has fulfilled the request and desires that the user agent reset the "document view", which caused the request to be sent, to its original state as received from the origin server.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.3.6}
 */
export const RESET_CONTENT = 205;
/**
 * The 206 (Partial Content) status code indicates that the server is successfully fulfilling a range request for the target resource by transferring one or more parts of the selected representation that correspond to the satisfiable ranges found in the request's Range header field.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7233#section-4.1}
 */
export const PARTIAL_CONTENT = 206;
/**
 * The 207 (Multi-Status) status code provides status for multiple independent operations. The default 207 (Multi-Status) response body is a text/xml or application/xml HTTP entity that contains a single XML element called multistatus, which contains a set of XML elements called response which contain 200, 300, 400, and 500 series status codes generated during the method invocation.  100 series status codes SHOULD NOT be recorded in a response XML element.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc2518#section-10.2}
 */
export const MULTI_STATUS = 207;
/**
 * The 208 (Already Reported) status code can be used inside a DAV: propstat response element to avoid enumerating the internal members of multiple bindings to the same collection repeatedly
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc5842#section-7.1}
 */
export const ALREADY_REPORTED = 208;
/**
 * The 226 (IM User) can be used when the server has fulfilled a GET request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc3229#section-10.4.1}
 */
export const IM_USED = 226;
/**
 * The 300 (Multiple Choices) status code indicates that the target resource has more than one representation, each with its own more specific identifier, and information about the alternatives is being provided so that the user (or user agent) can select a preferred representation by redirecting its request to one or more of those identifiers.  In other words, the server desires that the user agent engage in reactive negotiation to select the most appropriate representation(s) for its needs
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.1}
 */
export const MULTIPLE_CHOICES = 300;
/**
 * The 301 (Moved Permanently) status code indicates that the target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.2}
 */
export const MOVED_PERMANENTLY = 301;
/**
 * The 302 (Found) status code indicates that the target resource resides temporarily under a different URI. Since the redirection might be altered on occasion, the client ought to continue to use the effective request URI for future requests.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.3}
 */
export const FOUND = 302;
/**
 * The 303 (See Other) status code indicates that the server is redirecting the user agent to a different resource, as indicated by a URI in the Location header field, which is intended to provide an indirect response to the original request.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.4}
 */
export const SEE_OTHER = 303;
/**
 * The 304 (Not Modified) status code indicates that a conditional GET or HEAD request has been received and would have resulted in a 200 (OK) response if it were not for the fact that the condition evaluated to false.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7232#section-4.1}
 */
export const NOT_MODIFIED = 304;
/**
 * The 305 (Use Proxy) can be used when the requested resource MUST be accessed through the proxy given by the Location field. The Location field gives the URI of the proxy. The recipient is expected to repeat this single request via the proxy. 305 responses MUST only be generated by origin servers.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.5}
 */
export const USE_PROXY = 305;
/**
 * The 307 (Temporary Redirect) status code indicates that the target resource resides temporarily under a different URI and the user agent MUST NOT change the request method if it performs an automatic redirection to that URI.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.4.7}
 */
export const TEMPORARY_REDIRECT = 307;
/**
 * The 308 (Permanent Redirect) status code indicates that the target resource has been assigned a new permanent URI and any future references to this resource ought to use one of the enclosed URIs.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7538#section-3}
 */
export const PERMANENT_REDIRECT = 308;
/**
 * The 400 (Bad Request) status code indicates that the server cannot or will not process the request due to something that is perceived to be a client error (e.g., malformed request syntax, invalid request message framing, or deceptive request routing).
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.1}
 */
export const BAD_REQUEST = 400;
/**
 * The 401 (Unauthorized) status code indicates that the request has not been applied because it lacks valid authentication credentials for the target resource.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7235#section-3.1}
 */
export const UNAUTHORIZED = 401;
/**
 * The 402 (Payment Required) status code is reserved for future use.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.2}
 */
export const PAYMENT_REQUIRED = 402;
/**
 * The 403 (Forbidden) status code indicates that the server understood the request but refuses to authorize it.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.3}
 */
export const FORBIDDEN = 403;
/**
 * The 404 (Not Found) status code indicates that the origin server did not find a current representation for the target resource or is not willing to disclose that one exists.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.4}
 */
export const NOT_FOUND = 404;
/**
 * The 405 (Method Not Allowed) status code indicates that the method received in the request-line is known by the origin server but not supported by the target resource.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.5}
 */
export const METHOD_NOT_ALLOWED = 405;
/**
 * The 406 (Not Acceptable) status code indicates that the target resource does not have a current representation that would be acceptable to the user agent, according to the proactive negotiation header fields received in the request and the server is unwilling to supply a default representation.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.6}
 */
export const NOT_ACCEPTABLE = 406;
/**
 *  The 407 (Proxy Authentication Required) status code is similar to 401 (Unauthorized), but it indicates that the client needs to authenticate itself in order to use a proxy.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7235#section-3.2}
 */
export const PROXY_AUTHENTICATION_REQUIRED = 407;
/**
 * The 408 (Request Timeout) status code indicates that the server did not receive a complete request message within the time that it was prepared to wait.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.7}
 */
export const REQUEST_TIMEOUT = 408;
/**
 * The 409 (Conflict) status code indicates that the request could not be completed due to a conflict with the current state of the target resource.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.8}
 */
export const CONFLICT = 409;
/**
 * The 410 (Gone) status code indicates that access to the target resource is no longer available at the origin server and that this condition is likely to be permanent.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.9}
 */
export const GONE = 410;
/**
 * The 411 (Length Required) status code indicates that the server refuses to accept the request without a defined Content-Length
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.10}
 */
export const LENGTH_REQUIRED = 411;
/**
 * The 412 (Precondition Failed) status code indicates that one or more conditions given in the request header fields evaluated to false when tested on the server.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7232#section-4.2}
 */
export const PRECONDITION_FAILED = 412;
/**
 * The 413 (Payload Too Large) status code indicates that the server is refusing to process a request because the request payload is larger than the server is willing or able to process.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.11}
 */
export const PAYLOAD_TOO_LARGE = 413;
/**
 *  The 414 (URI Too Long) status code indicates that the server is refusing to service the request because the request-target (Section 5.3 of [RFC7230]) is longer than the server is willing to interpret.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.12}
 */
export const URI_TOO_LONG = 414;
/**
 * The 415 (Unsupported Media Type) status code indicates that the origin server is refusing to service the request because the payload is in a format not supported by this method on the target resource.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.13}
 */
export const UNSUPPORTED_MEDIA_TYPE = 415;
/**
 * The 416 (Range Not Satisfiable) status code indicates that none of the ranges in the request's Range header field (Section 3.1) overlap the current extent of the selected resource or that the set of ranges requested has been rejected due to invalid ranges or an excessive request of small or overlapping ranges.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7233#section-4.4}
 */
export const RANGE_NOT_SATISFIABLE = 416;
/**
 * The 417 (Expectation Failed) status code indicates that the expectation given in the request's Expect header field could not be met by at least one of the inbound servers.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.14}
 */
export const EXPECTATION_FAILED = 417;
/**
 * The 418 (I'm a Teapot) should be used with any attempt to brew coffee with a teapot should result in the error code "418 I'm a teapot". The resulting entity body MAY be short and stout.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc2324#section-2.3.2}
 */
export const IM_A_TEAPOT = 418;
/**
 * The 421 (Misdirected Request) status code indicates that the request was directed at a server that is not able to produce a response.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7540#section-9.1.2}
 */
export const MISDIRECTED_REQUEST = 421;
/**
 * The 422 (Unprocessable Entity) status code means the server understands the content type of the request entity (hence a 415(Unsupported Media Type) status code is inappropriate), and the syntax of the request entity is correct (thus a 400 (Bad Request) status code is inappropriate) but was unable to process the contained instructions.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc2518#section-10.3}
 */
export const UNPROCESSABLE_ENTITY = 422;
/**
 * The 423 (Locked) status code means the source or destination resource of a method is locked.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc2518#section-10.4}
 */
export const LOCKED = 423;
/**
 * The 424 (Failed Dependency) status code means that the method could not be performed on the resource because the requested action depended on another action and that action failed.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc2518#section-10.5}
 */
export const FAILED_DEPENDENCY = 424;
/**
 * The 425 (Too Early) status code indicates that the server is unwilling to risk processing a request that might be replayed. This status code is {@link experimental https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/425}
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc8470#section-5.2}
 */
export const TOO_EARLY = 425;
/**
 * The 426 (Upgrade Required) status code indicates that the server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.5.15}
 */
export const UPGRADE_REQUIRED = 426;
/**
 * The 428 (Precondition Required) status code indicates that the origin server requires the request to be conditional.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc6585#section-3}
 */
export const PRECONDITION_REQUIRED = 428;
/**
 * The 429 (Too Many Requests) status code indicates that the user has sent too many requests in a given amount of time ("rate limiting").
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc6585#section-4}
 */
export const TOO_MANY_REQUESTS = 429;
/**
 * The 431 (Request Header Fields Too Large) status code indicates that the server is unwilling to process the request because its header fields are too large.  The request MAY be resubmitted after reducing the size of the request header fields.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc6585#section-5}
 */
export const REQUEST_HEADER_FIELDS_TOO_LARGE = 431;
/**
 * The 451 (Unavailable For Legal Reasons) status code indicates that the server is denying access to the resource as a consequence of a legal demand.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7725#section-3}
 */
export const UNAVAILABLE_FOR_LEGAL_REASONS = 451;
/** The 499 (Client Closed Request) status code is a non-standard status code introduced by nginx for the case when a client closes the connection while nginx is processing the request. */
export const CLIENT_CLOSED_REQUEST = 499;
/**
 * The 500 (Internal Server Error) status code indicates that the server encountered an unexpected condition that prevented it from fulfilling the request.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.1}
 */
export const INTERNAL_SERVER_ERROR = 500;
/**
 * The 501 (Not Implemented) status code indicates that the server does not support the functionality required to fulfill the request.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.2}
 */
export const NOT_IMPLEMENTED = 501;
/**
 * The 502 (Bad Gateway) status code indicates that the server, while acting as a gateway or proxy, received an invalid response from an inbound server it accessed while attempting to fulfill the request.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.3}
 */
export const BAD_GATEWAY = 502;
/**
 * The 503 (Service Unavailable) status code indicates that the server is currently unable to handle the request due to a temporary overload or scheduled maintenance, which will likely be alleviated after some delay.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.4}
 */
export const SERVICE_UNAVAILABLE = 503;
/**
 * The 504 (Gateway Timeout) status code indicates that the server, while acting as a gateway or proxy, did not receive a timely response from an upstream server it needed to access in order to complete the request.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.5}
 */
export const GATEWAY_TIMEOUT = 504;
/**
 * The 505 (HTTP Version Not Supported) status code indicates that the server does not support, or refuses to support, the major version of HTTP that was used in the request message.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc7231#section-6.6.6}
 */
export const HTTP_VERSION_NOT_SUPPORTED = 505;
/**
 * The 506 (Variant Also Negotiates) status code indicates that the server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc2295#section-8.1}
 */
export const VARIANT_ALSO_NEGOTIATES = 506;
/**
 * The 507 (Insufficient Storage) status code means the method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc2518#section-10.6}
 */
export const INSUFFICIENT_STORAGE = 507;
/**
 * The 508 (Loop Detected) status code indicates that the server terminated an operation because it encountered an infinite loop while processing a request with "Depth: infinity".  This status indicates that the entire operation failed.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc5842#section-7.2}
 */
export const LOOP_DETECTED = 508;
/** The 509 (Bandwidth Limit Exceeded) status code, despite being used by many servers, is not official. */
export const BANDWIDTH_LIMIT_EXCEEDED = 509;
/**
 * The 510 (Not Extended) status code should be used when the policy for accessing the resource has not been met in the request. The server should send back all the information necessary for the client to issue an extended request.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc2774#section-7}
 */
export const NOT_EXTENDED = 510;
/**
 * The 511 (Network Authentication Required) status code indicates that the client needs to authenticate to gain network access.
 *
 * {@link Official Documentation https://datatracker.ietf.org/doc/html/rfc6585#section-6}
 */
export const NETWORK_AUTHENTICATION_REQUIRED = 511;
/** The 599 (Network Connect Timeout Error) status code is not specified in any RFCs, but is used by some HTTP proxies to signal a network connect timeout behind the proxy to a client in front of the proxy. */
export const NETWORK_CONNECT_TIMEOUT_ERROR = 599;
