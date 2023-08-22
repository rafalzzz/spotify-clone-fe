import { RegisterFormKeys } from '@/register/enums/register-form-keys';
import { RegisterFormValues } from '@/register/types';

import { parseRequestBody } from './parse-request-body';

describe('parseRequestBody', () => {
  it('should correctly parse the request body', () => {
    const values = {
      [RegisterFormKeys.EMAIL]: 'test@test.pl',
      [RegisterFormKeys.PASSWORD]: 'Test123!',
      [RegisterFormKeys.NICKNAME]: 'test',
      [RegisterFormKeys.DAY]: '31',
      [RegisterFormKeys.MONTH]: '12',
      [RegisterFormKeys.YEAR]: '1995',
    };

    const expectedRequestBody = {
      [RegisterFormKeys.EMAIL]: 'test@test.pl',
      [RegisterFormKeys.PASSWORD]: 'Test123!',
      [RegisterFormKeys.NICKNAME]: 'test',
      dateOfBirth: '1995-12-31',
    };

    const result = parseRequestBody(values as RegisterFormValues);
    expect(result).toEqual(expectedRequestBody);
  });
});
