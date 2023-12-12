import { EPasswordResetCompleteForm, EPasswordResetFormKeys } from '../types';

import { FORM_LABELS } from './form-field-labels';

export const FORM_FIELD_PLACEHOLDERS = {
  [EPasswordResetFormKeys.LOGIN]: FORM_LABELS[EPasswordResetFormKeys.LOGIN],
  [EPasswordResetCompleteForm.PASSWORD]: 'Enter new password',
  [EPasswordResetCompleteForm.REPEAT_PASSWORD]: 'Repeat new password',
};
