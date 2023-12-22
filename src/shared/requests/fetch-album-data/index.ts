import { convertMusicTrackToSongItem } from '@/utils/convert-music-track-to-song-item';
import { customRequest } from '@/utils/custom-request';

import { TAlbum } from '@/types/album';
import { TSongItem } from '@/types/components';
import { TMusicTrack } from '@/types/music-track';
import { TFetchAlbumDataResponse } from '@/types/requests';

const isAlbum = (item: TAlbum | TMusicTrack): item is TMusicTrack => 'kind' in item;

export const fetchAlbumData = (collectionId: number): Promise<TSongItem[]> =>
  customRequest({
    basicUrl: process.env.NEXT_PUBLIC_API_ITUNES,
    endpoint: `/lookup?id=${collectionId}&entity=song`,
    method: 'GET',
  }).then(async (response) => {
    const { results } = (await response.json()) as TFetchAlbumDataResponse;
    const songs = results.reduce((acc, item) => {
      if (!isAlbum(item)) return acc;

      const songItem = convertMusicTrackToSongItem(item);

      return [...acc, songItem];
    }, [] as TSongItem[]);

    return songs;
  });
