'use client';
import { Form } from 'antd';

import {
  PASSWORD_RESET_COMPLETE_FORM_FIELDS,
  PASSWORD_RESET_COMPLETE_INITIAL_VALUES,
} from '@/password-reset/consts';
import { usePasswordResetCompleteForm } from '@/password-reset/hooks/use-password-reset-complete-form';
import { PasswordResetCompleteFormValues } from '@/password-reset/types';

import { useDisplayError } from '@/hooks/use-display-error';

import { CustomFormItem, SubmitButton } from '@/shared/components';

import './PasswordResetCompleteForm.scss';

export const PasswordResetCompleteForm = () => {
  const [form] = Form.useForm<PasswordResetCompleteFormValues>();
  const { displayError, contextHolder } = useDisplayError();
  const { submitButton, onFinish } = usePasswordResetCompleteForm({ displayError });

  return (
    <>
      <Form
        className='password-reset-complete-form'
        name='password-reset-complete'
        layout='vertical'
        size='large'
        form={form}
        initialValues={PASSWORD_RESET_COMPLETE_INITIAL_VALUES}
        onFinish={onFinish}
      >
        {PASSWORD_RESET_COMPLETE_FORM_FIELDS.map(({ key, type, ...restProps }) => (
          <CustomFormItem key={key} type={type} setFieldValue={form.setFieldValue} {...restProps} />
        ))}
        <SubmitButton submitButtonProps={submitButton} />
      </Form>
      {contextHolder}
    </>
  );
};
