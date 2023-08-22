import { emailOrUsernameValidator } from './email-or-username-validator';

describe('emailOrUsernameValidator', () => {
  it('should reject with "Enter your Spotify username of email address" if value is not provided', () => {
    const validator = emailOrUsernameValidator({}, '');
    expect(validator).rejects.toEqual(new Error('Enter your Spotify username of email address'));
  });

  it('should resolve if email or username is defined', () => {
    const validator = emailOrUsernameValidator({}, 'test');
    expect(validator).resolves.toBeUndefined();
  });
});
