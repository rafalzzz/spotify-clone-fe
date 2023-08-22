import { RuleObject } from 'antd/es/form';

export const termsValidator = (_: RuleObject, value?: boolean) => {
  if (!value) {
    return Promise.reject(new Error(`Accept the Terms to continue`));
  }

  return Promise.resolve();
};
