export const getLatestSongs = async () => {
  const response = await fetch(
    `${process.env.API_ITUNES}/search?term=love&entity=musicTrack&limit=15`,
    {
      next: { revalidate: 600 },
    },
  );

  if (!response.ok) {
    throw new Error('Failed to fetch latest songs');
  }

  const { results } = await response.json();
  return results;
};
