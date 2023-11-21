import React from 'react';

import './CustomSubheader.scss';

type CustomSubheaderProps = {
  title: string | JSX.Element;
};

export const CustomSubheader = ({ title }: CustomSubheaderProps) => (
  <header className='custom-subheader'>
    <h2 className='custom-subheader__text'>{title}</h2>
  </header>
);
