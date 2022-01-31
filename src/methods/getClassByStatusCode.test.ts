import { getClassByStatusCode } from './getClassByStatusCode';

describe('getClassByStatusCode', () => {
  it('should throw an error when the http status code is out of range of the regex rule', () => {
    const statusCode = 600;
    expect(() => {
      getClassByStatusCode(statusCode);
    }).toThrowError(`HTTP Status Code ${statusCode} does not exist`);
  });

  it('should throw an error when the http status code is lower than the range of the regex rule', () => {
    const statusCode = 50;
    expect(() => {
      getClassByStatusCode(statusCode);
    }).toThrowError(`HTTP Status Code ${statusCode} does not exist`);
  });

  it('should throw an error when the http status code is not available in status codes collection', () => {
    const statusCode = 450;
    expect(() => {
      getClassByStatusCode(statusCode);
    }).toThrowError(`HTTP Status Code ${statusCode} does not exist`);
  });

  it('should return http status class when the status code is registered in collection', () => {
    const statusCode = 400;

    const statusCodeClass = getClassByStatusCode(statusCode);
    expect(statusCodeClass).toBe('4xx');
  });
});
