export const getLatestAlbums = async () => {
  const response = await fetch(`${process.env.API_ITUNES}/search?term=new&entity=album&limit=15`, {
    next: { revalidate: 600 },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch latest albums');
  }

  const { results } = await response.json();
  return results;
};
