import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

import { TPasswordResetForm } from '@/password-reset/types';
import { passwordReset } from '@/password-reset/utils/requests/password-reset';

import { TCustomButton } from '@/types/custom-button-props';
import { THookForm } from '@/types/hook-form-props';

export const usePasswordResetForm = ({ displayError }: THookForm) => {
  const [isLoading, setIsLoading] = useState(false);

  const { push } = useRouter();

  const onFinish = async (values: TPasswordResetForm) => {
    setIsLoading(true);

    try {
      const response = await passwordReset(values);

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
      text: 'Send',
      disabled: isLoading,
      testId: 'submit-button',
      className: 'login-button',
    }),
    [isLoading],
  );

  return { submitButton, onFinish };
};
