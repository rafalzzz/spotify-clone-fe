import https from 'https';

import fetch from 'node-fetch';

import { PASSWORD_RESET_INITIAL_VALUES } from '@/password-reset/consts';

import { passwordReset } from './password-reset';

jest.mock('node-fetch');
jest.mock('https', () => ({
  Agent: jest.fn().mockImplementation(() => ({
    rejectUnauthorized: false,
  })),
}));

describe('passwordReset function', () => {
  beforeEach(() => {
    (fetch as unknown as jest.Mock).mockClear();
  });

  it('should return undefined when response status is 200', async () => {
    (fetch as unknown as jest.Mock).mockResolvedValue({
      status: 200,
      json: () => Promise.resolve({ message: 'Success' }),
    });

    const result = await passwordReset(PASSWORD_RESET_INITIAL_VALUES);

    expect(fetch).toHaveBeenCalled();
    expect(result).toBeUndefined();
  });

  it('should return JSON when response status is not 200', async () => {
    const mockResponse = { message: 'Wrong login' };

    (fetch as unknown as jest.Mock).mockResolvedValue({
      status: 400,
      json: () => Promise.resolve(mockResponse),
    });

    const result = await passwordReset(PASSWORD_RESET_INITIAL_VALUES);

    expect(fetch).toHaveBeenCalled();
    expect(result).toEqual(mockResponse);
  });

  it('should return error string when fetch throws', async () => {
    (fetch as unknown as jest.Mock).mockRejectedValue(new Error());

    const result = await passwordReset(PASSWORD_RESET_INITIAL_VALUES);

    expect(fetch).toHaveBeenCalled();
    expect(result).toEqual('Something went wrong');
  });
});
