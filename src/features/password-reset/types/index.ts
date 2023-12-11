import {
  PASSWORD_RESET_INITIAL_VALUES,
  PASSWORD_RESET_COMPLETE_INITIAL_VALUES,
} from '@/password-reset/consts';

export type TPasswordResetForm = typeof PASSWORD_RESET_INITIAL_VALUES;
export type TPasswordResetCompleteForm = typeof PASSWORD_RESET_COMPLETE_INITIAL_VALUES;

export enum EPasswordResetCompleteForm {
  PASSWORD = 'password',
  REPEAT_PASSWORD = 'repeatPassword',
}

export enum EPasswordResetFormKeys {
  LOGIN = 'login',
}

export type TPasswordResetCompleteRequestBody = {
  [EPasswordResetCompleteForm.PASSWORD]: string;
};
