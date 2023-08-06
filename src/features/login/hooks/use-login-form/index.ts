import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

import { LoginFormKeys } from '@/login/enums/login-form-keys';

import { CustomButtonProps } from '@/types/custom-button-props';

type UseLoginFormProps = {
  displayError: (description: string) => void;
};

export const useLoginForm = ({ displayError }: UseLoginFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const onFinish = async (values: Record<LoginFormKeys, string | number>) => {
    setIsLoading(true);
    try {
      /* const requestBody = parseRequestBody(values);
      const response = await registerUser(requestBody);

      if (!response) {
        router.push('/login');
      }

      if (response) {
        displayError(response as string);
      } */
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
