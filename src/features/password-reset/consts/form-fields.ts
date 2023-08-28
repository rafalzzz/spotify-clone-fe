import { PasswordResetFormKeys, PasswordResetCompleteFormKeys } from '@/password-reset/enums';
import { repeatNewPasswordValidator } from '@/password-reset/utils/validators/repeat-new-password-validator';

import { InputType } from '@/enums/input-type';

import { CustomFormItemProps } from '@/types/custom-form-item-props';

import { passwordValidator, emailOrUsernameValidator } from '@/shared/validators';

import { FORM_LABELS } from './form-field-labels';
import { FORM_FIELD_PLACEHOLDERS } from './form-field-placeholders';

export const PASSWORD_RESET_FORM_FIELDS: CustomFormItemProps<PasswordResetFormKeys>[] = [
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

export const PASSWORD_RESET_COMPLETE_FORM_FIELDS: CustomFormItemProps<PasswordResetCompleteFormKeys>[] =
  [
    {
      type: InputType.PASSWORD,
      key: PasswordResetCompleteFormKeys.PASSWORD,
      name: PasswordResetCompleteFormKeys.PASSWORD,
      label: FORM_LABELS[PasswordResetCompleteFormKeys.PASSWORD],
      rules: [{ validator: passwordValidator }],
      inputProps: {
        placeholder: FORM_FIELD_PLACEHOLDERS[PasswordResetCompleteFormKeys.PASSWORD],
      },
    },
    {
      type: InputType.PASSWORD,
      key: PasswordResetCompleteFormKeys.REPEAT_PASSWORD,
      name: PasswordResetCompleteFormKeys.REPEAT_PASSWORD,
      label: FORM_LABELS[PasswordResetCompleteFormKeys.REPEAT_PASSWORD],
      rules: [repeatNewPasswordValidator],
      inputProps: {
        placeholder: FORM_FIELD_PLACEHOLDERS[PasswordResetCompleteFormKeys.REPEAT_PASSWORD],
      },
    },
  ];
