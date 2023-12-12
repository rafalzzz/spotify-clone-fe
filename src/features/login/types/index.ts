import { INITIAL_VALUES } from '@/login/consts';

export type TLoginForm = typeof INITIAL_VALUES;

export enum ELoginFormKeys {
  LOGIN = 'login',
  PASSWORD = 'password',
  REMEMBER_ME = 'rememberMe',
}
