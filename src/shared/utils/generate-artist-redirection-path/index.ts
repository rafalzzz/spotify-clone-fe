export const generateArtistRedirectionPath = (artistName: string): string =>
  `/artist/${artistName.toLocaleLowerCase()}`;
