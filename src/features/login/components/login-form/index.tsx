'use client';
import { Form } from 'antd';

import { FORM_FIELDS, INITIAL_VALUES } from '@/login/consts';
import { useLoginForm } from '@/login/hooks/use-login-form';
import { TLoginForm } from '@/login/types';

import { useDisplayError } from '@/hooks/use-display-error';

import { CustomFormItem, SubmitButton } from '@/shared/components';

import './LoginForm.scss';

export const LoginForm = () => {
  const [form] = Form.useForm<TLoginForm>();
  const { displayError, contextHolder } = useDisplayError();
  const { submitButton, onFinish } = useLoginForm({ displayError });

  return (
    <>
      <Form
        className='login-form'
        name='login'
        layout='vertical'
        size='large'
        form={form}
        initialValues={INITIAL_VALUES}
        onFinish={onFinish}
      >
        {FORM_FIELDS.map(({ key, type, ...restProps }) => (
          <CustomFormItem key={key} type={type} setFieldValue={form.setFieldValue} {...restProps} />
        ))}
        <SubmitButton submitButtonProps={submitButton} />
      </Form>
      {contextHolder}
    </>
  );
};
