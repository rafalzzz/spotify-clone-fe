'use client';

import { PlayCircleFilled } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';

import { useIsImageVisible } from '@/hooks/use-is-image-visible';

import { generateAlbumRedirectionPath } from '@/utils/generate-album-redirection-path';

import './CustomSectionItem.scss';

type TCustomSectionItem = {
  collectionName: string;
  imageUrl: string;
  children: JSX.Element;
  onClick: () => void;
};

export const CustomSectionItem = ({
  collectionName,
  imageUrl,
  children,
  onClick,
}: TCustomSectionItem) => {
  const ref = useRef(null);
  const isImageVisible = useIsImageVisible({ ref });

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    event.stopPropagation();
    console.log('click');
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
          {isImageVisible && (
            <button
              className='custom-section-item__play-button'
              onClick={handleClick}
              data-testid='custom-section-item-play-button'
            >
              <PlayCircleFilled className='antd-icon' />
            </button>
          )}
        </div>
        {children}
      </div>
    </Link>
  );
};
