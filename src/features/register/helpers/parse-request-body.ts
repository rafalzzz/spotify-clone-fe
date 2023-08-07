import { RegisterFormValues } from '@/register/types';

export const parseRequestBody = (values: RegisterFormValues) => {
  const { year, month, day, ...restValues } = values;

  const requestBody = {
    ...restValues,
    dateOfBirth: `${year}-${month}-${day}`,
  };

  return requestBody;
};
