export const generateShareAlbumUrl = (albumId: number): string =>
  window.location.origin + `/album/${albumId}`;
