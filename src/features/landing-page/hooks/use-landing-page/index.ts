import { fetchMusicData } from '@/server-actions/fetch-music-data';

import { TAlbum } from '@/types/album';
import { TArtist } from '@/types/artist';
import { TMusicTrack } from '@/types/music-track';

import { TUseLandingPageProps } from '../../types';

export const useLandingPage = async (): Promise<TUseLandingPageProps> => {
  const loveSongsPromise = fetchMusicData<TMusicTrack[]>({
    term: 'love',
    entity: 'musicTrack',
    limit: 15,
    errorMessage: 'Failed to fetch songs',
  });

  const loveAlbumsPromise = fetchMusicData<TAlbum[]>({
    term: 'love',
    entity: 'album',
    limit: 15,
    errorMessage: 'Failed to fetch albums',
  });

  const discJockeysPromise = fetchMusicData<TArtist[]>({
    term: 'dj',
    entity: 'musicArtist',
    limit: 15,
    errorMessage: 'Failed to fetch Disc Jokecys',
  });

  const [songs, albums, artists] = await Promise.all([
    loveSongsPromise,
    loveAlbumsPromise,
    discJockeysPromise,
  ]);

  return { songs, albums, artists };
};
