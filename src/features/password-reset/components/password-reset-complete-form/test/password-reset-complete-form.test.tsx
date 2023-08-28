import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import '@testing-library/jest-dom';

import { FORM_FIELD_PLACEHOLDERS } from '@/password-reset/consts';
import { PasswordResetCompleteFormKeys } from '@/password-reset/enums/password-reset-complete-form-keys';
import { usePasswordResetCompleteForm } from '@/password-reset/hooks/use-password-reset-complete-form';
import { repeatNewPasswordValidator } from '@/password-reset/utils/validators/repeat-new-password-validator';

import { InputType } from '@/enums/input-type';

import { passwordValidator } from '@/shared/validators';

import { PasswordResetCompleteForm } from '..';

jest.mock('@/password-reset/hooks/use-password-reset-complete-form');

jest.mock('@/shared/validators', () => ({
  passwordValidator: jest.fn().mockImplementation((getFieldValue) => () => Promise.resolve()),
}));

jest.mock('@/password-reset/utils/validators/repeat-new-password-validator', () => ({
  repeatNewPasswordValidator: jest
    .fn()
    .mockImplementation((getFieldValue) => () => Promise.resolve()),
}));

jest.mock('@/password-reset/utils/requests/password-reset-complete', () => ({
  passwordResetComplete: jest.fn(() => Promise.resolve({ data: {} })),
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
        type: InputType.PASSWORD,
        key: PasswordResetCompleteFormKeys.PASSWORD,
        placeholder: FORM_FIELD_PLACEHOLDERS[PasswordResetCompleteFormKeys.PASSWORD],
        mockedValue: 'Test123!',
        validator: passwordValidator,
      },
      {
        type: InputType.PASSWORD,
        key: PasswordResetCompleteFormKeys.REPEAT_PASSWORD,
        placeholder: FORM_FIELD_PLACEHOLDERS[PasswordResetCompleteFormKeys.REPEAT_PASSWORD],
        mockedValue: 'Test123!',
        validator: repeatNewPasswordValidator,
      },
    ];

    formFieldsWithValidators.forEach(({ type, key, validator, ...restProps }) => {
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
