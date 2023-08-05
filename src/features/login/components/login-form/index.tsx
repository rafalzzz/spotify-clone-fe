'use client';
import { Form } from 'antd';

import { FORM_FIELDS, INITIAL_VALUES } from '@/login/consts';
import { LoginFormKeys } from '@/login/enums/login-form-keys';
import { useLoginForm } from '@/login/hooks/use-login-form';

import { useDisplayError } from '@/hooks/use-display-error';

import { CustomFormButtons, CustomFormItem } from '@/shared/components';

import './LoginForm.scss';

export type LoginFormType = Record<LoginFormKeys, string>;

export const LoginForm = () => {
  const [form] = Form.useForm<LoginFormType>();
  const { displayError, contextHolder } = useDisplayError();
  const { formButtons, onFinish } = useLoginForm({ displayError });

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
        scrollToFirstError
      >
        {FORM_FIELDS.map(({ key, type, ...restProps }) => (
          <CustomFormItem key={key} type={type} {...restProps} />
        ))}
        <CustomFormButtons formButtons={formButtons} />
      </Form>
      {contextHolder}
    </>
  );
};
