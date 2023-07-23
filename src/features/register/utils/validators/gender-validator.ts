import { RuleObject } from 'antd/es/form';

export const genderValidator = (_: RuleObject, value: string) => {
  if (!value) {
    return Promise.reject(new Error(`Choose your gender`));
  }

  return Promise.resolve();
};
