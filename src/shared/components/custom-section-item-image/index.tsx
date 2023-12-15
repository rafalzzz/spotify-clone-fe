'use client';
import Image from 'next/image';
import { FC, PropsWithChildren } from 'react';

import { TCustomSectionItemImage } from '@/types/components';

import './CustomSectionItemImage.scss';

export const CustomSectionItemImage: FC<PropsWithChildren<TCustomSectionItemImage>> = ({
  children,
  imageUrl,
}): JSX.Element => (
  <div className='custom-section-item-image'>
    <Image
      src={imageUrl}
      width={100}
      height={100}
      style={{ height: '100%', width: '100%' }}
      alt='image'
      loading='lazy'
      decoding='async'
    />
    {children}
  </div>
);
