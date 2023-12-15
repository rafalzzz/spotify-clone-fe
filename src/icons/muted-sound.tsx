import * as React from 'react';

const MutedSoundIcon = (): JSX.Element => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    role='img'
    height='16'
    width='16'
    aria-label='Ses seviyesi y\xFCksek'
    viewBox='0 0 16 16'
    className='svg-icon'
    data-testid='muted-sound-icon'
  >
    <path
      className='svg-icon-path'
      d='M0 5v6h2.804L8 14V2L2.804 5H0zm7-1.268v8.536L3.072 10H1V6h2.072L7 3.732zm8.623 2.121l-.707-.707-2.147 2.147-2.146-2.147-.707.707L12.062 8l-2.146 2.146.707.707 2.146-2.147 2.147 2.147.707-.707L13.477 8l2.146-2.147z'
    />
  </svg>
);

export default MutedSoundIcon;
