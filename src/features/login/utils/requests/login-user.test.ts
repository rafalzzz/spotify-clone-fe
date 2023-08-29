import { LoginFormKeys } from '@/login/enums/login-form-keys';

import { customRequest } from '@/utils/custom-request';

import { ENDPOINTS } from '@/consts/endpoints';

import { loginUser } from './login-user';

jest.mock('@/utils/custom-request');

const LOGIN_FORM_MOCKED_VALUES = {
  [LoginFormKeys.LOGIN]: 'mockedLogin',
  [LoginFormKeys.PASSWORD]: 'mockedPassword',
  [LoginFormKeys.REMEMBER_ME]: false,
};

const MOCKED_LOGIN_USER_REQUEST_PROPS = {
  endpoint: ENDPOINTS.LOGIN_USER,
  method: 'POST',
  requestBody: LOGIN_FORM_MOCKED_VALUES,
};

describe('loginUser function', () => {
  beforeEach(() => {
    (customRequest as jest.Mock).mockClear();
  });

  it('should return undefined when response status is 200', async () => {
    (customRequest as jest.Mock).mockResolvedValue({
      status: 200,
      json: () => Promise.resolve({ message: 'Success' }),
    });

    const result = await loginUser(LOGIN_FORM_MOCKED_VALUES);

    expect(customRequest).toHaveBeenCalledWith(MOCKED_LOGIN_USER_REQUEST_PROPS);
    expect(result).toBeUndefined();
  });

  it('should return JSON when response status is not 200', async () => {
    const mockResponse = { message: 'User already exists' };

    (customRequest as jest.Mock).mockResolvedValue({
      status: 400,
      json: () => Promise.resolve(mockResponse),
    });

    const result = await loginUser(LOGIN_FORM_MOCKED_VALUES);

    expect(customRequest).toHaveBeenCalledWith(MOCKED_LOGIN_USER_REQUEST_PROPS);
    expect(result).toEqual(mockResponse);
  });

  it('should return error string when customRequest throws', async () => {
    (customRequest as jest.Mock).mockRejectedValue(new Error());

    const result = await loginUser(LOGIN_FORM_MOCKED_VALUES);

    expect(customRequest).toHaveBeenCalledWith(MOCKED_LOGIN_USER_REQUEST_PROPS);
    expect(result).toEqual('Something went wrong');
  });
});
