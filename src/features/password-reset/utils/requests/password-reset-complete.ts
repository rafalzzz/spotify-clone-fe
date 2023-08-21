import https from 'https';

import fetch from 'node-fetch';

import { PasswordResetCompleteFormValues } from '@/password-reset/types';

const agent = new https.Agent({
  rejectUnauthorized: false,
});

export async function passwordResetComplete(requestBody: PasswordResetCompleteFormValues) {
  const response = fetch(`${process.env.NEXT_PUBLIC_API_URL}/user/password-reset/complete`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    agent,
    body: JSON.stringify(requestBody),
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
