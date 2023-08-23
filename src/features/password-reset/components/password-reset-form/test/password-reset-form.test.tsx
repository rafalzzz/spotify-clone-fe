import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom';

import { FORM_FIELD_PLACEHOLDERS } from '@/password-reset/consts';
import { PasswordResetFormKeys } from '@/password-reset/enums/password-reset-form-keys';
import { usePasswordResetForm } from '@/password-reset/hooks/use-password-reset-form';

import { emailOrUsernameValidator } from '@/validators/email-or-username-validator';

import { InputType } from '@/enums/input-type';

import { PasswordResetForm } from '..';

jest.mock('@/password-reset/hooks/use-password-reset-form');

jest.mock('@/password-reset/utils/requests/password-reset', () => ({
  passwordReset: jest.fn(() => Promise.resolve({ data: {} })),
}));

jest.mock('@/validators/email-or-username-validator', () => ({
  emailOrUsernameValidator: jest
    .fn()
    .mockImplementation((getFieldValue) => () => Promise.resolve()),
}));

const renderPasswordResetForm = () => render(<PasswordResetForm />);

const onFinishMock = jest.fn();

describe('PasswordResetForm', () => {
  beforeEach(() => {
    (usePasswordResetForm as jest.Mock).mockReturnValue({
      submitButton: {
        key: 1,
        type: 'primary',
        htmlType: 'submit',
        text: 'Send',
        disabled: false,
        testId: 'submit-button',
      },
      onFinish: onFinishMock,
    });
  });

  it('render component without error', () => {
    const screen = renderPasswordResetForm();
    expect(screen).toMatchSnapshot();
  });

  it('should call validators and not call mocked action when form fields are empty', async () => {
    const { queryByTestId } = renderPasswordResetForm();
    const submitButton = queryByTestId('submit-button');
    expect(submitButton).toBeInTheDocument();

    await userEvent.click(submitButton as Element);

    // test validators calls
    expect(emailOrUsernameValidator).toHaveBeenCalled();

    // test mocked function call
    expect(onFinishMock).not.toHaveBeenCalled();
  });

  describe('should call validator when input value change', () => {
    const formFieldsWithValidators = [
      {
        type: InputType.TEXT,
        key: PasswordResetFormKeys.LOGIN,
        placeholder: FORM_FIELD_PLACEHOLDERS[PasswordResetFormKeys.LOGIN],
        mockedValue: 'Test',
        validator: emailOrUsernameValidator,
      },
    ];

    formFieldsWithValidators.forEach(({ type, key, validator, ...restProps }) => {
      it(key, async () => {
        const { queryByPlaceholderText } = renderPasswordResetForm();

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
