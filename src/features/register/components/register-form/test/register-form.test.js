import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { useRouter } from 'next/navigation';
import React from 'react';
import '@testing-library/jest-dom';

import { FORM_FIELD_PLACEHOLDERS, GENDER_OPTIONS, REGISTER_FORM_LABELS } from '@/register/consts';
import { RegisterFormKeys } from '@/register/enums/register-form-keys';
import { useRegisterForm } from '@/register/hooks/use-register-form';
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

import { RegisterForm } from '../index.tsx';

const MOCKED_BUTTON_TEXT = 'Test Button';

jest.mock('@/register/hooks/use-register-form');

jest.mock('@/register/utils/requests/register-user', () => ({
  registerUser: jest.fn(() => Promise.resolve({ data: {} })),
}));

jest.mock('@/register/utils/validators', () => ({
  dateOfBirthValidator: jest.fn().mockImplementation((getFieldValue) => () => Promise.resolve()),
  emailValidator: jest.fn().mockImplementation((getFieldValue) => () => Promise.resolve()),
  usernameValidator: jest.fn().mockImplementation((getFieldValue) => () => Promise.resolve()),
  passwordValidator: jest.fn().mockImplementation((getFieldValue) => () => Promise.resolve()),
  genderValidator: jest.fn().mockImplementation((getFieldValue) => () => Promise.resolve()),
  termsValidator: jest.fn().mockImplementation((getFieldValue) => () => Promise.resolve()),
}));

jest.mock('@/register/hooks/use-register-form');

const renderRegisterForm = () => render(<RegisterForm />);

const onFinishMock = jest.fn();

describe('RegisterForm', () => {
  beforeEach(() => {
    useRegisterForm.mockReturnValue({
      formButtons: [
        {
          key: 2,
          type: 'primary',
          htmlType: 'submit',
          text: 'Register',
          disabled: false,
          testId: 'submit-button',
        },
      ],
      onFinish: onFinishMock,
    });
  });

  it('render component without error', () => {
    const screen = renderRegisterForm();
    expect(screen).toMatchSnapshot();
  });

  it('should call validators and not call registerUser function when form fields are empty', async () => {
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
    expect(onFinishMock).not.toHaveBeenCalled();
  });

  describe('should call validator when input value change', () => {
    const formFieldsWithValidators = [
      {
        type: InputType.TEXT,
        key: RegisterFormKeys.EMAIL,
        placeholder: FORM_FIELD_PLACEHOLDERS[RegisterFormKeys.EMAIL],
        mockedValue: 'Test',
        validator: emailValidator,
      },
      {
        type: InputType.PASSWORD,
        key: RegisterFormKeys.PASSWORD,
        placeholder: FORM_FIELD_PLACEHOLDERS[RegisterFormKeys.PASSWORD],
        mockedValue: 'Test',
        validator: passwordValidator,
      },
      {
        type: InputType.TEXT,
        key: RegisterFormKeys.NICKNAME,
        placeholder: FORM_FIELD_PLACEHOLDERS[RegisterFormKeys.NICKNAME],
        mockedValue: 'Test',
        validator: usernameValidator,
      },
      {
        type: InputType.RADIO,
        key: RegisterFormKeys.GENDER,
        validator: genderValidator,
      },
      {
        type: InputType.CHECKBOX,
        key: RegisterFormKeys.TERMS,
        validator: termsValidator,
      },
    ];

    formFieldsWithValidators.forEach(({ type, key, validator, ...restProps }) => {
      it(key, async () => {
        const { queryByRole, queryByLabelText, queryByPlaceholderText } = renderRegisterForm();

        if (type === InputType.CHECKBOX) {
          const checkbox = queryByLabelText(REGISTER_FORM_LABELS[RegisterFormKeys.TERMS]);

          await userEvent.click(checkbox);

          expect(validator).toHaveBeenCalled();
          return;
        }

        if (type === InputType.TEXT) {
          const { mockedValue, placeholder } = restProps;
          const input = queryByPlaceholderText(placeholder);
          expect(input).toBeInTheDocument();

          await userEvent.type(input, mockedValue);

          expect(validator).toHaveBeenCalled();
          return;
        }

        // Radio input test
        const options = GENDER_OPTIONS.map(({ label }) => queryByLabelText(label));
        options.forEach((option) => expect(option).not.toBeChecked());

        await userEvent.click(options[0]);

        options.forEach((option, index) => {
          // first option in array is checked
          if (!index) {
            expect(option).toBeChecked();
            return;
          }

          expect(option).not.toBeChecked();
        });

        expect(validator).toHaveBeenCalled();
      });
    });
  });
});
