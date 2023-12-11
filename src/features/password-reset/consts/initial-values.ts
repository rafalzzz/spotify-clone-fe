import { EPasswordResetCompleteForm, EPasswordResetFormKeys } from '../types';

export const PASSWORD_RESET_INITIAL_VALUES = {
  [EPasswordResetFormKeys.LOGIN]: '',
};

export const PASSWORD_RESET_COMPLETE_INITIAL_VALUES = {
  [EPasswordResetCompleteForm.PASSWORD]: '',
  [EPasswordResetCompleteForm.REPEAT_PASSWORD]: '',
};
