import { useRouter } from 'next/navigation';
import { useMemo, useState } from 'react';

import { RegisterFormKeys } from '@/register/enums/register-form-keys';
import { parseRequestBody } from '@/register/helpers';
import { registerUser } from '@/register/utils/requests/register-user';

import { CustomButtonProps } from '@/types/custom-button-props';

type useRegisterForm = {
  displayError: (description: string) => void;
};

export const useRegisterForm = ({ displayError }: useRegisterForm) => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const onFinish = async (values: Record<RegisterFormKeys, string | number>) => {
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
        key: 2,
        type: 'primary',
        htmlType: 'submit',
        text: 'Register',
        disabled: isLoading,
        testId: 'submit-button',
      },
    ],
    [isLoading],
  );

  return { formButtons, onFinish };
};
