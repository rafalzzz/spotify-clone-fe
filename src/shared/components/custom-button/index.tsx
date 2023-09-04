import { Button } from 'antd';
import React from 'react';

import { CustomButtonProps } from '@/types/custom-button-props';

export const CustomButton = ({
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
}: CustomButtonProps) => (
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
