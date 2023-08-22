import { PasswordResetFormKeys, PasswordResetCompleteFormKeys } from '@/password-reset/enums';

import { FORM_LABELS } from './form-field-labels';

export const FORM_FIELD_PLACEHOLDERS = {
  [PasswordResetFormKeys.LOGIN]: FORM_LABELS[PasswordResetFormKeys.LOGIN],
  [PasswordResetCompleteFormKeys.NEW_PASSWORD]: 'Enter new password',
  [PasswordResetCompleteFormKeys.REPEAT_NEW_PASSWORD]: 'Repeat new password',
};
