import * as React from 'react';

const AlbumIcon = (): JSX.Element => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    role='img'
    height='16'
    width='16'
    viewBox='0 0 16 16'
    className='svg-icon'
  >
    <path
      className='svg-icon-path'
      d='M8 1.5a6.5 6.5 0 1 0 0 13 6.5 6.5 0 0 0 0-13zM0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8z'
    />
    <path
      className='svg-icon-path'
      d='M8 6.5a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3zM5 8a3 3 0 1 1 6 0 3 3 0 0 1-6 0z'
    />
  </svg>
);

export default AlbumIcon;
