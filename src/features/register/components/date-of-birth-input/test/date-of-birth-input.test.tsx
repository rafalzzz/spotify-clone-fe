import { Matcher, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Form } from 'antd';

import { FORM_FIELD_PLACEHOLDERS, FORM_LABELS } from '@/register/consts';
import { RegisterFormKeys } from '@/register/enums/register-form-keys';
import { dateOfBirthValidator } from '@/register/utils/validators';

import { InputType, NonStandardInputType } from '@/enums/input-type';

import { DateOfBirthInput } from '..';

jest.mock('@/register/utils/validators', () => ({
  dateOfBirthValidator: jest.fn().mockImplementation(() => {
    return () => {
      const day = '';
      const month = '';
      const year = '';

      const isValidDate = () => true;
      const isAllowedAge = () => true;

      if (!isValidDate() || !day || !month || !year) {
        return Promise.reject('Invalid date');
      }

      if (!isAllowedAge()) {
        return Promise.reject('Account permitted for individuals over the age of 12');
      }

      return Promise.resolve();
    };
  }),
}));

const renderDateOfBirthInput = () =>
  render(
    <Form>
      <DateOfBirthInput
        name={NonStandardInputType.DATE_OF_BIRTH}
        label={FORM_LABELS[NonStandardInputType.DATE_OF_BIRTH]}
      />
    </Form>,
  );

describe('DateOfBirthInput', () => {
  it('render component without error', () => {
    const screen = renderDateOfBirthInput();
    expect(screen).toMatchSnapshot();
  });

  describe('should call validateFieldsMock when input value change', () => {
    const formFieldsWithValidators = [
      {
        type: InputType.TEXT,
        key: RegisterFormKeys.DAY,
        placeholder: FORM_FIELD_PLACEHOLDERS[RegisterFormKeys.DAY],
        mockedValue: '1',
      },
      {
        type: InputType.SELECT,
        key: RegisterFormKeys.MONTH,
        mockedValue: 'January',
      },
      {
        type: InputType.TEXT,
        key: RegisterFormKeys.YEAR,
        placeholder: FORM_FIELD_PLACEHOLDERS[RegisterFormKeys.YEAR],
        mockedValue: '2000',
      },
    ];

    formFieldsWithValidators.forEach(({ type, key, ...restProps }) => {
      it(key, async () => {
        const { queryByRole, queryByLabelText, queryByPlaceholderText } = renderDateOfBirthInput();

        if (type === InputType.SELECT) {
          const { mockedValue } = restProps;

          const select = queryByRole('combobox');
          expect(select).toBeInTheDocument();

          await userEvent.click(select as Element);

          const monthOptions = await queryByRole('listbox');

          const option = queryByRole('option', { name: mockedValue });
          await userEvent.click(option as Element);

          expect(dateOfBirthValidator).toHaveBeenCalled();
          return;
        }

        const { mockedValue, placeholder } = restProps;
        const input = queryByPlaceholderText(placeholder as Matcher);
        expect(input).toBeInTheDocument();

        await userEvent.type(input as Element, mockedValue);

        expect(dateOfBirthValidator).toHaveBeenCalled();
      });
    });
  });
});
