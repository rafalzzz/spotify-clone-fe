import { QueryClient } from 'react-query';

const oneHourInMilis = 3600000;

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: oneHourInMilis,
      cacheTime: oneHourInMilis,
    },
  },
});
