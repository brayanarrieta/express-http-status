import * as StatusCodesClasses from './StatusCodesClasses';

describe('StatusCodesClasses', () => {
  it('should export the correct structure', () => {
    expect(StatusCodesClasses).toMatchSnapshot();
  });
});
