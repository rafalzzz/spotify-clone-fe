'use client';
import { TRegisterUserRequestBody } from '@/register/types';

import { customRequest } from '@/utils/custom-request';

import { TServerResponse } from '@/types/response';

import { ENDPOINTS } from '@/consts/endpoints';

export async function registerUser(
  requestBody: TRegisterUserRequestBody,
): Promise<TServerResponse> {
  const response = customRequest({
    endpoint: ENDPOINTS.REGISTER_USER,
    method: 'POST',
    requestBody,
  })
    .then(async (response) => {
      if (response.status === 200) {
        return;
      }

      return await response.json();
    })
    .catch(() => 'Something went wrong');

  return response;
}
