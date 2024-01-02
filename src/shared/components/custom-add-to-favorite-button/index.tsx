import { HeartFilled, HeartOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import React, { FC } from 'react';

import { TCustomAddToFavoriteButton } from '@/types/components';

import { CustomTooltip } from '../custom-tooltip';

import './CustomAddToFavoriteButton.scss';

export const CustomAddToFavoriteButton: FC<TCustomAddToFavoriteButton> = ({
  title = '',
  isAddedToFav,
  onClick,
}): JSX.Element => (
  <Button
    className='custom-add-to-favorite-button'
    size='small'
    htmlType='button'
    onClick={onClick}
    role='button'
    data-testid='custom-add-to-favorite-button'
    ghost
  >
    <CustomTooltip title={title} placement='top' testId='custom-add-to-favorite-button-tooltip'>
      {isAddedToFav ? (
        <HeartFilled data-testid='is-favorite-icon' />
      ) : (
        <HeartOutlined data-testid='is-not-favorite-icon' />
      )}
    </CustomTooltip>
  </Button>
);
