import https from 'https';

import fetch from 'node-fetch';

import { registerUser } from './register-user';

jest.mock('node-fetch');
jest.mock('https', () => ({
  Agent: jest.fn().mockImplementation(() => ({
    rejectUnauthorized: false,
  })),
}));

const mockRegisterUserValues = { name: 'test', email: 'test@example.com' };

describe('registerUser function', () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  it('should return undefined when response status is 200', async () => {
    fetch.mockResolvedValue({
      status: 200,
      json: () => Promise.resolve({ message: 'Success' }),
    });

    const result = await registerUser(mockRegisterUserValues);

    expect(fetch).toHaveBeenCalled();
    expect(result).toBeUndefined();
  });

  it('should return JSON when response status is not 200', async () => {
    const mockResponse = { message: 'User already exists' };

    fetch.mockResolvedValue({
      status: 400,
      json: () => Promise.resolve(mockResponse),
    });

    const result = await registerUser(mockRegisterUserValues);

    expect(fetch).toHaveBeenCalled();
    expect(result).toEqual(mockResponse);
  });

  it('should return error string when fetch throws', async () => {
    fetch.mockRejectedValue(new Error());

    const result = await registerUser(mockRegisterUserValues);

    expect(fetch).toHaveBeenCalled();
    expect(result).toEqual('Something went wrong');
  });
});
