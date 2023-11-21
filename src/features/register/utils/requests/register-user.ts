'use client';

import { parseRequestBody } from '@/register/helpers';

import { customRequest } from '@/utils/custom-request';

import { ENDPOINTS } from '@/consts/endpoints';

export async function registerUser(requestBody: ReturnType<typeof parseRequestBody>) {
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
