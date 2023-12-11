import { ERegisterFormKeys } from '../types';

import { FORM_LABELS } from './form-field-labels';

export const FORM_FIELD_PLACEHOLDERS = {
  [ERegisterFormKeys.EMAIL]: 'Give me your e-mail address',
  [ERegisterFormKeys.PASSWORD]: FORM_LABELS[ERegisterFormKeys.PASSWORD],
  [ERegisterFormKeys.NICKNAME]: 'Enter a username',
  [ERegisterFormKeys.DAY]: 'DD',
  [ERegisterFormKeys.MONTH]: 'Month',
  [ERegisterFormKeys.YEAR]: 'RRRR',
};
