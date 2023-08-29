import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';

import { PasswordResetCompleteFormValues } from '@/password-reset/types';
import { passwordResetComplete } from '@/password-reset/utils/requests/password-reset-complete';

import { CustomButtonProps } from '@/types/custom-button-props';
import { HookFormProps } from '@/types/hook-form-props';

export const usePasswordResetCompleteForm = ({ displayError }: HookFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    query: { token },
    push,
  } = useRouter();

  const onFinish = async ({ password }: PasswordResetCompleteFormValues) => {
    setIsLoading(true);

    const requestBody = {
      password,
    };

    try {
      // token always is defined
      const response = await passwordResetComplete(token as string, requestBody);

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
      text: 'Send',
      disabled: isLoading,
      testId: 'submit-button',
      className: 'login-button',
    }),
    [isLoading],
  );

  return { submitButton, onFinish };
};
