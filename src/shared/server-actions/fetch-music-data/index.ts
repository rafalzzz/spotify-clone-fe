import { TFetchMusicData } from '@/types/server-actions';

export const fetchMusicData = async <T>({
  term,
  entity,
  errorMessage,
  limit = 10,
  revalidate = 600,
}: TFetchMusicData): Promise<T> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_ITUNES}/search?term=${term}&entity=${entity}&limit=${limit}`,
    {
      next: { revalidate },
    },
  );

  if (!response.ok) {
    throw new Error(errorMessage);
  }

  const { results } = await response.json();
  return results;
};
