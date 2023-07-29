import { RuleObject } from 'antd/es/form';

import { hasOnlyLettersAndDigits } from '@/consts/regex';

const MIN_LENGTH = 2;
const MAX_LENGTH = 150;

export const usernameValidator = (_: RuleObject, value: string) => {
  if (!value) {
    return Promise.reject(new Error(`Enter the username for your profile`));
  }

  if (value.length < MIN_LENGTH) {
    return Promise.reject(new Error(`Username name must be at least ${MIN_LENGTH} characters`));
  }

  if (value.length > MAX_LENGTH) {
    return Promise.reject(new Error(`Username name can contain up to ${MAX_LENGTH} characters`));
  }

  if (!hasOnlyLettersAndDigits.test(value)) {
    return Promise.reject(new Error('Username must only contain letters and digits'));
  }
  return Promise.resolve();
};
