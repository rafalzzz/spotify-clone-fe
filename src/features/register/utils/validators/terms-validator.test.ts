import { termsValidator } from './terms-validator';

describe('termsValidator', () => {
  it('should reject with "Accept the Terms to continue', () => {
    const validator = termsValidator({}, undefined);
    expect(validator).rejects.toEqual(new Error('Accept the Terms to continue'));
  });

  it('should resolve if value is provided', () => {
    const validator = termsValidator({}, true);
    expect(validator).resolves.toBeUndefined();
  });
});
