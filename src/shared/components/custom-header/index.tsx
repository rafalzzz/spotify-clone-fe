import React from 'react';

import './CustomHeader.scss';

type TCustomHeader = {
  title: string;
};

export const CustomHeader = ({ title }: TCustomHeader) => (
  <header className='custom-header'>
    <h1 className='custom-header__text'>{title}</h1>
  </header>
);
