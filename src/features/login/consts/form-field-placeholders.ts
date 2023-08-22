import { LoginFormKeys } from '@/login/enums/login-form-keys';

import { FORM_LABELS } from './form-field-labels';

export const FORM_FIELD_PLACEHOLDERS = {
  [LoginFormKeys.LOGIN]: FORM_LABELS[LoginFormKeys.LOGIN],
  [LoginFormKeys.PASSWORD]: FORM_LABELS[LoginFormKeys.PASSWORD],
};
