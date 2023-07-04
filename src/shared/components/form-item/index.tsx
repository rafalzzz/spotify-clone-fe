import { Form, Input, Select } from "antd";
import { InputType } from "@/enums/input-type";
import { FormItemProps } from "@/types/form-item-props";

import "./FormItem.scss";

export const FormItem = ({
  type,
  name,
  label,
  rules,
  selectOptions,
  inputOptions,
}: FormItemProps) => {
  const getFormItemInput = (inputType: InputType) => {
    switch (inputType) {
      case InputType.TEXT:
        return <Input {...inputOptions} />;
      case InputType.PASSWORD:
        return <Input.Password />;
      case InputType.SELECT:
        return <Select {...selectOptions} />;
      default:
        throw Error(`${inputType} input type does not exist`);
    }
  };

  return (
    <Form.Item
      name={name}
      label={<span className="form-item__label">{label}:</span>}
      rules={rules}
      validateFirst={true}
    >
      {getFormItemInput(type)}
    </Form.Item>
  );
};
