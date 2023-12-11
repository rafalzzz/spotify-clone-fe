type TCustomRequest = {
  basicUrl?: string;
  endpoint?: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  requestBody?: Record<string, unknown>;
  allowCookies?: boolean;
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
  allowCookies = false,
}: TCustomRequest) =>
  fetch(basicUrl + endpoint, {
    method,
    headers,
    body: JSON.stringify(requestBody),
    credentials: allowCookies ? 'include' : 'omit',
  });
