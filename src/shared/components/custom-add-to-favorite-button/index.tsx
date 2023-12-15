import { HeartFilled } from '@ant-design/icons';
import { Button } from 'antd';
import React, { FC } from 'react';

import { TCustomAddToFavoriteButton } from '@/types/components';

import { CustomTooltip } from '../custom-tooltip';

import './CustomAddToFavoriteButton.scss';

export const CustomAddToFavoriteButton: FC<TCustomAddToFavoriteButton> = ({
  title = '',
  disabled = false,
  isAddedToFav = true,
  onClick,
}): JSX.Element => (
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
