import { FC, useMemo } from 'react';

import { ETextAlign, TDuration } from '@/footer/types';
import { formatDuration } from '@/footer/utils/format-duration';

import './Duration.scss';

export const Duration: FC<TDuration> = ({
  seconds,
  isReversedTime = false,
  disabled = false,
  textAlign = ETextAlign.START,
  onClick,
}): JSX.Element => {
  const memoizedValue = useMemo(
    () => formatDuration(seconds, isReversedTime),
    [seconds, isReversedTime],
  );

  return (
    <button
      className={`duration duration--text-align-${
        textAlign === ETextAlign.START ? 'start' : 'end'
      }`}
      data-testid='duration-button'
      disabled={disabled}
      onClick={onClick}
    >
      {memoizedValue}
    </button>
  );
};
