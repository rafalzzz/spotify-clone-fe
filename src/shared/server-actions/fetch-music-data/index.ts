type FetchMusicData = {
  term: string;
  entity: string;
  errorMessage?: string;
  limit?: number;
  revalidate?: number;
};

export const fetchMusicData = async ({
  term,
  entity,
  errorMessage,
  limit = 10,
  revalidate = 600,
}: FetchMusicData) => {
  const response = await fetch(
    `${process.env.API_ITUNES}/search?term=${term}&entity=${entity}&limit=${limit}`,
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
