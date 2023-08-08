import { LoginFormKeys } from '@/login/enums/login-form-keys';

import { LOGIN_FORM_LABELS } from './form-field-labels';

export const FORM_FIELD_PLACEHOLDERS = {
  [LoginFormKeys.LOGIN]: LOGIN_FORM_LABELS[LoginFormKeys.LOGIN],
  [LoginFormKeys.PASSWORD]: LOGIN_FORM_LABELS[LoginFormKeys.PASSWORD],
};
