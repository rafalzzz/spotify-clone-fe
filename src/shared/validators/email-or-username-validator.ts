import { RuleObject } from 'antd/es/form';

export const emailOrUsernameValidator = (_: RuleObject, value: string) => {
  if (!value) {
    return Promise.reject(new Error(`Enter your Spotify username of email address`));
  }

  return Promise.resolve();
};
