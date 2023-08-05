import { LoginFormKeys } from '@/login/enums/login-form-keys';

import { LOGIN_FORM_LABELS } from './form-field-labels';

export const FORM_FIELD_PLACEHOLDERS = {
  [LoginFormKeys.EMAIL_OR_USERNAME]: LOGIN_FORM_LABELS[LoginFormKeys.EMAIL_OR_USERNAME],
  [LoginFormKeys.PASSWORD]: LOGIN_FORM_LABELS[LoginFormKeys.PASSWORD],
};
