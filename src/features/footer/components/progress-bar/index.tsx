import React, { useEffect, useRef, useState } from 'react';

import './ProgressBar.scss';
import { TProgressBar } from '@/footer/types';

export const ProgressBar = ({
  value,
  minValue,
  maxValue,
  handleChange,
}: TProgressBar): JSX.Element => {
  const [decimalValue, setDecimalValue] = useState(0);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputRefWidth = useRef<number>(0);

  useEffect(() => {
    const inputWidth = window.getComputedStyle(inputRef.current as HTMLInputElement).width;
    inputRefWidth.current = parseInt(inputWidth.replace('px', ''));
  });

  useEffect(() => {
    if (maxValue > 1) {
      setDecimalValue((value * 1) / maxValue);
    } else {
      setDecimalValue(value);
    }
  }, [maxValue, value]);

  return (
    <div className='progress-bar'>
      <input
        ref={inputRef}
        min={minValue}
        max={maxValue}
        step='0.01'
        value={value}
        type='range'
        className='progress-bar__input'
        onChange={handleChange}
      />
      <span
        className='progress-bar__span-thumb'
        style={{ left: `${decimalValue * inputRefWidth.current - 3}px` }}
      />
    </div>
  );
};
