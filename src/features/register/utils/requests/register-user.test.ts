import fetch from 'node-fetch';

import { RegisterFormKeys, RegisterFormAdditionalKeys } from '@/register/enums/register-form-keys';

import { customRequest } from '@/utils/custom-request';

import { ENDPOINTS } from '@/consts/endpoints';

import { registerUser } from './register-user';

jest.mock('@/utils/custom-request');

const REGISTER_FORM_MOCKED_VALUES = {
  [RegisterFormKeys.EMAIL]: 'mockedEmail',
  [RegisterFormKeys.PASSWORD]: 'mockedPassword',
  [RegisterFormKeys.NICKNAME]: 'mockedNickname',
  [RegisterFormAdditionalKeys.DATE_OF_BIRTH]: '01-01-2000',
  [RegisterFormKeys.GENDER]: 1,
  [RegisterFormKeys.OFFERS]: 0,
  [RegisterFormKeys.SHARE_INFORMATION]: 0,
  [RegisterFormKeys.TERMS]: 0,
};

const MOCKED_REGISTER_USER_REQUEST_PROPS = {
  endpoint: ENDPOINTS.REGISTER_USER,
  method: 'POST',
  requestBody: REGISTER_FORM_MOCKED_VALUES,
};

describe('registerUser function', () => {
  beforeEach(() => {
    (customRequest as jest.Mock).mockClear();
  });

  it('should return undefined when response status is 200', async () => {
    (customRequest as jest.Mock).mockResolvedValue({
      status: 200,
      json: () => Promise.resolve({ message: 'Success' }),
    });

    const result = await registerUser(REGISTER_FORM_MOCKED_VALUES);

    expect(customRequest).toHaveBeenCalledWith(MOCKED_REGISTER_USER_REQUEST_PROPS);
    expect(result).toBeUndefined();
  });

  it('should return JSON when response status is not 200', async () => {
    const mockResponse = { message: 'User already exists' };

    (customRequest as jest.Mock).mockResolvedValue({
      status: 400,
      json: () => Promise.resolve(mockResponse),
    });

    const result = await registerUser(REGISTER_FORM_MOCKED_VALUES);

    expect(customRequest).toHaveBeenCalledWith(MOCKED_REGISTER_USER_REQUEST_PROPS);
    expect(result).toEqual(mockResponse);
  });

  it('should return error string when fetch throws', async () => {
    (customRequest as jest.Mock).mockRejectedValue(new Error());

    const result = await registerUser(REGISTER_FORM_MOCKED_VALUES);

    expect(customRequest).toHaveBeenCalledWith(MOCKED_REGISTER_USER_REQUEST_PROPS);
    expect(result).toEqual('Something went wrong');
  });
});
