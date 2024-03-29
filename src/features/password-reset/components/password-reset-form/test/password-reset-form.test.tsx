import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom';

import { FORM_FIELD_PLACEHOLDERS } from '@/password-reset/consts';
import { usePasswordResetForm } from '@/password-reset/hooks/use-password-reset-form';
import { EPasswordResetFormKeys } from '@/password-reset/types';

import { emailOrUsernameValidator } from '@/validators/email-or-username-validator';

import { EInputType } from '@/enums/input-type';

import { PasswordResetForm } from '..';

jest.mock('@/password-reset/hooks/use-password-reset-form');

jest.mock('@/password-reset/requests/password-reset', () => ({
  passwordReset: jest.fn(() => Promise.resolve({ data: {} })),
}));

jest.mock('@/validators/email-or-username-validator', () => ({
  emailOrUsernameValidator: jest.fn().mockImplementation((_: unknown, value) => {
    if (!value) return Promise.reject();
    return Promise.resolve();
  }),
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
        type: EInputType.TEXT,
        key: EPasswordResetFormKeys.LOGIN,
        placeholder: FORM_FIELD_PLACEHOLDERS[EPasswordResetFormKeys.LOGIN],
        mockedValue: 'Test',
        validator: emailOrUsernameValidator,
      },
    ];

    formFieldsWithValidators.forEach(({ key, validator, ...restProps }) => {
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
