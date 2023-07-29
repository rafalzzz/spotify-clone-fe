import { RuleObject } from 'antd/es/form';

import { hasDigit, hasLowercase, hasSpecialChar, hasUppercase } from '@/consts/regex';

const MIN_LENGTH = 8;
const MAX_LENGTH = 150;

export const passwordValidator = (_: RuleObject, value: string) => {
  if (!value) {
    return Promise.reject(new Error(`Enter your password`));
  }

  if (value.length < MIN_LENGTH) {
    return Promise.reject(new Error(`Password must be at least ${MIN_LENGTH} characters`));
  }

  if (value.length > MAX_LENGTH) {
    return Promise.reject(new Error(`First name can contain up to ${MAX_LENGTH} characters`));
  }

  if (!hasUppercase.test(value)) {
    return Promise.reject(new Error('Password must contain at least one uppercase letter'));
  }

  if (!hasLowercase.test(value)) {
    return Promise.reject(new Error('Password must contain at least one lowercase letter'));
  }

  if (!hasDigit.test(value)) {
    return Promise.reject(new Error('Password must contain at least one digit'));
  }

  if (!hasSpecialChar.test(value)) {
    return Promise.reject(new Error('Password must contain at least one special character'));
  }

  return Promise.resolve();
};
