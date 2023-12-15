import { EMusicTrackKeys } from '@/types/music-track';

export const mockMusicStoreSongsListItem = {
  [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist',
  [EMusicTrackKeys.TRACK_NAME]: 'TestTrack',
  [EMusicTrackKeys.PREVIEW_URL]: 'www.test-url.com/1',
  [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url1.jpg',
};

export const mockMusicStoreSongsList = [mockMusicStoreSongsListItem];
