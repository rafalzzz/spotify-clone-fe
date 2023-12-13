export const generateAlbumRedirectionPath = (artistName: string): string =>
  `/album/${artistName.toLocaleLowerCase()}`;
