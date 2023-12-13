import { FC, useMemo } from 'react';

import { TDuration } from '@/footer/types';
import { formatDuration } from '@/footer/utils/format-duration';

import './Duration.scss';

export const Duration: FC<TDuration> = ({ seconds }) => {
  const memoizedValue = useMemo(() => formatDuration(seconds), [seconds]);

  return <button className='duration'>{memoizedValue}</button>;
};
