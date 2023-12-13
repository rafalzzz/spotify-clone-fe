import React from 'react';

import { TCustomSubheader } from '@/types/components';

import './CustomSubheader.scss';

export const CustomSubheader = ({ title }: TCustomSubheader): JSX.Element => (
  <header className='custom-subheader'>
    <h2 className='custom-subheader__text'>{title}</h2>
  </header>
);
