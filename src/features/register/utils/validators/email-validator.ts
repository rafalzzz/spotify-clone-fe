import { RuleObject } from 'antd/es/form';

import { emailRegex } from 'shared/consts/regex';

export const emailValidator = (_: RuleObject, value: string) => {
  if (!value) {
    return Promise.reject(new Error(`Enter your e-mail address`));
  }

  if (!emailRegex.test(value)) {
    return Promise.reject(new Error('Invalid e-mail address'));
  }

  return Promise.resolve();
};
