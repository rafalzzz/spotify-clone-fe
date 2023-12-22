import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

import { loginUser } from '@/login/requests/login-user';
import { TLoginForm, TUseLoginFormProps } from '@/login/types';

import { TCustomButton } from '@/types/components';
import { THookForm } from '@/types/components';

export const useLoginForm = ({ displayError }: THookForm): TUseLoginFormProps => {
  const [isLoading, setIsLoading] = useState(false);

  const { push } = useRouter();

  const onFinish = async (values: TLoginForm) => {
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

  const submitButton: TCustomButton = useMemo(
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
