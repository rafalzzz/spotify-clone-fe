import { emailOrUsernameValidator } from './email-or-username-validator';

describe('emailOrUsernameValidator', () => {
  it('should reject with "Enter your Spotify username of email address" if value is not provided', () => {
    expect(emailValidator({}, '')).rejects.toEqual(
      new Error('Enter your Spotify username of email address'),
    );
  });
});
