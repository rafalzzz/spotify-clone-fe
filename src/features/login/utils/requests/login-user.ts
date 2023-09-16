import { LoginFormValues } from '@/login/types';

import { customRequest } from '@/utils/custom-request';

import { ENDPOINTS } from '@/consts/endpoints';

export async function loginUser(requestBody: LoginFormValues) {
  const response = customRequest({
    endpoint: ENDPOINTS.LOGIN_USER,
    method: 'POST',
    requestBody,
    allowCookies: true,
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
