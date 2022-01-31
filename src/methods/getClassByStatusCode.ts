import * as StatusCodes from '../StatusCodes';

const HTTP_STATUS_CODE_REGEX = /^[1-5][0-9][0-9]$/;

const throwStatusCodeNotExistError = (statusCode: any) => {
  throw new Error(`HTTP Status Code ${statusCode} does not exist`);
};

export const getClassByStatusCode = (statusCode: number | string) => {
  const statusCodeFormatted = statusCode.toString();

  if (!HTTP_STATUS_CODE_REGEX.test(statusCodeFormatted)) {
    throwStatusCodeNotExistError(statusCodeFormatted);
  }

  // @ts-ignore Due to issue with typings
  if (!Object.values(StatusCodes).includes(parseInt(statusCodeFormatted, 10))) {
    throwStatusCodeNotExistError(statusCodeFormatted);
  }

  const [firstDigit] = statusCodeFormatted;

  return `${firstDigit}xx`;
};
