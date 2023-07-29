import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/navigation';
import React from 'react';

import * as initialValuesModule from '@/register/consts/initial-values';
import { RegisterFormKeys } from '@/register/enums/register-form-keys';
import { registerUser } from '@/register/utils/requests/register-user';
import {
  emailValidator,
  usernameValidator,
  passwordValidator,
  genderValidator,
  termsValidator,
  dateOfBirthValidator,
} from '@/register/utils/validators';

import { RegisterForm } from '../index.tsx';

import '@testing-library/jest-dom';

const MOCKED_BUTTON_TEXT = 'Test Button';

jest.mock('@/register/utils/requests/register-user', () => ({
  registerUser: jest.fn(() => Promise.resolve({ data: {} })),
}));

jest.mock('@/register/utils/validators', () => ({
  dateOfBirthValidator: jest.fn(),
  emailValidator: jest.fn(),
  usernameValidator: jest.fn(),
  passwordValidator: jest.fn(),
  genderValidator: jest.fn(),
  termsValidator: jest.fn(),
}));

const renderRegisterForm = () => render(<RegisterForm />);

describe('RegisterForm', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('render component without error', () => {
    const screen = renderRegisterForm();
    expect(screen).toMatchSnapshot();
  });

  it('should call validators and not call registerUser function when form fields are empty', async () => {
    dateOfBirthValidator.mockImplementation((getFieldValue) => () => Promise.reject());
    emailValidator.mockImplementation((getFieldValue) => () => Promise.reject());
    usernameValidator.mockImplementation((getFieldValue) => () => Promise.reject());
    passwordValidator.mockImplementation((getFieldValue) => () => Promise.reject());
    genderValidator.mockImplementation((getFieldValue) => () => Promise.reject());
    termsValidator.mockImplementation((getFieldValue) => () => Promise.reject());

    const { queryByTestId } = renderRegisterForm();
    const submitButton = queryByTestId('submit-button');
    expect(submitButton).toBeInTheDocument();

    await userEvent.click(submitButton);

    // test validators calls
    expect(dateOfBirthValidator).toHaveBeenCalled();
    expect(emailValidator).toHaveBeenCalled();
    expect(usernameValidator).toHaveBeenCalled();
    expect(passwordValidator).toHaveBeenCalled();
    expect(genderValidator).toHaveBeenCalled();
    expect(termsValidator).toHaveBeenCalled();

    // test registerUser call
    expect(registerUser).not.toHaveBeenCalled();
  });

  it('should disable form buttons when request is pending', async () => {
    const { queryByTestId } = renderRegisterForm();
    const submitButton = queryByTestId('submit-button');
    expect(submitButton).toBeInTheDocument();

    await act(async () => {
      fireEvent.click(submitButton, { button: 0 });
    });

    expect(submitButton).toBeDisabled();
    expect(registerUser).toHaveBeenCalled();
  });
});
