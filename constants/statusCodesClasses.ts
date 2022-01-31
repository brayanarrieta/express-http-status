import { StatusCodeClassObj } from '../types';

export const STATUS_CODES_CLASSES: StatusCodeClassObj[] = [
  {
    key: 'INFORMATIONAL',
    code: '1xx',
    jsdoc: {
      documentation: '1×× Informational',
    },
  },
  {
    key: 'SUCCESS',
    code: '2xx',
    jsdoc: {
      documentation: '2×× Success',
    },
  },
  {
    key: 'REDIRECTION',
    code: '3xx',
    jsdoc: {
      documentation: '3×× Redirection',
    },
  },
  {
    key: 'CLIENT_ERROR',
    code: '4xx',
    jsdoc: {
      documentation: '4×× Client Error',
    },
  },
  {
    key: 'SERVER_ERROR',
    code: '5xx',
    jsdoc: {
      documentation: '5×× Server Error',
    },
  },
];
