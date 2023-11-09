import { fetchMusicData } from '@/server-actions/fetch-music-data';

export const useLandingPage = async () => {
  const getLoveSongs = fetchMusicData({
    term: 'love',
    entity: 'musicTrack',
    limit: 15,
    errorMessage: 'Failed to fetch songs',
  });

  const getLoveAlbums = fetchMusicData({
    term: 'love',
    entity: 'album',
    limit: 15,
    errorMessage: 'Failed to fetch albums',
  });

  const [songs, albums] = await Promise.all([getLoveSongs, getLoveAlbums]);

  return { songs, albums };
};
