import {
  PASSWORD_RESET_INITIAL_VALUES,
  PASSWORD_RESET_COMPLETE_INITIAL_VALUES,
} from '@/password-reset/consts';

import { TCustomButton } from '@/types/components';

export type TPasswordResetForm = typeof PASSWORD_RESET_INITIAL_VALUES;
export type TPasswordResetCompleteForm = typeof PASSWORD_RESET_COMPLETE_INITIAL_VALUES;

export const enum EPasswordResetCompleteForm {
  PASSWORD = 'password',
  REPEAT_PASSWORD = 'repeatPassword',
}

export const enum EPasswordResetFormKeys {
  LOGIN = 'login',
}

export type TPasswordResetCompleteRequestBody = {
  [EPasswordResetCompleteForm.PASSWORD]: string;
};

export type TUsePasswordResetCompleteFormProps = {
  submitButton: TCustomButton;
  onFinish: ({ password }: TPasswordResetCompleteForm) => Promise<void>;
};

export type TUsePasswordResetFormProps = {
  submitButton: TCustomButton;
  onFinish: (values: TPasswordResetForm) => Promise<void>;
};
