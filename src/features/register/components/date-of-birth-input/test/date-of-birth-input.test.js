import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Form } from 'antd';

import { FORM_FIELD_PLACEHOLDERS, REGISTER_FORM_LABELS } from '@/register/consts';
import { RegisterFormKeys } from '@/register/enums/register-form-keys';
import { dateOfBirthValidator } from '@/register/utils/validators';

import { InputType, NonStandardInputType } from '@/enums/input-type';

import { DateOfBirthInput } from '../index.tsx';

jest.mock('@/register/utils/validators', () => ({
  dateOfBirthValidator: jest.fn().mockImplementation((getFieldValue) => () => Promise.resolve()),
}));

const renderDateOfBirthInput = () =>
  render(
    <Form>
      <DateOfBirthInput
        name={NonStandardInputType.DATE_OF_BIRTH}
        label={REGISTER_FORM_LABELS[NonStandardInputType.DATE_OF_BIRTH]}
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

    formFieldsWithValidators.forEach(({ type, key, validator, ...restProps }) => {
      it(key, async () => {
        const { getByRole, getByLabelText, getByPlaceholderText } = renderDateOfBirthInput();

        if (type === InputType.SELECT) {
          const { mockedValue } = restProps;

          const select = getByRole('combobox');
          expect(select).toBeInTheDocument();

          await userEvent.click(select);

          const monthOptions = await getByRole('listbox');

          const option = getByRole('option', { name: mockedValue });
          await userEvent.click(option);

          expect(dateOfBirthValidator).toHaveBeenCalled();
          return;
        }

        const { mockedValue, placeholder } = restProps;
        const input = getByPlaceholderText(placeholder);
        expect(input).toBeInTheDocument();

        await userEvent.type(input, mockedValue);

        expect(dateOfBirthValidator).toHaveBeenCalled();
      });
    });
  });
});
