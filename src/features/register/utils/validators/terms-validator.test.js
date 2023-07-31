import { termsValidator } from './terms-validator';

describe('termsValidator', () => {
  it('should reject with "Accept the Terms to continue', () => {
    expect(termsValidator({}, '')).rejects.toEqual(new Error('Accept the Terms to continue'));
  });

  it('should resolve if value is provided', () => {
    expect(termsValidator({}, true)).resolves.toBeUndefined();
  });
});
