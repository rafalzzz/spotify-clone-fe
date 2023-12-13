import { Form } from 'antd';
import React from 'react';

import { TCustomButton } from '@/types/components';

import { CustomButton } from '../custom-button';

import './SubmitButton.scss';

export const SubmitButton = ({
  submitButtonProps,
}: {
  submitButtonProps: TCustomButton;
}): JSX.Element => (
  <Form.Item className='submit-button'>
    <CustomButton {...submitButtonProps} />
  </Form.Item>
);
