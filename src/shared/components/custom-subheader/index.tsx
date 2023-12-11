import React from 'react';

import './CustomSubheader.scss';

type TCustomSubheader = {
  title: string | JSX.Element;
};

export const CustomSubheader = ({ title }: TCustomSubheader) => (
  <header className='custom-subheader'>
    <h2 className='custom-subheader__text'>{title}</h2>
  </header>
);
