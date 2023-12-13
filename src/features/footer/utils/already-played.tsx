export const alreadyPlayed = (time: number) => {
  const minutes = Math.floor(time / 60);
  const seconds = Math.ceil(time - Math.floor(time / 60));
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
