'use client';

import { PlayCircleFilled, PauseCircleFilled } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { FC, PropsWithChildren, useRef } from 'react';

import { generateAlbumRedirectionPath } from '@/utils/generate-album-redirection-path';

import './CustomSectionItem.scss';

type TCustomSectionItem = {
  collectionName: string;
  imageUrl: string;
  isActive: boolean;
  onClick: () => void;
};

export const CustomSectionItem: FC<PropsWithChildren<TCustomSectionItem>> = ({
  children,
  collectionName,
  imageUrl,
  isActive,
  onClick,
}) => {
  const ref = useRef(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    onClick();
  };

  return (
    <Link
      href={generateAlbumRedirectionPath(collectionName)}
      className='custom-section-item__redirection'
      data-testid='custom-section-item-redirection'
    >
      <div className='custom-section-item'>
        <div className='custom-section-item__image' ref={ref}>
          <Image
            src={imageUrl}
            width={100}
            height={100}
            style={{ height: '100%', width: '100%' }}
            alt='image'
            loading='lazy'
            decoding='async'
          />
          <button
            className='custom-section-item__play-button'
            onClick={handleClick}
            data-testid='custom-section-item-play-button'
          >
            {isActive ? (
              <PauseCircleFilled className='antd-icon' />
            ) : (
              <PlayCircleFilled className='antd-icon' />
            )}
          </button>
        </div>
        {children}
      </div>
    </Link>
  );
};
