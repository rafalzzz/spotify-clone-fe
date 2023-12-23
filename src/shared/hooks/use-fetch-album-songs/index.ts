'use client';
import { useQueryClient, useQuery } from 'react-query';

import { TUseGetAlbumSongs, TUseGetAlbumSongsProps } from '@/types/hooks';

import { fetchAlbumData } from '@/shared/requests/fetch-album-data';

export const useGetAlbumSongs = ({
  albumId,
  onSuccess,
}: TUseGetAlbumSongs): TUseGetAlbumSongsProps => {
  const queryClient = useQueryClient();

  return {
    cachedData: queryClient.getQueryData(`album-${albumId}`),
    fetchAlbumSongsAction: useQuery(`album-${albumId}`, () => fetchAlbumData(albumId), {
      onSuccess,
      enabled: false,
    }),
  };
};
