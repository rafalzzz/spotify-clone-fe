import React, { useEffect, useRef, useState } from 'react';

import { TProgressBar } from '@/footer/types';

import './ProgressBar.scss';

export const ProgressBar = ({
  value,
  minValue,
  maxValue,
  handleChange,
  handleStartChange,
  handleEndChange,
}: TProgressBar): JSX.Element => {
  const [decimalValue, setDecimalValue] = useState(0);

  const inputRef = useRef<HTMLInputElement | null>(null);
  const inputRefWidth = useRef<number>(0);

  const inputValue = Math.floor(value);
  const inputMaxValue = Math.floor(maxValue);

  useEffect(() => {
    const inputWidth = window.getComputedStyle(inputRef.current as HTMLInputElement).width;
    inputRefWidth.current = parseInt(inputWidth.replace('px', ''));
  });

  useEffect(() => {
    if (inputMaxValue > 1) {
      setDecimalValue((inputValue * 1) / inputMaxValue);
    } else {
      setDecimalValue(inputValue);
    }
  }, [inputMaxValue, inputValue]);

  return (
    <div className='progress-bar'>
      <input
        ref={inputRef}
        min={minValue}
        max={inputMaxValue}
        step='0.01'
        value={inputValue}
        type='range'
        className='progress-bar__input'
        onMouseDown={handleStartChange}
        onTouchStart={handleStartChange}
        onChange={handleChange}
        onMouseUp={handleEndChange}
        onTouchEnd={handleEndChange}
        data-testid='progress-bar'
      />
      <span
        className='progress-bar__span-thumb'
        style={{ left: `${decimalValue * inputRefWidth.current - 3}px` }}
      />
    </div>
  );
};
