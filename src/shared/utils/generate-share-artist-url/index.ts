export const generateShareArtistUrl = (artistId: number): string =>
  window.location.origin + `/artist/${artistId}`;
