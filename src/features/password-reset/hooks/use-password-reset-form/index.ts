import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

import { LoginFormValues } from '@/login/types';

import { passwordReset } from '@/password-reset/utils/requests/password-reset';

import { CustomButtonProps } from '@/types/custom-button-props';
import { HookFormProps } from '@/types/hook-form-props';

export const usePasswordResetForm = ({ displayError }: HookFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const onFinish = async (values: LoginFormValues) => {
    setIsLoading(true);

    try {
      const response = await passwordReset(values);

      if (!response) {
        router.push('/');
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
        text: 'Send',
        disabled: isLoading,
        testId: 'submit-button',
        className: 'login-button',
      },
    ],
    [isLoading],
  );

  return { formButtons, onFinish };
};
