import { ERegisterFormKeys, TRegisterForm } from '@/register/types';

import { parseRequestBody } from './parse-request-body';

describe('parseRequestBody', () => {
  it('should correctly parse the request body', () => {
    const values = {
      [ERegisterFormKeys.EMAIL]: 'test@test.pl',
      [ERegisterFormKeys.PASSWORD]: 'Test123!',
      [ERegisterFormKeys.NICKNAME]: 'test',
      [ERegisterFormKeys.DAY]: '31',
      Month: '12',
      [ERegisterFormKeys.YEAR]: '1995',
    };

    const expectedRequestBody = {
      ...values,
      dateOfBirth: '1995-12-31',
    };

    const result = parseRequestBody(values as TRegisterForm);
    expect(result).toEqual(expectedRequestBody);
  });
});
