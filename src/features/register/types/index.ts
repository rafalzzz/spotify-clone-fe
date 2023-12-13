import { TCustomButton } from '@/types/components';

export const enum ERegisterFormKeys {
  EMAIL = 'email',
  PASSWORD = 'password',
  NICKNAME = 'nickname',
  DAY = 'day',
  MONTH = 'month',
  YEAR = 'year',
  GENDER = 'gender',
  OFFERS = 'offers',
  SHARE_INFORMATION = 'shareInformation',
  TERMS = 'terms',
}

export const enum ERegisterFormAdditionalKeys {
  DATE_OF_BIRTH = 'dateOfBirth',
}

export type TRegisterForm = Record<ERegisterFormKeys, string | number>;

export type TDateOfBirthInput = {
  name: string;
  label?: string;
};

export type TRegisterUserRequestBody = Record<
  ERegisterFormKeys | ERegisterFormAdditionalKeys,
  string | number
>;

export type TUseRegisterFormProps = {
  submitButton: TCustomButton;
  onFinish: (values: TRegisterForm) => Promise<void>;
};
