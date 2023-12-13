import { repeatNewPasswordValidator } from '@/password-reset/utils/validators/repeat-new-password-validator';

import { EInputType } from '@/enums/input-type';

import { TCustomFormItem } from '@/types/components';

import { passwordValidator, emailOrUsernameValidator } from '@/shared/validators';

import { EPasswordResetCompleteForm, EPasswordResetFormKeys } from '../types';

import { FORM_LABELS } from './form-field-labels';
import { FORM_FIELD_PLACEHOLDERS } from './form-field-placeholders';

export const PASSWORD_RESET_FORM_FIELDS: TCustomFormItem<EPasswordResetFormKeys>[] = [
  {
    type: EInputType.TEXT,
    key: EPasswordResetFormKeys.LOGIN,
    name: EPasswordResetFormKeys.LOGIN,
    label: FORM_LABELS[EPasswordResetFormKeys.LOGIN],
    rules: [{ validator: emailOrUsernameValidator }],
    inputProps: {
      placeholder: FORM_FIELD_PLACEHOLDERS[EPasswordResetFormKeys.LOGIN],
    },
  },
];

export const PASSWORD_RESET_COMPLETE_FORM_FIELDS: TCustomFormItem<EPasswordResetCompleteForm>[] = [
  {
    type: EInputType.PASSWORD,
    key: EPasswordResetCompleteForm.PASSWORD,
    name: EPasswordResetCompleteForm.PASSWORD,
    label: FORM_LABELS[EPasswordResetCompleteForm.PASSWORD],
    rules: [{ validator: passwordValidator }],
    inputProps: {
      placeholder: FORM_FIELD_PLACEHOLDERS[EPasswordResetCompleteForm.PASSWORD],
    },
  },
  {
    type: EInputType.PASSWORD,
    key: EPasswordResetCompleteForm.REPEAT_PASSWORD,
    name: EPasswordResetCompleteForm.REPEAT_PASSWORD,
    label: FORM_LABELS[EPasswordResetCompleteForm.REPEAT_PASSWORD],
    rules: [repeatNewPasswordValidator],
    inputProps: {
      placeholder: FORM_FIELD_PLACEHOLDERS[EPasswordResetCompleteForm.REPEAT_PASSWORD],
    },
  },
];
