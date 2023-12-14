import { useAudio } from '@/footer/hooks/use-audio';
import { TAudio } from '@/footer/types';

import { EMusicTrackKeys } from '@/types/music-track';

export const Audio = ({ setCurrentTime }: TAudio): JSX.Element => {
  const { ref, currentSong, isPlaying, isLoop, onLoadedMetadata, onTimeUpdate, onEnded } = useAudio(
    { setCurrentTime },
  );

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
