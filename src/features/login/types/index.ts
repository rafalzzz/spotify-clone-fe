import { INITIAL_VALUES } from '@/login/consts';

import { TCustomButton } from '@/types/components';

export type TLoginForm = typeof INITIAL_VALUES;

export const enum ELoginFormKeys {
  LOGIN = 'login',
  PASSWORD = 'password',
  REMEMBER_ME = 'rememberMe',
}

export type TUseLoginFormProps = {
  submitButton: TCustomButton;
  onFinish: (values: TLoginForm) => Promise<void>;
};
