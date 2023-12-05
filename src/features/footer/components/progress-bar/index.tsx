import React from 'react';

import './ProgressBar.scss';

const decimalValue = 60;
const inputRefWidth = { current: 5 };

export const ProgressBar = () => (
  <div className='progress-bar'>
    <input
      type='range'
      onChange={() => {
        console.log('click');
      }}
      className='progress-bar__input'
      step='0.01'
    />
    <span
      className='progress-bar__span-thumb'
      style={{ left: `${decimalValue * inputRefWidth.current - 3}px` }}
    />
  </div>
);
