import { Form, Input, Select, Radio, Checkbox, Switch } from 'antd';
import { useCallback } from 'react';

import { EInputType } from '@/enums/input-type';

import {
  TCustomFormItem,
  ExtendedCheckboxProps,
  ExtendedRadioProps,
  ExtendedSwitchProps,
} from '@/types/components';

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
}: TCustomFormItem): JSX.Element => {
  const getFormItemInput = useCallback(
    (inputType: EInputType) => {
      switch (inputType) {
        case EInputType.TEXT:
          return <Input data-testid={`input-type-${EInputType.TEXT}`} {...inputProps} />;
        case EInputType.PASSWORD:
          return (
            <Input.Password
              autoComplete='on'
              data-testid={`input-type-${EInputType.PASSWORD}`}
              {...inputProps}
            />
          );
        case EInputType.SELECT:
          return <Select data-testid={`input-type-${EInputType.SELECT}`} {...selectProps} />;
        case EInputType.RADIO:
          const { options } = radioProps as ExtendedRadioProps;

          return (
            <Radio.Group data-testid={`input-type-${EInputType.RADIO}`}>
              {options.map(({ label, value }) => (
                <Radio key={value} value={value}>
                  {label}
                </Radio>
              ))}
            </Radio.Group>
          );
        case EInputType.CHECKBOX:
          const { label: checkboxLabel } = checkboxProps as ExtendedCheckboxProps;

          return (
            <Checkbox data-testid={`input-type-${EInputType.CHECKBOX}`}>{checkboxLabel}</Checkbox>
          );
        case EInputType.SWITCH:
          const { label: switchLabel } = switchProps as ExtendedSwitchProps;

          return (
            <div className={`input-type-${EInputType.SWITCH}`}>
              <Switch
                className={`input-type-${EInputType.SWITCH}__button`}
                data-testid={`input-type-${EInputType.SWITCH}`}
                onChange={(value) => setFieldValue!(name, value)}
                title={switchLabel}
              />
              <span className={`input-type-${EInputType.SWITCH}__label`}>{switchLabel}</span>
            </div>
          );
        default:
          throw Error(`${inputType} input type does not exist`);
      }
    },
    [checkboxProps, inputProps, name, radioProps, selectProps, switchProps, setFieldValue],
  );

  return (
    <Form.Item
      name={name}
      className='form-item'
      label={label ? <span className='form-item__label'>{label}</span> : null}
      rules={rules}
      validateFirst={true}
      valuePropName={type === EInputType.CHECKBOX ? 'checked' : 'value'}
    >
      {getFormItemInput(type as EInputType)}
    </Form.Item>
  );
};
