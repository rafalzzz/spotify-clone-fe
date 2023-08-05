import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/navigation';
import React from 'react';
import '@testing-library/jest-dom';

import { FORM_FIELD_PLACEHOLDERS, GENDER_OPTIONS, REGISTER_FORM_LABELS } from '@/register/consts';
import { LoginFormKeys } from '@/register/enums/register-form-keys';
import { useLoginForm } from '@/register/hooks/use-register-form';
import { registerUser } from '@/register/utils/requests/register-user';
import {
  emailValidator,
  usernameValidator,
  passwordValidator,
  genderValidator,
  termsValidator,
  dateOfBirthValidator,
} from '@/register/utils/validators';

import { InputType } from '@/enums/input-type';

import { LoginForm } from '../index.js';

const MOCKED_BUTTON_TEXT = 'Test Button';

jest.mock('@/login/hooks/use-login-form');

jest.mock('@/login/utils/requests/login-user', () => ({
  registerUser: jest.fn(() => Promise.resolve({ data: {} })),
}));

jest.mock('@/login/utils/validators', () => ({
  emailOrUsernameValidator: jest
    .fn()
    .mockImplementation((getFieldValue) => () => Promise.resolve()),
  passwordValidator: jest.fn().mockImplementation((getFieldValue) => () => Promise.resolve()),
}));

jest.mock('@/register/hooks/use-register-form');

const renderLoginForm = () => render(<LoginForm />);

const onFinishMock = jest.fn();

describe('LoginForm', () => {
  beforeEach(() => {
    useLoginForm.mockReturnValue({
      formButtons: [
        {
          key: 1,
          type: 'primary',
          htmlType: 'submit',
          text: 'Login',
          disabled: false,
          testId: 'submit-button',
        },
      ],
      onFinish: onFinishMock,
    });
  });

  it('render component without error', () => {
    const screen = renderLoginForm();
    expect(screen).toMatchSnapshot();
  });

  it('should call validators and not call registerUser function when form fields are empty', async () => {
    const { queryByTestId } = renderLoginForm();
    const submitButton = queryByTestId('submit-button');
    expect(submitButton).toBeInTheDocument();

    await userEvent.click(submitButton);

    // test validators calls
    expect(emailOrUsernameValidator).toHaveBeenCalled();
    expect(passwordValidator).toHaveBeenCalled();

    // test registerUser call
    expect(onFinishMock).not.toHaveBeenCalled();
  });

  describe('should call validator when input value change', () => {
    const formFieldsWithValidators = [
      {
        type: InputType.TEXT,
        key: LoginFormKeys.EMAIL_OR_USERNAME,
        placeholder: FORM_FIELD_PLACEHOLDERS[LoginFormKeys.EMAIL_OR_USERNAME],
        mockedValue: 'Test',
        validator: emailValidator,
      },
      {
        type: InputType.PASSWORD,
        key: LoginFormKeys.PASSWORD,
        placeholder: FORM_FIELD_PLACEHOLDERS[LoginFormKeys.PASSWORD],
        mockedValue: 'Test',
        validator: passwordValidator,
      },
    ];

    formFieldsWithValidators.forEach(({ type, key, validator, ...restProps }) => {
      it(key, async () => {
        const { getByPlaceholderText } = renderLoginForm();

        const { mockedValue, placeholder } = restProps;
        const input = getByPlaceholderText(placeholder);
        expect(input).toBeInTheDocument();

        await userEvent.type(input, mockedValue);

        expect(validator).toHaveBeenCalled();
        return;
      });
    });
  });
});
