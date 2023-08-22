import https from 'https';

import fetch from 'node-fetch';

import { PASSWORD_RESET_COMPLETE_INITIAL_VALUES } from '@/password-reset/consts';

import { passwordResetComplete } from './password-reset-complete';

jest.mock('node-fetch');
jest.mock('https', () => ({
  Agent: jest.fn().mockImplementation(() => ({
    rejectUnauthorized: false,
  })),
}));

describe('passwordResetComplete function', () => {
  beforeEach(() => {
    (fetch as unknown as jest.Mock).mockClear();
  });

  it('should return undefined when response status is 200', async () => {
    (fetch as unknown as jest.Mock).mockResolvedValue({
      status: 200,
      json: () => Promise.resolve({ message: 'Success' }),
    });

    const result = await passwordResetComplete(PASSWORD_RESET_COMPLETE_INITIAL_VALUES);

    expect(fetch).toHaveBeenCalled();
    expect(result).toBeUndefined();
  });

  it('should return JSON when response status is not 200', async () => {
    const mockResponse = { message: 'Password must contain at least 8 characters' };

    (fetch as unknown as jest.Mock).mockResolvedValue({
      status: 400,
      json: () => Promise.resolve(mockResponse),
    });

    const result = await passwordResetComplete(PASSWORD_RESET_COMPLETE_INITIAL_VALUES);

    expect(fetch).toHaveBeenCalled();
    expect(result).toEqual(mockResponse);
  });

  it('should return error string when fetch throws', async () => {
    (fetch as unknown as jest.Mock).mockRejectedValue(new Error());

    const result = await passwordResetComplete(PASSWORD_RESET_COMPLETE_INITIAL_VALUES);

    expect(fetch).toHaveBeenCalled();
    expect(result).toEqual('Something went wrong');
  });
});
