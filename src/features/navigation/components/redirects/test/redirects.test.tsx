import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { ROUTES } from '@/consts/routes';

import { Redirects } from '..';

const mockPush = jest.fn();

jest.mock('next/navigation', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

const renderRedirects = () => render(<Redirects />);

describe('Redirects', () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it('render component without error', () => {
    const screen = renderRedirects();
    expect(screen).toMatchSnapshot();
  });

  it('should call push method with "/signup" path when user click redirection-to-registration button', async () => {
    const { queryByTestId } = renderRedirects();
    const redirectToRegistrationButton = queryByTestId('redirection-to-registration');
    expect(redirectToRegistrationButton).toBeInTheDocument();

    await userEvent.click(redirectToRegistrationButton as Element);

    expect(mockPush).toHaveBeenCalledWith(ROUTES.REGISTER_USER);
  });

  it('should call push method with "/login" path when user click redirection-to-login button', async () => {
    const { queryByTestId } = renderRedirects();
    const redirectToLoginButton = queryByTestId('redirection-to-login');
    expect(redirectToLoginButton).toBeInTheDocument();

    await userEvent.click(redirectToLoginButton as Element);

    expect(mockPush).toHaveBeenCalledWith(ROUTES.LOGIN_USER);
  });
});
