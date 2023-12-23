import { PlayCircleFilled, PauseCircleFilled } from '@ant-design/icons';

import { useMusicPlayerStore } from '@/store/music-player';

import { CustomIconButton } from '@/components/custom-icon-button';

export const PlayerPlayButton = (): JSX.Element => {
  const isPlaying = useMusicPlayerStore(({ isPlaying }) => isPlaying);
  const togglePlay = useMusicPlayerStore(({ togglePlay }) => togglePlay);

  return (
    <CustomIconButton onClick={togglePlay} isActive={false} testId='play-button'>
      {isPlaying ? (
        <PauseCircleFilled data-testid='player-buttons-pause-icon' />
      ) : (
        <PlayCircleFilled data-testid='player-buttons-play-icon' />
      )}
    </CustomIconButton>
  );
};
