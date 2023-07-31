import { Form } from 'antd';
import React from 'react';
import { AriaRole } from 'react';
import { MouseEventHandler } from 'react';

import { CustomButton } from '../custom-button';

import './CustomFormButtons.scss';

export type CustomButtonProps = {
  type: 'default' | 'primary' | 'link' | 'text' | 'ghost' | 'dashed' | undefined;
  htmlType: 'reset' | 'submit' | 'button' | undefined;
  text: string;
  key?: number;
  role?: AriaRole;
  onClick?: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>;
};

export const CustomFormButtons = ({ formButtons }: { formButtons: CustomButtonProps[] }) => (
  <Form.Item className='form-buttons'>
    {formButtons.map(({ key, ...restProps }) => (
      <CustomButton key={key} {...restProps} />
    ))}
  </Form.Item>
);
