import { RegisterFormKeys } from '../enums/register-form-keys';

export const parseRequestBody = (values: Record<RegisterFormKeys, string | number>) => {
  const { year, month, day, ...restValues } = values;

  const requestBody = {
    ...restValues,
    dateOfBirth: `${year}-${month}-${day}`,
  };

  return requestBody;
};
