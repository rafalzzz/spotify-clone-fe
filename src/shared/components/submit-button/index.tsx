import { Form } from 'antd';
import React, { FC } from 'react';

import { TCustomButton } from '@/types/components';

import { CustomButton } from '../custom-button';

import './SubmitButton.scss';

export const SubmitButton: FC<{
  submitButtonProps: TCustomButton;
}> = ({ submitButtonProps }): JSX.Element => (
  <Form.Item className='submit-button'>
    <CustomButton {...submitButtonProps} />
  </Form.Item>
);
