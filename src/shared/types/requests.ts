import { TAlbum } from './album';
import { TMusicTrack } from './music-track';

export type TFetchAlbumDataResponse = {
  resultCount: number;
  results: (TAlbum | TMusicTrack)[];
};
