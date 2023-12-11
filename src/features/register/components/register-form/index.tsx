'use client';
import { Form } from 'antd';

import { DateOfBirthInput } from '@/register/components/date-of-birth-input';
import { FORM_FIELDS, INITIAL_VALUES } from '@/register/consts';
import { useRegisterForm } from '@/register/hooks/use-register-form';
import { TRegisterForm } from '@/register/types';

import { useDisplayError } from '@/hooks/use-display-error';

import { EInputType, ENonStandardInputType } from '@/enums/input-type';

import { CustomFormItem, SubmitButton } from '@/shared/components';

import './RegisterForm.scss';

export const RegisterForm = () => {
  const [form] = Form.useForm<TRegisterForm>();
  const { displayError, contextHolder } = useDisplayError();
  const { submitButton, onFinish } = useRegisterForm({ displayError });

  const isStandardInput = (inputType: string) =>
    Object.values(EInputType).includes(inputType as EInputType);

  return (
    <>
      <Form
        className='register-form'
        name='register'
        layout='vertical'
        size='large'
        form={form}
        initialValues={INITIAL_VALUES}
        onFinish={onFinish}
        scrollToFirstError
      >
        {FORM_FIELDS.map(({ key, type, ...restProps }) => {
          if (isStandardInput(type)) return <CustomFormItem key={key} type={type} {...restProps} />;
          if (type === ENonStandardInputType.DATE_OF_BIRTH)
            return <DateOfBirthInput key={key} {...restProps} />;
        })}
        <SubmitButton submitButtonProps={submitButton} />
      </Form>
      {contextHolder}
    </>
  );
};
