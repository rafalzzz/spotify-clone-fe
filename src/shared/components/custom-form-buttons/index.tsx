import { Form } from 'antd';
import React from 'react';

import { CustomButtonProps } from '@/types/custom-button-props';

import { CustomButton } from '../custom-button';

import './CustomFormButtons.scss';

export const CustomFormButtons = ({ formButtons }: { formButtons: CustomButtonProps[] }) => (
  <Form.Item className='form-buttons'>
    {formButtons.map(({ key, ...restProps }) => (
      <CustomButton key={key} {...restProps} />
    ))}
  </Form.Item>
);
