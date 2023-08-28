import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom';

import { FORM_FIELD_PLACEHOLDERS } from '@/login/consts';
import { LoginFormKeys } from '@/login/enums/login-form-keys';
import { useLoginForm } from '@/login/hooks/use-login-form';
import { passwordValidator } from '@/login/utils/validators/password-validator';

import { emailOrUsernameValidator } from '@/validators/email-or-username-validator';

import { InputType } from '@/enums/input-type';

import { LoginForm } from '..';

jest.mock('@/login/hooks/use-login-form');

jest.mock('@/login/utils/requests/login-user', () => ({
  registerUser: jest.fn(() => Promise.resolve({ data: {} })),
}));

jest.mock('@/login/utils/validators/password-validator', () => ({
  passwordValidator: jest.fn().mockImplementation(() => () => Promise.resolve()),
}));

jest.mock('@/validators/email-or-username-validator', () => ({
  emailOrUsernameValidator: jest.fn().mockImplementation(() => () => Promise.resolve()),
}));

jest.mock('@/login/hooks/use-login-form');

const renderLoginForm = () => render(<LoginForm />);

const onFinishMock = jest.fn();

describe('LoginForm', () => {
  beforeEach(() => {
    (useLoginForm as jest.Mock).mockReturnValue({
      submitButton: {
        type: 'primary',
        htmlType: 'submit',
        text: 'Login',
        disabled: false,
        testId: 'submit-button',
      },
      onFinish: onFinishMock,
    });
  });

  it('render component without error', () => {
    const screen = renderLoginForm();
    expect(screen).toMatchSnapshot();
  });

  it('should call validators and not call mocked action when form fields are empty', async () => {
    const { queryByTestId } = renderLoginForm();
    const submitButton = queryByTestId('submit-button');
    expect(submitButton).toBeInTheDocument();

    await userEvent.click(submitButton as Element);

    // test validators calls
    expect(emailOrUsernameValidator).toHaveBeenCalled();
    expect(passwordValidator).toHaveBeenCalled();

    // test mocked function call
    expect(onFinishMock).not.toHaveBeenCalled();
  });

  describe('should call validator when input value change', () => {
    const formFieldsWithValidators = [
      {
        type: InputType.TEXT,
        key: LoginFormKeys.LOGIN,
        placeholder: FORM_FIELD_PLACEHOLDERS[LoginFormKeys.LOGIN],
        mockedValue: 'Test',
        validator: emailOrUsernameValidator,
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
        const { queryByPlaceholderText } = renderLoginForm();

        const { mockedValue, placeholder } = restProps;
        const input = queryByPlaceholderText(placeholder);
        expect(input).toBeInTheDocument();

        await userEvent.type(input as Element, mockedValue);

        expect(validator).toHaveBeenCalled();
        return;
      });
    });
  });
});
