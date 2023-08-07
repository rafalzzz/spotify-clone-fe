import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import * as antdOriginal from 'antd';
import { Form } from 'antd';
import React from 'react';

import { InputType } from '@/enums/input-type';

import { CustomFormItem } from '..';

import '@testing-library/jest-dom';

const textInputPlaceholder = 'Enter text';
const inputValidator = jest.fn();
const mockSetFieldValue = jest.fn();

const sharedFormItemProps = {
  key: 'text',
  name: 'text',
  label: 'Enter text',
  rules: [{ validator: inputValidator }],
};

const textInputProps = {
  ...sharedFormItemProps,
  inputProps: {
    placeholder: textInputPlaceholder,
  },
};

const MOCKED_OPTIONS = [
  { label: 'label1', value: 'value1' },
  { label: 'label2', value: 'value2' },
];

const MOCKED_FORM_ITEMS = [
  {
    type: InputType.TEXT,
    props: textInputProps,
  },
  {
    type: InputType.PASSWORD,
    props: textInputProps,
  },
  {
    type: InputType.SELECT,
    props: {
      ...sharedFormItemProps,
      selectProps: {
        options: MOCKED_OPTIONS,
      },
    },
  },
  {
    type: InputType.RADIO,
    props: {
      ...sharedFormItemProps,
      radioProps: {
        options: [
          { label: 'Test1', value: 'test1' },
          { label: 'Test2', value: 'test2' },
        ],
      },
    },
  },
  {
    type: InputType.CHECKBOX,
    props: {
      key: 'text',
      name: 'text',
      checkboxProps: {
        text: 'Text example',
      },
    },
  },
  {
    type: InputType.SWITCH,
    props: {
      key: 'text',
      name: 'text',
      switchProps: {
        label: 'Text example',
      },
    },
  },
];

const renderCustomFormItem = (type, formItemProps) => {
  const props = {
    type,
    ...formItemProps,
    setFieldValue: mockSetFieldValue,
  };

  return render(
    // It's necessary to warp CustomFormItem into Form for test purposes
    <Form>
      <CustomFormItem {...props} />
    </Form>,
  );
};

describe('CustomFormItem', () => {
  it('render component without error', () => {
    const { type, props } = MOCKED_FORM_ITEMS[0];
    const screen = renderCustomFormItem(type, props);
    expect(screen).toMatchSnapshot();
  });

  describe('render correct input type', () => {
    MOCKED_FORM_ITEMS.forEach(({ type, props }) => {
      it(type, () => {
        const { queryByTestId } = renderCustomFormItem(type, props);
        expect(queryByTestId(`input-type-${type}`)).toBeInTheDocument();
      });
    });
  });

  describe('error handling', () => {
    it('validates field when input value change', async () => {
      const mockedInputValue = 'test';
      inputValidator.mockImplementation((getFieldValue) => () => Promise.resolve());

      const { type, props } = MOCKED_FORM_ITEMS[0];
      const { getByPlaceholderText, getByText } = renderCustomFormItem(type, props);

      const textInput = getByPlaceholderText(textInputPlaceholder);
      expect(textInput).toBeInTheDocument();

      await userEvent.type(textInput, mockedInputValue);

      expect(textInput).toHaveValue(mockedInputValue);
      expect(inputValidator).toHaveBeenCalled();
    });

    it('throws error for invalid input type', () => {
      const invalidInputType = 'invalid_input_type';
      const { props } = MOCKED_FORM_ITEMS[0];

      jest.spyOn(console, 'error');
      console.error.mockImplementation(() => {});

      expect(() => {
        render(<CustomFormItem type={invalidInputType} {...props} />);
      }).toThrowError(`${invalidInputType} input type does not exist`);

      console.error.mockRestore();
    });
  });
});
