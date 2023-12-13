export const enum EMusicTrackKeys {
  ARTIST_ID = 'artistId',
  ARTIST_NAME = 'artistName',
  ARTWORK_URL_30 = 'artworkUrl30',
  ARTWORK_URL_60 = 'artworkUrl60',
  ARTWORK_URL_100 = 'artworkUrl100',
  COLLECTION_CENSORED_NAME = 'collectionCensoredName',
  COLLECTION_EXPLICITNESS = 'collectionExplicitness',
  COLLECTION_ID = 'collectionId',
  COLLECTION_NAME = 'collectionName',
  COLLECTION_PRICE = 'collectionPrice',
  COLLECTION_VIEW_URL = 'collectionViewUrl',
  COUNTRY = 'country',
  CURRENCY = 'currency',
  DISC_COUNT = 'discCount',
  DISC_NUMBER = 'discNumber',
  IS_STREAMABLE = 'isStreamable',
  KIND = 'kind',
  PREVIEW_URL = 'previewUrl',
  PRIMARY_GENRE_NAME = 'primaryGenreName',
  RELEASE_DATE = 'releaseDate',
  TRACK_CENSORED_NAME = 'trackCensoredName',
  TRACK_COUNT = 'trackCount',
  TRACK_EXPLICITNESS = 'trackExplicitness',
  TRACK_ID = 'trackId',
  TRACK_NAME = 'trackName',
  TRACK_NUMBER = 'trackNumber',
  TRACK_PRICE = 'trackPrice',
  TRACK_TIME_MILLIS = 'trackTimeMillis',
  TRACK_VIEW_URL = 'trackViewUrl',
  WRAPPER_TYPE = 'wrapperType',
}

export type TMusicTrack = {
  [EMusicTrackKeys.ARTIST_ID]: number;
  [EMusicTrackKeys.ARTIST_NAME]: string;
  [EMusicTrackKeys.ARTWORK_URL_30]: string;
  [EMusicTrackKeys.ARTWORK_URL_60]: string;
  [EMusicTrackKeys.ARTWORK_URL_100]: string;
  [EMusicTrackKeys.COLLECTION_CENSORED_NAME]: string;
  [EMusicTrackKeys.COLLECTION_EXPLICITNESS]: string;
  [EMusicTrackKeys.COLLECTION_ID]: number;
  [EMusicTrackKeys.COLLECTION_NAME]: string;
  [EMusicTrackKeys.COLLECTION_PRICE]: number;
  [EMusicTrackKeys.COLLECTION_VIEW_URL]: number;
  [EMusicTrackKeys.COUNTRY]: string;
  [EMusicTrackKeys.CURRENCY]: string;
  [EMusicTrackKeys.DISC_COUNT]: number;
  [EMusicTrackKeys.DISC_NUMBER]: number;
  [EMusicTrackKeys.IS_STREAMABLE]: boolean;
  [EMusicTrackKeys.KIND]: string;
  [EMusicTrackKeys.PREVIEW_URL]: string;
  [EMusicTrackKeys.PRIMARY_GENRE_NAME]: string;
  [EMusicTrackKeys.RELEASE_DATE]: string;
  [EMusicTrackKeys.TRACK_CENSORED_NAME]: string;
  [EMusicTrackKeys.TRACK_COUNT]: number;
  [EMusicTrackKeys.TRACK_EXPLICITNESS]: string;
  [EMusicTrackKeys.TRACK_ID]: number;
  [EMusicTrackKeys.TRACK_NAME]: string;
  [EMusicTrackKeys.TRACK_NUMBER]: number;
  [EMusicTrackKeys.TRACK_PRICE]: number;
  [EMusicTrackKeys.TRACK_TIME_MILLIS]: number;
  [EMusicTrackKeys.TRACK_VIEW_URL]: string;
  [EMusicTrackKeys.WRAPPER_TYPE]: string;
};
