import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from 'antd';
import React from 'react';

import { InputType, NonStandardInputType } from '@/enums/input-type';

import { CustomFormItemProps } from '@/types/custom-form-item-props';

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
    label: 'test',
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

const renderCustomFormItem = (type: InputType, formItemProps: CustomFormItemProps) => {
  const props = {
    ...formItemProps,
    setFieldValue: mockSetFieldValue,
    type,
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
    const screen = renderCustomFormItem(type, props as CustomFormItemProps);
    expect(screen).toMatchSnapshot();
  });

  describe('render correct input type', () => {
    MOCKED_FORM_ITEMS.forEach(({ type, props }) => {
      it(type, () => {
        const { queryByTestId } = renderCustomFormItem(type, props as CustomFormItemProps);
        expect(queryByTestId(`input-type-${type}`)).toBeInTheDocument();
      });
    });
  });

  describe('error handling', () => {
    it('validates field when input value change', async () => {
      const mockedInputValue = 'test';
      inputValidator.mockImplementation((getFieldValue) => () => Promise.resolve());

      const { type, props } = MOCKED_FORM_ITEMS[0];
      const { queryByPlaceholderText, queryByText } = renderCustomFormItem(
        type,
        props as CustomFormItemProps,
      );

      const textInput = queryByPlaceholderText(textInputPlaceholder);
      expect(textInput).toBeInTheDocument();

      await userEvent.type(textInput as Element, mockedInputValue);

      expect(textInput).toHaveValue(mockedInputValue);
      expect(inputValidator).toHaveBeenCalled();
    });

    it('throws error for invalid input type', () => {
      const invalidInputType = 'invalid_input_type';
      const { props } = MOCKED_FORM_ITEMS[0];

      jest.spyOn(console, 'error');
      (console.error as jest.Mock).mockImplementation(() => {});

      expect(() => {
        render(
          <CustomFormItem
            {...({
              ...props,
              type: invalidInputType as NonStandardInputType,
            } as CustomFormItemProps)}
          />,
        );
      }).toThrowError(`${invalidInputType} input type does not exist`);

      (console.error as jest.Mock).mockRestore();
    });
  });
});
