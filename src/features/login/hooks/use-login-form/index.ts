import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

import { LoginFormValues } from '@/login/types';
import { loginUser } from '@/login/utils/requests/login-user';

import { CustomButtonProps } from '@/types/custom-button-props';
import { HookFormProps } from '@/types/hook-form-props';

export const useLoginForm = ({ displayError }: HookFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const { push } = useRouter();

  const onFinish = async (values: LoginFormValues) => {
    setIsLoading(true);

    try {
      const response = await loginUser(values);

      if (!response) {
        push('/');
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

  const submitButton: CustomButtonProps = useMemo(
    () => ({
      htmlType: 'submit',
      shape: 'round',
      text: 'Sign in',
      disabled: isLoading,
      testId: 'submit-button',
      className: 'login-button',
    }),
    [isLoading],
  );

  return { submitButton, onFinish };
};
