import { getLatestAlbums, getLatestSongs } from '../server-actions';

export const useLandingPage = async () => {
  const latestSongs = getLatestSongs();
  const latestAlbums = getLatestAlbums();

  const [songs, albums] = await Promise.all([latestSongs, latestAlbums]);

  return { songs, albums };
};
