import { customRequest } from '@/utils/custom-request';

import { ENDPOINTS } from '@/consts/endpoints';

export async function passwordResetComplete(token: string, requestBody: { password: string }) {
  const response = customRequest({
    endpoint: `${ENDPOINTS.PASSWORD_RESET_COMPLETE}/${token}`,
    method: 'PUT',
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
