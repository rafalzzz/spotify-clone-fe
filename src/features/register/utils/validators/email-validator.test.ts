import { emailValidator } from './email-validator';

describe('emailValidator', () => {
  it('should reject with "Enter your e-mail address" if value is not provided', () => {
    const validator = emailValidator({}, '');
    expect(validator).rejects.toEqual(new Error('Enter your e-mail address'));
  });

  it('should reject with "Invalid e-mail address" if e-mail format is not valid', () => {
    const validator = emailValidator({}, 'invalid-email');
    expect(validator).rejects.toEqual(new Error('Invalid e-mail address'));
  });

  it('should resolve if e-mail format is valid', () => {
    const validator = emailValidator({}, 'test@test.com');
    expect(validator).resolves.toBeUndefined();
  });
});
