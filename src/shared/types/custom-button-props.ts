import { AriaRole } from 'react';
import { MouseEventHandler } from 'react';

export type CustomButtonProps = {
  htmlType: 'reset' | 'submit' | 'button' | undefined;
  text: string;
  shape?: 'default' | 'circle' | 'round';
  type?: 'default' | 'primary' | 'link' | 'text' | 'ghost' | 'dashed';
  className?: string;
  role?: AriaRole;
  disabled?: boolean;
  testId?: string;
  width?: string | number;
  onClick?: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>;
};
