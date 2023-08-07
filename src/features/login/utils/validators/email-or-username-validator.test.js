import { emailOrUsernameValidator } from './email-or-username-validator';

describe('emailOrUsernameValidator', () => {
  it('should reject with "Enter your Spotify username of email address" if value is not provided', () => {
    expect(emailOrUsernameValidator({}, '')).rejects.toEqual(
      new Error('Enter your Spotify username of email address'),
    );
  });

  it('should resolve if email or username is defined', () => {
    expect(emailOrUsernameValidator({}, 'test')).resolves.toBeUndefined();
  });
});
