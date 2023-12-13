import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Form } from 'antd';
import React from 'react';

import { EInputType, ENonStandardInputType } from '@/enums/input-type';

import { TCustomFormItem } from '@/types/components';

import { CustomFormItem } from '..';

import '@testing-library/jest-dom';

const textInputPlaceholder = 'Enter text';
const mockSetFieldValue = jest.fn();
const inputValidator = jest.fn((_, value) => {
  return new Promise((resolve, reject) => {
    if (!value) {
      resolve(true);
    } else {
      reject(new Error('Invalid input'));
    }
  });
});

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
    type: EInputType.TEXT,
    props: textInputProps,
  },
  {
    type: EInputType.PASSWORD,
    props: textInputProps,
  },
  {
    type: EInputType.SELECT,
    props: {
      ...sharedFormItemProps,
      selectProps: {
        options: MOCKED_OPTIONS,
      },
    },
  },
  {
    type: EInputType.RADIO,
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
    type: EInputType.CHECKBOX,
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
    type: EInputType.SWITCH,
    props: {
      key: 'text',
      name: 'text',
      switchProps: {
        label: 'Text example',
      },
    },
  },
];

const renderCustomFormItem = (type: EInputType, formItemProps: TCustomFormItem) => {
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
    const screen = renderCustomFormItem(type, props as TCustomFormItem);
    expect(screen).toMatchSnapshot();
  });

  describe('render correct input type', () => {
    MOCKED_FORM_ITEMS.forEach(({ type, props }) => {
      it(type, () => {
        const { queryByTestId } = renderCustomFormItem(type, props as TCustomFormItem);
        expect(queryByTestId(`input-type-${type}`)).toBeInTheDocument();
      });
    });
  });

  describe('error handling', () => {
    it('validates field when input value change', async () => {
      const mockedInputValue = 'test';
      inputValidator.mockImplementation((_, value) => {
        if (value === 'test1') {
          return Promise.resolve();
        } else {
          return Promise.reject(new Error('Invalid input'));
        }
      });

      const { type, props } = MOCKED_FORM_ITEMS[0];
      const { queryByPlaceholderText } = renderCustomFormItem(type, props as TCustomFormItem);

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
              type: invalidInputType as ENonStandardInputType,
            } as TCustomFormItem)}
          />,
        );
      }).toThrowError(`${invalidInputType} input type does not exist`);

      (console.error as jest.Mock).mockRestore();
    });
  });
});
