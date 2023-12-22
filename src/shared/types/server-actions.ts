export type TFetchMusicData = {
  term: string;
  entity: string;
  errorMessage?: string;
  limit?: number;
  revalidate?: number;
};

export type TFetchAlbumData = {
  collectionId: number;
  errorMessage?: string;
};
