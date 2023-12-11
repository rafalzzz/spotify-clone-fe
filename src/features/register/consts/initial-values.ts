import { ERegisterFormKeys } from '../types';

export const INITIAL_VALUES = {
  [ERegisterFormKeys.EMAIL]: '',
  [ERegisterFormKeys.PASSWORD]: '',
  [ERegisterFormKeys.NICKNAME]: '',
  [ERegisterFormKeys.DAY]: '',
  [ERegisterFormKeys.MONTH]: undefined,
  [ERegisterFormKeys.YEAR]: '',
  [ERegisterFormKeys.GENDER]: undefined,
  [ERegisterFormKeys.OFFERS]: false,
  [ERegisterFormKeys.SHARE_INFORMATION]: false,
  [ERegisterFormKeys.TERMS]: false,
};
