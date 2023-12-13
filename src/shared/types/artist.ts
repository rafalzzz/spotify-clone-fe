export const enum EArtistKeys {
  AMG_ARTIST_ID = 'amgArtistId',
  ARTIST_ID = 'artistId',
  ARTIST_LINK_URL = 'artistLinkUrl',
  ARTIST_NAME = 'artistName',
  ARTIST_TYPE = 'artistType',
  PRIMARY_GENRE_ID = 'primaryGenreId',
  PRIMARY_GENRE_NAME = 'primaryGenreName',
  WRAPPER_TYPE = 'wrapperType',
}

export type Artist = {
  [EArtistKeys.AMG_ARTIST_ID]: number;
  [EArtistKeys.ARTIST_ID]: number;
  [EArtistKeys.ARTIST_LINK_URL]: string;
  [EArtistKeys.ARTIST_NAME]: string;
  [EArtistKeys.ARTIST_TYPE]: string;
  [EArtistKeys.PRIMARY_GENRE_ID]: number;
  [EArtistKeys.PRIMARY_GENRE_NAME]: string;
  [EArtistKeys.WRAPPER_TYPE]: string;
};
