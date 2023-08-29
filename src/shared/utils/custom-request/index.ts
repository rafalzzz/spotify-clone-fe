import https from 'https';

import fetch from 'node-fetch';

const agent = new https.Agent({
  rejectUnauthorized: false,
});

type CustomRequestProps = {
  basicUrl?: string;
  endpoint?: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  requestBody?: Record<string, unknown>;
};

export const customRequest = ({
  basicUrl = process.env.NEXT_PUBLIC_API_URL,
  endpoint = '/',
  method,
  headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  requestBody,
}: CustomRequestProps) =>
  fetch(basicUrl + endpoint, {
    method,
    headers,
    agent,
    body: JSON.stringify(requestBody),
  });
