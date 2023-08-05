import { RegisterFormKeys } from '@/register/enums/register-form-keys';

import { REGISTER_FORM_LABELS } from './form-field-labels';

export const FORM_FIELD_PLACEHOLDERS = {
  [RegisterFormKeys.EMAIL]: 'Give me your e-mail address',
  [RegisterFormKeys.PASSWORD]: REGISTER_FORM_LABELS[RegisterFormKeys.PASSWORD],
  [RegisterFormKeys.NICKNAME]: 'Enter a username',
  [RegisterFormKeys.DAY]: 'DD',
  [RegisterFormKeys.MONTH]: 'Month',
  [RegisterFormKeys.YEAR]: 'RRRR',
};