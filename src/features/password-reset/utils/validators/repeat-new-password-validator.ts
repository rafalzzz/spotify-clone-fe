import { RuleObject } from 'antd/es/form';
import { NamePath } from 'antd/es/form/interface';

import { EPasswordResetCompleteForm } from '@/password-reset/types';

export const repeatNewPasswordValidator = ({
  getFieldValue,
}: {
  getFieldValue: (name: NamePath) => unknown;
}) => ({
  validator(_: RuleObject, value: string) {
    if (!value) {
      return Promise.reject(new Error(`Repeat new password`));
    }

    if (getFieldValue(EPasswordResetCompleteForm.PASSWORD) !== value) {
      return Promise.reject(new Error('The new password that you entered do not match!'));
    }

    return Promise.resolve();
  },
});
