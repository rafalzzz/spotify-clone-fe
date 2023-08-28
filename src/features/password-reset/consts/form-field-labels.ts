import { PasswordResetFormKeys, PasswordResetCompleteFormKeys } from '@/password-reset/enums';

export const FORM_LABELS = {
  [PasswordResetFormKeys.LOGIN]: 'Email address or username',
  [PasswordResetCompleteFormKeys.PASSWORD]: 'New password',
  [PasswordResetCompleteFormKeys.REPEAT_PASSWORD]: 'Repeat new password',
};
