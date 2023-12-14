import { FC, useMemo } from 'react';

import { TDuration } from '@/footer/types';
import { formatDuration } from '@/footer/utils/format-duration';

import './Duration.scss';

export const Duration: FC<TDuration> = ({ seconds }): JSX.Element => {
  const memoizedValue = useMemo(() => formatDuration(seconds), [seconds]);

  return (
    <button className='duration' data-testid='duration-button'>
      {memoizedValue}
    </button>
  );
};
