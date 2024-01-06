'use client';
import { Dropdown } from 'antd';
import { FC, PropsWithChildren } from 'react';

import { TCustomContextMenu } from '@/types/components';

import './CustomContextMenu.scss';

export const CustomContextMenu: FC<PropsWithChildren<TCustomContextMenu>> = ({
  children,
  items = [],
  position = 'top',
  wrapperClassName = '',
  onOpenChange,
}): JSX.Element => (
  <Dropdown
    className={wrapperClassName}
    menu={{
      className: 'custom-context-menu',
      items,
      motion: {
        motionName: 'none',
        motionAppear: false,
        motionEnter: false,
        motionLeave: false,
        motionDeadline: 0,
      },
    }}
    trigger={['contextMenu']}
    placement={position}
    onOpenChange={onOpenChange}
    destroyPopupOnHide
  >
    {children}
  </Dropdown>
);
