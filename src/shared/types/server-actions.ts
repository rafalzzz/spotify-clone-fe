export type TFetchMusicData = {
  term: string;
  entity: string;
  errorMessage?: string;
  limit?: number;
  revalidate?: number;
};
