import { customRequest } from '@/utils/custom-request';

export const fetchArtistAlbums = (artistId: number): Promise<string | Response | undefined> =>
  customRequest({
    basicUrl: process.env.NEXT_PUBLIC_API_ITUNES,
    endpoint: `/lookup?id=${artistId}&entity=album`,
    method: 'GET',
  })
    .then(async (response) => await response.json())
    .catch(() => 'Something went wrong');
