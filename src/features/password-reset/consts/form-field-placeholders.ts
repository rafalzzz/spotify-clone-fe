import { PasswordResetFormKeys, PasswordResetCompleteFormKeys } from '@/password-reset/enums';

import { FORM_LABELS } from './form-field-labels';

export const FORM_FIELD_PLACEHOLDERS = {
  [PasswordResetFormKeys.LOGIN]: FORM_LABELS[PasswordResetFormKeys.LOGIN],
  [PasswordResetCompleteFormKeys.NEW_PASSWORD]: '',
  [PasswordResetCompleteFormKeys.REPEAT_NEW_PASSWORD]: '',
};
