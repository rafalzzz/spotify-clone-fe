import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

import { parseRequestBody } from '@/register/helpers';
import { RegisterFormValues } from '@/register/types';
import { registerUser } from '@/register/utils/requests/register-user';

import { CustomButtonProps } from '@/types/custom-button-props';
import { HookFormProps } from '@/types/hook-form-props';

export const useRegisterForm = ({ displayError }: HookFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const onFinish = async (values: RegisterFormValues) => {
    setIsLoading(true);
    try {
      const requestBody = parseRequestBody(values);
      const response = await registerUser(requestBody);

      if (!response) {
        router.push('/login');
      }

      if (response) {
        displayError(response as string);
      }
    } catch (error: unknown) {
      displayError(error as string);
    } finally {
      setIsLoading(false);
    }
  };

  const formButtons: CustomButtonProps[] = useMemo(
    () => [
      {
        key: 1,
        htmlType: 'submit',
        shape: 'round',
        text: 'Register',
        disabled: isLoading,
        testId: 'submit-button',
        className: 'register-button',
      },
    ],
    [isLoading],
  );

  return { formButtons, onFinish };
};
