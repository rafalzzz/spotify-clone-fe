import { Button } from 'antd';
import React from 'react';

import { CustomButtonProps } from '@/types/custom-button-props';

export const CustomButton = ({
  type,
  htmlType,
  text,
  onClick,
  role = 'button',
}: CustomButtonProps) => (
  <Button type={type} htmlType={htmlType} onClick={onClick} role={role}>
    {text}
  </Button>
);
