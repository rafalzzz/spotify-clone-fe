import { fetchMusicData } from '@/server-actions/fetch-music-data';

export const useLandingPage = async () => {
  const loveSongsPromise = fetchMusicData({
    term: 'love',
    entity: 'musicTrack',
    limit: 15,
    errorMessage: 'Failed to fetch songs',
  });

  const loveAlbumsPromise = fetchMusicData({
    term: 'love',
    entity: 'album',
    limit: 15,
    errorMessage: 'Failed to fetch albums',
  });

  const discJockeysPromise = fetchMusicData({
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
