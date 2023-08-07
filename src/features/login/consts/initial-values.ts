import { LoginFormKeys } from '@/login/enums/login-form-keys';

export const INITIAL_VALUES = {
  [LoginFormKeys.EMAIL_OR_USERNAME]: '',
  [LoginFormKeys.PASSWORD]: '',
  [LoginFormKeys.REMEMBER_ME]: false,
};
