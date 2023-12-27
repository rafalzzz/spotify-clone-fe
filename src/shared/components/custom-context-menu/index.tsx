'use client';
import { Dropdown } from 'antd';
import { FC, PropsWithChildren } from 'react';

import { TCustomContextMenu } from '@/types/components';

import './CustomContextMenu.scss';

export const CustomContextMenu: FC<PropsWithChildren<TCustomContextMenu>> = ({
  children,
  items = [],
  onOpenChange,
}): JSX.Element => (
  <Dropdown
    menu={{ className: 'custom-context-menu', items }}
    trigger={['contextMenu']}
    placement='top'
    onOpenChange={onOpenChange}
  >
    {children}
  </Dropdown>
);
