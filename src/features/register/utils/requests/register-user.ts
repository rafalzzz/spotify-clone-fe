'use server';
import https from 'https';

import fetch from 'node-fetch';

const agent = new https.Agent({
  rejectUnauthorized: false,
});

export async function registerUser(requestBody: Record<string, string | number | boolean>) {
  const response = fetch(`${process.env.API_URL}/user`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    agent,
    body: JSON.stringify(requestBody),
  }).then(async (response) => {
    if (response.status === 200) {
      return;
    }

    return await response.json();
  });

  return response;
}
