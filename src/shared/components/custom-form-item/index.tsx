import { Form, Input, Select, Radio, Checkbox, Switch } from 'antd';

import { InputType } from '@/enums/input-type';

import {
  CustomFormItemProps,
  ExtendedCheckboxProps,
  ExtendedRadioProps,
  ExtendedSwitchProps,
} from '@/types/custom-form-item-props';

import './CustomFormItem.scss';

export const CustomFormItem = ({
  type,
  name,
  label = '',
  rules,
  selectProps,
  inputProps,
  radioProps,
  checkboxProps,
  switchProps,
  setFieldValue,
}: CustomFormItemProps) => {
  const getFormItemInput = (inputType: InputType) => {
    switch (inputType) {
      case InputType.TEXT:
        return <Input data-testid={`input-type-${InputType.TEXT}`} {...inputProps} />;
      case InputType.PASSWORD:
        return (
          <Input.Password
            autoComplete='on'
            data-testid={`input-type-${InputType.PASSWORD}`}
            {...inputProps}
          />
        );
      case InputType.SELECT:
        return <Select data-testid={`input-type-${InputType.SELECT}`} {...selectProps} />;
      case InputType.RADIO:
        const { options } = radioProps as ExtendedRadioProps;

        return (
          <Radio.Group data-testid={`input-type-${InputType.RADIO}`}>
            {options.map(({ label, value }) => (
              <Radio key={value} value={value}>
                {label}
              </Radio>
            ))}
          </Radio.Group>
        );
      case InputType.CHECKBOX:
        const { label: checkboxLabel } = checkboxProps as ExtendedCheckboxProps;

        return (
          <Checkbox data-testid={`input-type-${InputType.CHECKBOX}`}>{checkboxLabel}</Checkbox>
        );
      case InputType.SWITCH:
        const { label: switchLabel } = switchProps as ExtendedSwitchProps;

        return (
          <div className={`input-type-${InputType.SWITCH}`}>
            <Switch
              className={`input-type-${InputType.SWITCH}__button`}
              data-testid={`input-type-${InputType.SWITCH}`}
              onChange={(value) => setFieldValue!(name, value)}
            />
            <span className={`input-type-${InputType.SWITCH}__label`}>{switchLabel}</span>
          </div>
        );
      default:
        throw Error(`${inputType} input type does not exist`);
    }
  };

  return (
    <Form.Item
      name={name}
      className='form-item'
      label={label ? <span className='form-item__label'>{label}</span> : null}
      rules={rules}
      validateFirst={true}
      valuePropName={type === InputType.CHECKBOX ? 'checked' : 'value'}
    >
      {getFormItemInput(type as InputType)}
    </Form.Item>
  );
};
