import { EPasswordResetCompleteForm, EPasswordResetFormKeys } from '../types';

export const FORM_LABELS = {
  [EPasswordResetFormKeys.LOGIN]: 'Email address or username',
  [EPasswordResetCompleteForm.PASSWORD]: 'New password',
  [EPasswordResetCompleteForm.REPEAT_PASSWORD]: 'Repeat new password',
};
