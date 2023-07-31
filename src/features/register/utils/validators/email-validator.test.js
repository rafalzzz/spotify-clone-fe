import { emailRegex } from '@/consts/regex';

import { emailValidator } from './email-validator';

describe('emailValidator', () => {
  it('should reject with "Enter your e-mail address" if value is not provided', () => {
    expect(emailValidator({}, '')).rejects.toEqual(new Error('Enter your e-mail address'));
  });

  it('should reject with "Invalid e-mail address" if e-mail format is not valid', () => {
    expect(emailValidator({}, 'invalid-email')).rejects.toEqual(
      new Error('Invalid e-mail address'),
    );
  });

  it('should resolve if e-mail format is valid', () => {
    expect(emailValidator({}, 'test@test.com')).resolves.toBeUndefined();
  });
});
