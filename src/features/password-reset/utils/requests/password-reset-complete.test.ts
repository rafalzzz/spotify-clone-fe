import { PasswordResetCompleteFormKeys } from '@/password-reset/enums';

import { customRequest } from '@/utils/custom-request';

import { ENDPOINTS } from '@/consts/endpoints';

import { passwordResetComplete } from './password-reset-complete';

jest.mock('@/utils/custom-request');

const MOCKED_TOKEN = 'mockedToken';

const PASSWORD_RESET_COMPLETE_FORM_MOCKED_VALUES = {
  [PasswordResetCompleteFormKeys.PASSWORD]: 'mockedPassword',
  [PasswordResetCompleteFormKeys.REPEAT_PASSWORD]: 'mockedPassword',
};

const MOCKED_RESET_PASSWORD_COMPLETE_REQUEST_PROPS = {
  endpoint: `${ENDPOINTS.PASSWORD_RESET_COMPLETE}/${MOCKED_TOKEN}`,
  method: 'PUT',
  requestBody: PASSWORD_RESET_COMPLETE_FORM_MOCKED_VALUES,
};

describe('passwordResetComplete function', () => {
  beforeEach(() => {
    (customRequest as jest.Mock).mockClear();
  });

  it('should return undefined when response status is 200', async () => {
    (customRequest as jest.Mock).mockResolvedValue({
      status: 200,
      json: () => Promise.resolve({ message: 'Success' }),
    });

    const result = await passwordResetComplete(
      MOCKED_TOKEN,
      PASSWORD_RESET_COMPLETE_FORM_MOCKED_VALUES,
    );

    expect(customRequest).toHaveBeenCalledWith(MOCKED_RESET_PASSWORD_COMPLETE_REQUEST_PROPS);
    expect(result).toBeUndefined();
  });

  it('should return JSON when response status is not 200', async () => {
    const mockResponse = { message: 'Password must contain at least 8 characters' };

    (customRequest as jest.Mock).mockResolvedValue({
      status: 400,
      json: () => Promise.resolve(mockResponse),
    });

    const result = await passwordResetComplete(
      MOCKED_TOKEN,
      PASSWORD_RESET_COMPLETE_FORM_MOCKED_VALUES,
    );

    expect(customRequest).toHaveBeenCalledWith(MOCKED_RESET_PASSWORD_COMPLETE_REQUEST_PROPS);
    expect(result).toEqual(mockResponse);
  });

  it('should return error string when fetch throws', async () => {
    (customRequest as jest.Mock).mockRejectedValue(new Error());

    const result = await passwordResetComplete(
      MOCKED_TOKEN,
      PASSWORD_RESET_COMPLETE_FORM_MOCKED_VALUES,
    );

    expect(customRequest).toHaveBeenCalledWith(MOCKED_RESET_PASSWORD_COMPLETE_REQUEST_PROPS);
    expect(result).toEqual('Something went wrong');
  });
});
