import { Form } from 'antd';
import React from 'react';

import { CustomButtonProps } from '@/types/custom-button-props';

import { CustomButton } from '../custom-button';

import './SubmitButton.scss';

export const SubmitButton = ({ submitButtonProps }: { submitButtonProps: CustomButtonProps }) => (
  <Form.Item className='submit-button'>
    <CustomButton {...submitButtonProps} />
  </Form.Item>
);
