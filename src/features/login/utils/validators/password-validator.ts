import { RuleObject } from 'antd/es/form';

export const passwordValidator = (_: RuleObject, value: string) => {
  if (!value) {
    return Promise.reject(new Error(`Enter your password`));
  }

  return Promise.resolve();
};
