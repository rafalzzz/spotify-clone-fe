import { useAudio } from '@/footer/hooks/use-audio';

import { EMusicTrackKeys } from '@/types/music-track';

export const Audio = () => {
  const { ref, currentSong, isPlaying, onLoadedMetadata, onTimeUpdate, onEnded } = useAudio();

  return (
    <audio
      ref={ref}
      src={currentSong?.[EMusicTrackKeys.PREVIEW_URL]}
      autoPlay={isPlaying}
      onLoadedMetadata={onLoadedMetadata}
      onTimeUpdate={onTimeUpdate}
      onEnded={onEnded}
    />
  );
};
