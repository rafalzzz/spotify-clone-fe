import { RegisterFormKeys } from '@/register/enums/register-form-keys';

export const INITIAL_VALUES = {
  [RegisterFormKeys.EMAIL]: '',
  [RegisterFormKeys.PASSWORD]: '',
  [RegisterFormKeys.NICKNAME]: '',
  [RegisterFormKeys.DAY]: '',
  [RegisterFormKeys.MONTH]: undefined,
  [RegisterFormKeys.YEAR]: '',
  [RegisterFormKeys.GENDER]: undefined,
  [RegisterFormKeys.OFFERS]: false,
  [RegisterFormKeys.SHARE_INFORMATION]: false,
  [RegisterFormKeys.TERMS]: false,
};
