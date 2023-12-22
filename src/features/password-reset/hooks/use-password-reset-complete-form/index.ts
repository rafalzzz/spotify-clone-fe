import { useRouter } from 'next/router';
import { useMemo, useState } from 'react';

import { passwordResetComplete } from '@/password-reset/requests/password-reset-complete';
import {
  TPasswordResetCompleteForm,
  TUsePasswordResetCompleteFormProps,
} from '@/password-reset/types';

import { TCustomButton } from '@/types/components';
import { THookForm } from '@/types/components';

export const usePasswordResetCompleteForm = ({
  displayError,
}: THookForm): TUsePasswordResetCompleteFormProps => {
  const [isLoading, setIsLoading] = useState(false);

  const {
    query: { token },
    push,
  } = useRouter();

  const onFinish = async ({ password }: TPasswordResetCompleteForm) => {
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
