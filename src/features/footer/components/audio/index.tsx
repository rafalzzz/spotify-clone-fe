import { useAudio } from '@/footer/hooks/use-audio';

import { EMusicTrackKeys } from '@/types/music-track';

export const Audio = (): JSX.Element => {
  const { ref, currentSong, isPlaying, isLoop, onLoadedMetadata, onTimeUpdate, onEnded } =
    useAudio();

  return (
    <audio
      ref={ref}
      src={currentSong?.[EMusicTrackKeys.PREVIEW_URL]}
      autoPlay={isPlaying}
      onLoadedMetadata={onLoadedMetadata}
      onTimeUpdate={onTimeUpdate}
      onEnded={onEnded}
      loop={isLoop}
    />
  );
};
