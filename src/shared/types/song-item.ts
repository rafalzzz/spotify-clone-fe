import { EMusicTrackKeys, MusicTrack } from './music-track';

export type TSongItem = Pick<
  MusicTrack,
  | EMusicTrackKeys.ARTIST_NAME
  | EMusicTrackKeys.TRACK_NAME
  | EMusicTrackKeys.PREVIEW_URL
  | EMusicTrackKeys.ARTWORK_URL_60
>;
