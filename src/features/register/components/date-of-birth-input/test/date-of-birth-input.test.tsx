import { Matcher, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { Form } from 'antd';

import { FORM_FIELD_PLACEHOLDERS, FORM_LABELS } from '@/register/consts';
import { ERegisterFormKeys } from '@/register/types';
import { dateOfBirthValidator } from '@/register/utils/validators';

import { EInputType, ENonStandardInputType } from '@/enums/input-type';

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
        name={ENonStandardInputType.DATE_OF_BIRTH}
        label={FORM_LABELS[ENonStandardInputType.DATE_OF_BIRTH]}
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
        type: EInputType.TEXT,
        key: ERegisterFormKeys.DAY,
        placeholder: FORM_FIELD_PLACEHOLDERS[ERegisterFormKeys.DAY],
        mockedValue: '1',
      },
      {
        type: EInputType.SELECT,
        key: ERegisterFormKeys.MONTH,
        mockedValue: 'January',
      },
      {
        type: EInputType.TEXT,
        key: ERegisterFormKeys.YEAR,
        placeholder: FORM_FIELD_PLACEHOLDERS[ERegisterFormKeys.YEAR],
        mockedValue: '2000',
      },
    ];

    formFieldsWithValidators.forEach(({ type, key, ...restProps }) => {
      it(key, async () => {
        const { queryByRole, queryByPlaceholderText } = renderDateOfBirthInput();

        if (type === EInputType.SELECT) {
          const { mockedValue } = restProps;

          const select = queryByRole('combobox');
          expect(select).toBeInTheDocument();

          await userEvent.click(select as Element);

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
