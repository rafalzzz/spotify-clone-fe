import { passwordValidator } from './password-validator';

describe('passwordValidator', () => {
  it('should reject with "Enter your password" if value is not provided', () => {
    const validator = passwordValidator({}, '');
    expect(validator).rejects.toEqual(new Error('Enter your password'));
  });

  it('should resolve if password is defined', () => {
    const validator = passwordValidator({}, 'test');
    expect(validator).resolves.toBeUndefined();
  });
});
