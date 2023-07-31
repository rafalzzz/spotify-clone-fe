import { Button } from 'antd';
import React from 'react';

import { CustomButtonProps } from '@/types/custom-button-props';

export const CustomButton = ({
  type,
  htmlType,
  text,
  onClick,
  role = 'button',
  disabled = false,
  testId = '',
}: CustomButtonProps) => (
  <Button
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
