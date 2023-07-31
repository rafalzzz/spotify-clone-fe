'use client';
import { Form } from 'antd';

import { DateOfBirthInput } from '@/register/components/date-of-birth-input';
import { FORM_FIELDS, INITIAL_VALUES } from '@/register/consts';
import { RegisterFormKeys } from '@/register/enums/register-form-keys';
import { useRegisterForm } from '@/register/hooks/use-register-form';

import { useDisplayError } from '@/hooks/use-display-error';

import { InputType, NonStandardInputType } from '@/enums/input-type';

import { CustomFormButtons, CustomFormItem } from '@/shared/components';

import './RegisterForm.scss';

export type RegisterFormType = Record<RegisterFormKeys, string | number>;

export const RegisterForm = () => {
  const [form] = Form.useForm<RegisterFormType>();
  const { displayError, contextHolder } = useDisplayError();
  const { formButtons, onFinish } = useRegisterForm({ displayError });

  const isStandardInput = (inputType: string) =>
    Object.values(InputType).includes(inputType as InputType);

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
          if (type === NonStandardInputType.DATE_OF_BIRTH)
            return <DateOfBirthInput key={key} {...restProps} />;
        })}
        <CustomFormButtons formButtons={formButtons} />
      </Form>
      {contextHolder}
    </>
  );
};
