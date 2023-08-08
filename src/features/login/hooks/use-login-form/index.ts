import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

import { LoginFormValues } from '@/login/types';
import { loginUser } from '@/login/utils/requests/login-user';

import { CustomButtonProps } from '@/types/custom-button-props';

type UseLoginFormProps = {
  displayError: (description: string) => void;
};

export const useLoginForm = ({ displayError }: UseLoginFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const onFinish = async (values: LoginFormValues) => {
    setIsLoading(true);

    try {
      const response = await loginUser(values);

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
        text: 'Sign in',
        disabled: isLoading,
        testId: 'submit-button',
        className: 'login-button',
      },
    ],
    [isLoading],
  );

  return { formButtons, onFinish };
};
