import { Button } from 'antd';
import React, { FC } from 'react';

import { TCustomButton } from '@/types/components';

export const CustomButton: FC<TCustomButton> = ({
  htmlType,
  text,
  onClick,
  shape,
  type = 'default',
  className = '',
  role = 'button',
  disabled = false,
  testId = '',
  size = 'large',
}): JSX.Element => (
  <Button
    className={className}
    shape={shape}
    size={size}
    type={type}
    htmlType={htmlType}
    onClick={onClick}
    role={role}
    data-testid={testId}
    disabled={disabled}
  >
    {text}
  </Button>
);
