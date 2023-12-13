import React from 'react';

import { TCustomHeader } from '@/types/components';

import './CustomHeader.scss';

export const CustomHeader = ({ title }: TCustomHeader): JSX.Element => (
  <header className='custom-header'>
    <h1 className='custom-header__text'>{title}</h1>
  </header>
);
