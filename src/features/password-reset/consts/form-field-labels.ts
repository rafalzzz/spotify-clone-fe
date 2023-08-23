import { PasswordResetFormKeys, PasswordResetCompleteFormKeys } from '@/password-reset/enums';

export const FORM_LABELS = {
  [PasswordResetFormKeys.LOGIN]: 'Email address or username',
  [PasswordResetCompleteFormKeys.NEW_PASSWORD]: 'New password',
  [PasswordResetCompleteFormKeys.REPEAT_NEW_PASSWORD]: 'Repeat new password',
};