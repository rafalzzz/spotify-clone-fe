'use client';
import { PlayCircleFilled, PauseCircleFilled } from '@ant-design/icons';
import Image from 'next/image';
import Link from 'next/link';
import { FC, PropsWithChildren, useRef } from 'react';

import { generateAlbumRedirectionPath } from '@/utils/generate-album-redirection-path';

import { TCustomSectionItem } from '@/types/components';

import './CustomSectionItem.scss';

export const CustomSectionItem: FC<PropsWithChildren<TCustomSectionItem>> = ({
  children,
  collectionName,
}): JSX.Element => (
  <Link
    href={generateAlbumRedirectionPath(collectionName)}
    className='custom-section-item__redirection'
    data-testid='custom-section-item-redirection'
  >
    <div className='custom-section-item'>{children}</div>
  </Link>
);
