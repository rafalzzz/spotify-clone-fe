import { TPasswordResetForm } from '@/password-reset/types';

import { customRequest } from '@/utils/custom-request';

import { ENDPOINTS } from '@/consts/endpoints';

export async function passwordReset(requestBody: TPasswordResetForm) {
  const response = customRequest({
    endpoint: ENDPOINTS.PASSWORD_RESET,
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
