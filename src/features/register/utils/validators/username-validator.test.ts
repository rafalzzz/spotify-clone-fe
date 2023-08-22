import { usernameValidator } from './username-validator';

describe('usernameValidator', () => {
  it('should reject with "Enter the username for your profile" if value is not provided', () => {
    const validator = usernameValidator({}, '');
    expect(validator).rejects.toEqual(new Error('Enter the username for your profile'));
  });

  it('should reject if username length is less than minimum length', () => {
    const validator = usernameValidator({}, 'a');
    expect(validator).rejects.toEqual(new Error('Username name must be at least 2 characters'));
  });

  it('should reject if username length is greater than maximum length', () => {
    const longUsername = 'a'.repeat(151); // length: 151
    const validator = usernameValidator({}, longUsername);
    expect(validator).rejects.toEqual(new Error('Username name can contain up to 150 characters'));
  });

  it('should reject if username contains characters other than letters and digits', () => {
    const validator = usernameValidator({}, 'username@');
    expect(validator).rejects.toEqual(new Error('Username must only contain letters and digits'));
  });

  it('should resolve if username meets all criteria', () => {
    const validator = usernameValidator({}, 'username1');
    expect(validator).resolves.toBeUndefined();
  });
});
