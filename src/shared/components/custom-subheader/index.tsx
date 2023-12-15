import React, { FC } from 'react';

import { TCustomSubheader } from '@/types/components';

import './CustomSubheader.scss';

export const CustomSubheader: FC<TCustomSubheader> = ({ title }): JSX.Element => (
  <header className='custom-subheader'>
    <h2 className='custom-subheader__text'>{title}</h2>
  </header>
);
