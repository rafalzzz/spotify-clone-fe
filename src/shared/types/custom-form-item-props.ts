import { Rule } from "antd/es/form";
import { InputType, NonStandardInputType } from "@/enums/input-type";
import { CheckboxProps, InputProps, RadioProps, SelectProps } from "antd";

type Option = { label: string; value: string | number };

export interface ExtendedSelectProps extends SelectProps {
  options: Option[];
}

export interface ExtendedRadioProps extends RadioProps {
  options: Option[];
}

export interface ExtendedCheckboxProps extends CheckboxProps {
  text: string;
}

export type CustomFormItemProps<T = string> = {
  type: InputType | NonStandardInputType;
  name: T;
  label?: string;
  rules?: Rule[];
  key?: T;
  selectProps?: ExtendedSelectProps;
  inputProps?: InputProps;
  radioProps?: ExtendedRadioProps;
  checkboxProps?: ExtendedCheckboxProps;
};
