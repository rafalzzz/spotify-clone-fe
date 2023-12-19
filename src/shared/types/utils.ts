export type TCustomRequest = {
  basicUrl?: string;
  endpoint?: string;
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  headers?: Record<string, string>;
  requestBody?: Record<string, unknown>;
  allowCookies?: boolean;
};

export type MockResizeObserver = {
  observe: jest.Mock;
  unobserve: jest.Mock;
  disconnect: jest.Mock;
};
