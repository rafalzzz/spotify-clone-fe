import { Form } from 'antd';
import { useRouter } from 'next/navigation';
import { useMemo, useCallback, useState } from 'react';

import { RegisterFormKeys } from '@/register/enums/register-form-keys';
import { parseRequestBody } from '@/register/helpers';
import { registerUser } from '@/register/utils/requests/register-user';

import { useDisplayError } from '@/hooks/use-display-error';

import { CustomButtonProps } from '@/types/custom-button-props';

export type RegisterFormType = Record<RegisterFormKeys, string | number>;

export const useRegisterForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();
  const [form] = Form.useForm<RegisterFormType>();
  const { displayError, contextHolder } = useDisplayError();

  const onFinish = async (values: Record<RegisterFormKeys, string | number>) => {
    setIsLoading(true);
    const requestBody = parseRequestBody(values);
    const response = await registerUser(requestBody);

    if (!response) {
      router.push('/login');
    }

    if (response) {
      displayError(response as string);
      setIsLoading(false);
    }
  };

  const clearForm = useCallback(() => {
    form.resetFields();
  }, [form]);

  const formButtons: CustomButtonProps[] = useMemo(
    () => [
      {
        key: 1,
        type: 'default',
        htmlType: 'reset',
        text: 'Clear',
        disabled: isLoading,
        testId: 'clear-form-button',
        onClick: clearForm,
      },
      {
        key: 2,
        type: 'primary',
        htmlType: 'submit',
        text: 'Register',
        disabled: isLoading,
        testId: 'submit-button',
      },
    ],
    [clearForm, isLoading],
  );

  return { form, formButtons, contextHolder, onFinish };
};
