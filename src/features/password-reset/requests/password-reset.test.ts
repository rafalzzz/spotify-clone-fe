import { EPasswordResetFormKeys } from '@/password-reset/types';

import { customRequest } from '@/utils/custom-request';

import { ENDPOINTS } from '@/consts/endpoints';

import { passwordReset } from './password-reset';

jest.mock('@/utils/custom-request');

const PASSWORD_RESET_FORM_MOCKED_VALUES = {
  [EPasswordResetFormKeys.LOGIN]: 'mockedLogin',
};

const MOCKED_RESET_PASSWORD_REQUEST_PROPS = {
  endpoint: ENDPOINTS.PASSWORD_RESET,
  method: 'POST',
  requestBody: PASSWORD_RESET_FORM_MOCKED_VALUES,
};

describe('passwordReset function', () => {
  beforeEach(() => {
    (customRequest as jest.Mock).mockClear();
  });

  it('should return undefined when response status is 200', async () => {
    (customRequest as jest.Mock).mockResolvedValue({
      status: 200,
      json: () => Promise.resolve({ message: 'Success' }),
    });

    const result = await passwordReset(PASSWORD_RESET_FORM_MOCKED_VALUES);

    expect(customRequest).toHaveBeenCalledWith(MOCKED_RESET_PASSWORD_REQUEST_PROPS);
    expect(result).toBeUndefined();
  });

  it('should return JSON when response status is not 200', async () => {
    const mockResponse = { message: 'Wrong login' };

    (customRequest as jest.Mock).mockResolvedValue({
      status: 400,
      json: () => Promise.resolve(mockResponse),
    });

    const result = await passwordReset(PASSWORD_RESET_FORM_MOCKED_VALUES);

    expect(customRequest).toHaveBeenCalledWith(MOCKED_RESET_PASSWORD_REQUEST_PROPS);
    expect(result).toEqual(mockResponse);
  });

  it('should return error string when fetch throws', async () => {
    (customRequest as jest.Mock).mockRejectedValue(new Error());

    const result = await passwordReset(PASSWORD_RESET_FORM_MOCKED_VALUES);

    expect(customRequest).toHaveBeenCalledWith(MOCKED_RESET_PASSWORD_REQUEST_PROPS);
    expect(result).toEqual('Something went wrong');
  });
});
