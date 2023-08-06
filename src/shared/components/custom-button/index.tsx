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
}: CustomButtonProps) => (
  <Button
    className={className}
    shape={shape}
    size='large'
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
