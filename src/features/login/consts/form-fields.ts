import { LoginFormKeys } from '@/login/enums/login-form-keys';
import { emailOrUsernameValidator, passwordValidator } from '@/login/utils/validators';

import { InputType } from '@/enums/input-type';

import { CustomFormItemProps } from '@/types/custom-form-item-props';
import { NonStandardItemProps } from '@/types/non-standard-form-item-props';

import { LOGIN_FORM_LABELS } from './form-field-labels';
import { FORM_FIELD_PLACEHOLDERS } from './form-field-placeholders';

export const FORM_FIELDS: (CustomFormItemProps<LoginFormKeys> | NonStandardItemProps)[] = [
  {
    type: InputType.TEXT,
    key: LoginFormKeys.EMAIL_OR_USERNAME,
    name: LoginFormKeys.EMAIL_OR_USERNAME,
    label: LOGIN_FORM_LABELS[LoginFormKeys.EMAIL_OR_USERNAME],
    rules: [{ validator: emailOrUsernameValidator }],
    inputProps: {
      placeholder: FORM_FIELD_PLACEHOLDERS[LoginFormKeys.EMAIL_OR_USERNAME],
    },
  },
  {
    type: InputType.PASSWORD,
    key: LoginFormKeys.PASSWORD,
    name: LoginFormKeys.PASSWORD,
    label: LOGIN_FORM_LABELS[LoginFormKeys.PASSWORD],
    rules: [{ validator: passwordValidator }],
    inputProps: {
      placeholder: LOGIN_FORM_LABELS[LoginFormKeys.PASSWORD],
    },
  },
];
