const pad = (number: number): string => {
  return ('0' + number).slice(-2);
};

export const formatDuration = (seconds: number): string => {
  if (seconds < 0) return '0:00';

  const date = new Date(seconds * 1000);
  const hh = date.getUTCHours();
  const mm = date.getUTCMinutes();
  const ss = pad(date.getUTCSeconds());

  if (hh) {
    return `${hh}:${pad(mm)}:${ss}`;
  }

  return `${mm}:${ss}`;
};
