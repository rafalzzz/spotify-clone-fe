import React from 'react';

import './CustomHeader.scss';

type CustomHeaderProps = {
  title: string;
};

export const CustomHeader = ({ title }: CustomHeaderProps) => (
  <header className='custom-header'>
    <h1 className='custom-header__text'>{title}</h1>
  </header>
);
