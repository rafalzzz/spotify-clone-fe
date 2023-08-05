import { passwordValidator } from './password-validator';

describe('passwordValidator', () => {
  it('should reject with "Enter your password" if value is not provided', () => {
    expect(passwordValidator({}, '')).rejects.toEqual(new Error('Enter your password'));
  });
});
