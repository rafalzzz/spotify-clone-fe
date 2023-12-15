import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

import { parseRequestBody } from '@/register/helpers';
import { TRegisterForm, TUseRegisterFormProps } from '@/register/types';
import { registerUser } from '@/register/utils/requests/register-user';

import { TCustomButton } from '@/types/components';
import { THookForm } from '@/types/components';

export const useRegisterForm = ({ displayError }: THookForm): TUseRegisterFormProps => {
  const [isLoading, setIsLoading] = useState(false);

  const { push } = useRouter();

  const onFinish = async (values: TRegisterForm) => {
    setIsLoading(true);
    try {
      const requestBody = parseRequestBody(values);
      const response = await registerUser(requestBody);

      if (!response) {
        push('/login');
      }

      if (Array.isArray(response)) {
        displayError(response[0].errorMessage as string);
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
      text: 'Register',
      disabled: isLoading,
      testId: 'submit-button',
      className: 'register-button',
    }),
    [isLoading],
  );

  return { submitButton, onFinish };
};
