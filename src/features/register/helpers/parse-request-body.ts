import { RegisterFormKeys } from '@/register/enums/register-form-keys';
import { RegisterFormValues } from '@/register/types';

export const parseRequestBody = (values: RegisterFormValues) => {
  const requestBody = {
    ...values,
    dateOfBirth: `${values[RegisterFormKeys.YEAR]}-${values['Month']}-${
      values[RegisterFormKeys.DAY]
    }`,
  };

  return requestBody;
};
