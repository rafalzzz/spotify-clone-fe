import { Form, Input, Select, Radio, Checkbox } from "antd";
import { InputType } from "@/enums/input-type";
import {
  CustomFormItemProps,
  ExtendedCheckboxProps,
  ExtendedRadioProps,
} from "@/types/custom-form-item-props";

import "./CustomFormItem.scss";

export const CustomFormItem = ({
  type,
  name,
  label = "",
  rules,
  selectProps,
  inputProps,
  radioProps,
  checkboxProps,
}: CustomFormItemProps) => {
  const getFormItemInput = (inputType: InputType) => {
    switch (inputType) {
      case InputType.TEXT:
        return <Input {...inputProps} />;
      case InputType.PASSWORD:
        return <Input.Password {...inputProps} />;
      case InputType.SELECT:
        return <Select {...selectProps} />;
      case InputType.RADIO:
        const { options } = radioProps as ExtendedRadioProps;

        return (
          <Radio.Group>
            {options.map(({ label, value }) => (
              <Radio key={value} value={value}>
                {label}
              </Radio>
            ))}
          </Radio.Group>
        );
      case InputType.CHECKBOX:
        const { text } = checkboxProps as ExtendedCheckboxProps;

        return <Checkbox>{text}</Checkbox>;
      default:
        throw Error(`${inputType} input type does not exist`);
    }
  };

  return (
    <Form.Item
      name={name}
      className="form-item"
      label={label ? <span className="form-item__label">{label}</span> : null}
      rules={rules}
      validateFirst={true}
      valuePropName={type === InputType.CHECKBOX ? "checked" : "value"}
    >
      {getFormItemInput(type as InputType)}
    </Form.Item>
  );
};
