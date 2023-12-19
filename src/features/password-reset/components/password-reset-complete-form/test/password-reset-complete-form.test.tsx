import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom';

import { FORM_FIELD_PLACEHOLDERS } from '@/password-reset/consts';
import { usePasswordResetCompleteForm } from '@/password-reset/hooks/use-password-reset-complete-form';
import { EPasswordResetCompleteForm } from '@/password-reset/types';
import { repeatNewPasswordValidator } from '@/password-reset/utils/validators/repeat-new-password-validator';

import { EInputType } from '@/enums/input-type';

import { passwordValidator } from '@/shared/validators';

import { PasswordResetCompleteForm } from '..';

jest.mock('@/password-reset/hooks/use-password-reset-complete-form');

jest.mock('@/password-reset/utils/requests/password-reset-complete', () => ({
  passwordResetComplete: jest.fn(() => Promise.resolve({ data: {} })),
}));

jest.mock('@/shared/validators', () => ({
  passwordValidator: jest.fn().mockImplementation((_: unknown, value) => {
    if (!value) return Promise.reject();
    return Promise.resolve();
  }),
}));

jest.mock('@/password-reset/utils/validators/repeat-new-password-validator', () => ({
  repeatNewPasswordValidator: jest.fn().mockReturnValue({
    validator(_: unknown, value: string) {
      if (!value) {
        return Promise.reject(new Error(`Repeat new password`));
      }

      return Promise.resolve();
    },
  }),
}));

const renderPasswordResetCompleteForm = () => render(<PasswordResetCompleteForm />);

const onFinishMock = jest.fn();

describe('PasswordResetCompleteForm', () => {
  beforeEach(() => {
    (usePasswordResetCompleteForm as jest.Mock).mockReturnValue({
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
    const screen = renderPasswordResetCompleteForm();
    expect(screen).toMatchSnapshot();
  });

  it('should call validators and not call mocked action when form fields are empty', async () => {
    const { queryByTestId } = renderPasswordResetCompleteForm();
    const submitButton = queryByTestId('submit-button');
    expect(submitButton).toBeInTheDocument();

    await userEvent.click(submitButton as Element);

    // test validators calls
    expect(passwordValidator).toHaveBeenCalled();
    expect(repeatNewPasswordValidator).toHaveBeenCalled();

    // test mocked function call
    expect(onFinishMock).not.toHaveBeenCalled();
  });

  describe('should call validator when input value change', () => {
    const formFieldsWithValidators = [
      {
        type: EInputType.PASSWORD,
        key: EPasswordResetCompleteForm.PASSWORD,
        placeholder: FORM_FIELD_PLACEHOLDERS[EPasswordResetCompleteForm.PASSWORD],
        mockedValue: 'Test123!',
        validator: passwordValidator,
      },
      {
        type: EInputType.PASSWORD,
        key: EPasswordResetCompleteForm.REPEAT_PASSWORD,
        placeholder: FORM_FIELD_PLACEHOLDERS[EPasswordResetCompleteForm.REPEAT_PASSWORD],
        mockedValue: 'Test123!',
        validator: repeatNewPasswordValidator,
      },
    ];

    formFieldsWithValidators.forEach(({ key, validator, ...restProps }) => {
      it(key, async () => {
        const { queryByPlaceholderText } = renderPasswordResetCompleteForm();

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
