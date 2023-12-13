export const enum EAlbumKeys {
  ARTIST_ID = 'artistId',
  ARTIST_NAME = 'artistName',
  ARTWORK_URL_60 = 'artworkUrl60',
  ARTWORK_URL_100 = 'artworkUrl100',
  COLLECTION_CENSORED_NAME = 'collectionCensoredName',
  COLLECTION_EXPLICITNESS = 'collectionExplicitness',
  COLLECTION_ID = 'collectionId',
  COLLECTION_NAME = 'collectionName',
  COLLECTION_PRICE = 'collectionPrice',
  COLLECTION_TYPE = 'collectionType',
  COLLECTION_VIEW_URL = 'collectionViewUrl',
  COPYRIGHT = 'copyright',
  COUNTRY = 'country',
  CURRENCY = 'currency',
  PRIMARY_GENRE_NAME = 'primaryGenreName',
  RELEASE_DATE = 'releaseDate',
  TRACK_COUNT = 'trackCount',
  WRAPPER_TYPE = 'wrapperType',
}

export type Album = {
  [EAlbumKeys.ARTIST_ID]: number;
  [EAlbumKeys.ARTIST_NAME]: string;
  [EAlbumKeys.ARTWORK_URL_60]: string;
  [EAlbumKeys.ARTWORK_URL_100]: string;
  [EAlbumKeys.COLLECTION_CENSORED_NAME]: string;
  [EAlbumKeys.COLLECTION_EXPLICITNESS]: string;
  [EAlbumKeys.COLLECTION_ID]: number;
  [EAlbumKeys.COLLECTION_NAME]: string;
  [EAlbumKeys.COLLECTION_CENSORED_NAME]: string;
  [EAlbumKeys.COLLECTION_PRICE]: number;
  [EAlbumKeys.COLLECTION_TYPE]: string;
  [EAlbumKeys.COLLECTION_VIEW_URL]: string;
  [EAlbumKeys.COPYRIGHT]: string;
  [EAlbumKeys.COUNTRY]: string;
  [EAlbumKeys.CURRENCY]: string;
  [EAlbumKeys.PRIMARY_GENRE_NAME]: string;
  [EAlbumKeys.RELEASE_DATE]: string;
  [EAlbumKeys.TRACK_COUNT]: number;
  [EAlbumKeys.WRAPPER_TYPE]: string;
};
