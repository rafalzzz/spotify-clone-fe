'use-client';

import { useRouter } from 'next/navigation';
import { useMemo } from 'react';

import { CustomButton } from '@/components/custom-button';

import { ROUTES } from '@/consts/routes';

import './Redirects.scss';

export const Redirects = () => {
  const { push } = useRouter();

  const REDIRECT_BUTTONS = useMemo(
    () => [
      {
        key: 1,
        className: 'sign-up-button',
        text: 'Sign up',
        onClick: () => push(ROUTES.REGISTER_USER),
      },
      {
        key: 2,
        className: 'sign-in-button',
        text: 'Sign in',
        onClick: () => push(ROUTES.LOGIN_USER),
      },
    ],
    [push],
  );

  return (
    <div className='redirects'>
      {REDIRECT_BUTTONS.map(({ key, className, ...restProps }) => (
        <CustomButton
          key={key}
          className={`redirects__item ${className}`}
          shape='round'
          htmlType='button'
          {...restProps}
        />
      ))}
    </div>
  );
};
