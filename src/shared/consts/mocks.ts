import { EMusicTrackKeys } from '@/types/music-track';

export const mockSongItem = {
  [EMusicTrackKeys.TRACK_ID]: 1,
  [EMusicTrackKeys.ARTIST_ID]: 1,
  [EMusicTrackKeys.COLLECTION_ID]: 1,
  [EMusicTrackKeys.PREVIEW_URL]: 'www.test-url.com/1',
  [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url1.jpg',
  [EMusicTrackKeys.TRACK_NAME]: 'TestTrack',
  [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist',
  [EMusicTrackKeys.COLLECTION_NAME]: 'collectionName',
};

export const mockMusicStoreSongsList = [mockSongItem];
