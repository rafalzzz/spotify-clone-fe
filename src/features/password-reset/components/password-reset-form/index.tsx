'use client';
import { Form } from 'antd';

import { FORM_FIELDS, INITIAL_VALUES } from '@/password-reset/consts';
import { usePasswordResetForm } from '@/password-reset/hooks/use-password-reset-form';
import { PasswordResetFormValues } from '@/password-reset/types';

import { useDisplayError } from '@/hooks/use-display-error';

import { CustomFormButtons, CustomFormItem } from '@/shared/components';

import './PasswordResetForm.scss';

export const PasswordResetForm = () => {
  const [form] = Form.useForm<PasswordResetFormValues>();
  const { displayError, contextHolder } = useDisplayError();
  const { formButtons, onFinish } = usePasswordResetForm({ displayError });

  return (
    <>
      <Form
        className='password-reset-form'
        name='password-reset'
        layout='vertical'
        size='large'
        form={form}
        initialValues={INITIAL_VALUES}
        onFinish={onFinish}
      >
        {FORM_FIELDS.map(({ key, type, ...restProps }) => (
          <CustomFormItem key={key} type={type} setFieldValue={form.setFieldValue} {...restProps} />
        ))}
        <CustomFormButtons formButtons={formButtons} />
      </Form>
      {contextHolder}
    </>
  );
};
