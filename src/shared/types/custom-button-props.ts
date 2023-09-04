import { SizeType } from 'antd/es/config-provider/SizeContext';
import { AriaRole, ReactNode } from 'react';
import { MouseEventHandler } from 'react';

export type CustomButtonProps = {
  htmlType: 'reset' | 'submit' | 'button' | undefined;
  text: ReactNode;
  shape?: 'default' | 'circle' | 'round';
  type?: 'default' | 'primary' | 'link' | 'text' | 'ghost' | 'dashed';
  className?: string;
  role?: AriaRole;
  disabled?: boolean;
  testId?: string;
  width?: string | number;
  size: SizeType;
  onClick?: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>;
};
