import { HeartFilled } from '@ant-design/icons';
import { Button } from 'antd';
import React from 'react';
import { MouseEventHandler } from 'react';

import { CustomTooltip } from '../custom-tooltip';

import './CustomAddToFavoriteButton.scss';

export type CustomAddToFavoriteButtonProps = {
  title: string;
  disabled?: boolean;
  isAddedToFav?: boolean;
  onClick?: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>;
};

export const CustomAddToFavoriteButton = ({
  title = '',
  disabled = false,
  isAddedToFav = true,
  onClick,
}: CustomAddToFavoriteButtonProps) => (
  <Button
    className={`custom-add-to-favorite-button custom-add-to-favorite-button--${
      isAddedToFav ? 'inactive' : 'active'
    }`}
    size='small'
    htmlType='button'
    onClick={onClick}
    role='button'
    data-testid='custom-add-to-favorite-button'
    disabled={disabled}
    ghost
  >
    <CustomTooltip title={title} placement='top' testId='custom-add-to-favorite-button-tooltip'>
      <HeartFilled />
    </CustomTooltip>
  </Button>
);
