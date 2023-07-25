import { render, screen, fireEvent } from '@testing-library/react';
import { Form } from 'antd';
import React from 'react';

import { InputType } from '@/enums/input-type';

import { CustomFormItem } from '..';

import '@testing-library/jest-dom';

const sharedFormItemProps = {
  key: 'text',
  name: 'text',
  label: 'Enter text',
  rules: [[{ required: true, message: 'Input is required' }]],
};

const textInputProps = {
  ...sharedFormItemProps,
  inputProps: {
    placeholder: 'Enter text',
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
];

const renderCustomFormItem = (type, formItemProps) => {
  const props = {
    type,
    ...formItemProps,
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
    const { screen } = renderCustomFormItem(type, props);
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
