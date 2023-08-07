import { passwordValidator } from './password-validator';

describe('passwordValidator', () => {
  it('should reject with "Enter your password" if value is not provided', () => {
    const validator = passwordValidator({}, '');
    expect(validator).rejects.toEqual(new Error('Enter your password'));
  });

  it('should reject if password length is less than minimum length', () => {
    const validator = passwordValidator({}, 'P@ss1');
    expect(validator).rejects.toEqual(new Error('Password must be at least 8 characters'));
  });

  it('should reject if password length is greater than maximum length', () => {
    const longPassword = 'P@'.repeat(100) + 'ss'; // length: 202
    const validator = passwordValidator({}, longPassword);
    expect(validator).rejects.toEqual(new Error('First name can contain up to 150 characters'));
  });

  it('should reject if password does not contain an uppercase letter', () => {
    const validator = passwordValidator({}, 'p@ssword1');
    expect(validator).rejects.toEqual(
      new Error('Password must contain at least one uppercase letter'),
    );
  });

  it('should reject if password does not contain a lowercase letter', () => {
    const validator = passwordValidator({}, 'P@SSWORD1');
    expect(validator).rejects.toEqual(
      new Error('Password must contain at least one lowercase letter'),
    );
  });

  it('should reject if password does not contain a digit', () => {
    const validator = passwordValidator({}, 'P@ssword');
    expect(validator).rejects.toEqual(new Error('Password must contain at least one digit'));
  });

  it('should reject if password does not contain a special character', () => {
    const validator = passwordValidator({}, 'Password1');
    expect(validator).rejects.toEqual(
      new Error('Password must contain at least one special character'),
    );
  });

  it('should resolve if password meets all criteria', () => {
    const validator = passwordValidator({}, 'P@ssword1');
    expect(validator).resolves.toBeUndefined();
  });
});
