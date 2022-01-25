import * as StatusCodes from './StatusCodes';

describe('StatusCodes', () => {
  it('should export the correct structure', () => {
    expect(StatusCodes).toMatchSnapshot();
  });
});
