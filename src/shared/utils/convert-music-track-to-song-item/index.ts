import { TSongItem } from '@/types/components';
import { EMusicTrackKeys, TMusicTrack } from '@/types/music-track';

export const convertMusicTrackToSongItem = (musicTrack: TMusicTrack): TSongItem => ({
  [EMusicTrackKeys.ARTIST_NAME]: musicTrack[EMusicTrackKeys.ARTIST_NAME],
  [EMusicTrackKeys.COLLECTION_NAME]: musicTrack[EMusicTrackKeys.COLLECTION_NAME],
  [EMusicTrackKeys.TRACK_NAME]: musicTrack[EMusicTrackKeys.TRACK_NAME],
  [EMusicTrackKeys.PREVIEW_URL]: musicTrack[EMusicTrackKeys.PREVIEW_URL],
  [EMusicTrackKeys.ARTWORK_URL_60]: musicTrack[EMusicTrackKeys.ARTWORK_URL_60],
  [EMusicTrackKeys.ARTIST_ID]: musicTrack[EMusicTrackKeys.ARTIST_ID],
  [EMusicTrackKeys.COLLECTION_ID]: musicTrack[EMusicTrackKeys.COLLECTION_ID],
  [EMusicTrackKeys.TRACK_ID]: musicTrack[EMusicTrackKeys.TRACK_ID],
});
