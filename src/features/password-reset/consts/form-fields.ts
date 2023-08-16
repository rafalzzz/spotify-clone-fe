import { PasswordResetFormKeys } from '@/password-reset/enums/password-reset-form-keys';

import { emailOrUsernameValidator } from '@/validators/email-or-username-validator';

import { InputType } from '@/enums/input-type';

import { CustomFormItemProps } from '@/types/custom-form-item-props';

import { FORM_LABELS } from './form-field-labels';
import { FORM_FIELD_PLACEHOLDERS } from './form-field-placeholders';

export const FORM_FIELDS: CustomFormItemProps<PasswordResetFormKeys>[] = [
  {
    type: InputType.TEXT,
    key: PasswordResetFormKeys.LOGIN,
    name: PasswordResetFormKeys.LOGIN,
    label: FORM_LABELS[PasswordResetFormKeys.LOGIN],
    rules: [{ validator: emailOrUsernameValidator }],
    inputProps: {
      placeholder: FORM_FIELD_PLACEHOLDERS[PasswordResetFormKeys.LOGIN],
    },
  },
];
