import { passwordValidator } from './password-validator';

describe('passwordValidator', () => {
  it('should reject with "Enter your password" if value is not provided', () => {
    expect(passwordValidator({}, '')).rejects.toEqual(new Error('Enter your password'));
  });

  it('should reject if password length is less than minimum length', () => {
    expect(passwordValidator({}, 'P@ss1')).rejects.toEqual(
      new Error('Password must be at least 8 characters'),
    );
  });

  it('should reject if password length is greater than maximum length', () => {
    const longPassword = 'P@'.repeat(100) + 'ss'; // length: 202
    expect(passwordValidator({}, longPassword)).rejects.toEqual(
      new Error('First name can contain up to 150 characters'),
    );
  });

  it('should reject if password does not contain an uppercase letter', () => {
    expect(passwordValidator({}, 'p@ssword1')).rejects.toEqual(
      new Error('Password must contain at least one uppercase letter'),
    );
  });

  it('should reject if password does not contain a lowercase letter', () => {
    expect(passwordValidator({}, 'P@SSWORD1')).rejects.toEqual(
      new Error('Password must contain at least one lowercase letter'),
    );
  });

  it('should reject if password does not contain a digit', () => {
    expect(passwordValidator({}, 'P@ssword')).rejects.toEqual(
      new Error('Password must contain at least one digit'),
    );
  });

  it('should reject if password does not contain a special character', () => {
    expect(passwordValidator({}, 'Password1')).rejects.toEqual(
      new Error('Password must contain at least one special character'),
    );
  });

  it('should resolve if password meets all criteria', () => {
    expect(passwordValidator({}, 'P@ssword1')).resolves.toBeUndefined();
  });
});
