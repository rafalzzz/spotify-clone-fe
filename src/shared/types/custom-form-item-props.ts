import { Rule } from "antd/es/form";
import { InputType, NonStandardInputType } from "@/enums/input-type";
import { InputProps, SelectProps } from "antd";

export type CustomFormItemProps<T = string> = {
  type: InputType | NonStandardInputType;
  name: T;
  label: string;
  rules?: Rule[];
  key?: T;
  selectOptions?: SelectProps;
  inputOptions?: InputProps;
};
