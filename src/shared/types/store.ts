import { EMusicTrackKeys, TMusicTrack } from './music-track';

export type TSongItem = Pick<
  TMusicTrack,
  | EMusicTrackKeys.ARTIST_NAME
  | EMusicTrackKeys.TRACK_NAME
  | EMusicTrackKeys.PREVIEW_URL
  | EMusicTrackKeys.ARTWORK_URL_60
>;
