import { AriaRole } from 'react';
import { MouseEventHandler } from 'react';

export type CustomButtonProps = {
  type: 'default' | 'primary' | 'link' | 'text' | 'ghost' | 'dashed' | undefined;
  htmlType: 'reset' | 'submit' | 'button' | undefined;
  text: string;
  key?: number;
  role?: AriaRole;
  disabled?: boolean;
  testId?: string;
  onClick?: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>;
};
