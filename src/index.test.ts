import * as library from '.';

describe('express-http-status API', () => {
  it('should export the correct structure', () => {
    expect(library).toMatchSnapshot();
  });
});
