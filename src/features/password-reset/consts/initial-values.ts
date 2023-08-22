import { PasswordResetFormKeys, PasswordResetCompleteFormKeys } from '@/password-reset/enums';

export const PASSWORD_RESET_INITIAL_VALUES = {
  [PasswordResetFormKeys.LOGIN]: '',
};

export const PASSWORD_RESET_COMPLETE_INITIAL_VALUES = {
  [PasswordResetCompleteFormKeys.NEW_PASSWORD]: '',
  [PasswordResetCompleteFormKeys.REPEAT_NEW_PASSWORD]: '',
};
