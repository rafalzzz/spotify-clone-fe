import { TCustomRequest } from '@/types/utils';

export const customRequest = ({
  basicUrl = process.env.NEXT_PUBLIC_API_URL,
  endpoint = '/',
  method,
  headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  requestBody,
  allowCookies = false,
}: TCustomRequest): Promise<Response> =>
  fetch(basicUrl + endpoint, {
    method,
    headers,
    body: JSON.stringify(requestBody),
    credentials: allowCookies ? 'include' : 'omit',
  });
