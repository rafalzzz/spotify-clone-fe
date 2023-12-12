import { ERegisterFormKeys, TRegisterForm } from '@/register/types';

export const parseRequestBody = (values: TRegisterForm) => {
  const requestBody = {
    ...values,
    dateOfBirth: `${values[ERegisterFormKeys.YEAR]}-${values['month']}-${
      values[ERegisterFormKeys.DAY]
    }`,
  };

  return requestBody;
};
