import React from 'react';

import './ProgressBar.scss';

const decimalValue = 60;
const inputRefWidth = { current: 5 };

export const ProgressBar = () => (
  <div className='progress-bar'>
    <div className='progress-bar__timer'>0:00</div>
    <div className='progress-bar__slider-container'>
      <input
        type='range'
        onChange={() => {
          console.log('click');
        }}
        className='progress-bar__slider'
        step='0.01'
      />
      <span
        className='progress-bar__span-thumb'
        style={{ left: `${decimalValue * inputRefWidth.current - 3}px` }}
      ></span>
    </div>
    <div className='progress-bar__timer'>1:00</div>
  </div>
);
