export const generateShareTrackUrl = (trackId: number): string =>
  window.location.origin + `/track/${trackId}`;
