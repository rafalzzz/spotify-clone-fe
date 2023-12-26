'use client';
import Link from 'next/link';
import { FC, PropsWithChildren } from 'react';

import { TCustomSectionItem } from '@/types/components';

import { CustomContextMenu } from '../custom-context-menu';

import './CustomSectionItem.scss';

export const CustomSectionItem: FC<PropsWithChildren<TCustomSectionItem>> = ({
  children,
  href,
  items = [],
}): JSX.Element => (
  <Link
    href={href}
    className='custom-section-item__redirection'
    data-testid='custom-section-item-redirection'
  >
    <CustomContextMenu items={items}>
      <div className='custom-section-item'>{children}</div>
    </CustomContextMenu>
  </Link>
);
