import { CheckboxProps, InputProps, RadioProps, SelectProps, SwitchProps } from 'antd';
import { Rule } from 'antd/es/form';
import { NamePath } from 'antd/es/form/interface';

import { EInputType, ENonStandardInputType } from '@/enums/input-type';

export type TOptionType = { label: string; value: string | number };

export interface ExtendedSelectProps extends SelectProps {
  options: TOptionType[];
}

export interface ExtendedRadioProps extends RadioProps {
  options: TOptionType[];
}

export interface ExtendedCheckboxProps extends CheckboxProps {
  label: string;
}

export interface ExtendedSwitchProps extends SwitchProps {
  label: string;
}

export type TCustomFormItem<T = string> = {
  type: EInputType | ENonStandardInputType;
  name: T;
  label?: string;
  rules?: Rule[];
  key?: T;
  selectProps?: ExtendedSelectProps;
  inputProps?: InputProps;
  radioProps?: ExtendedRadioProps;
  checkboxProps?: ExtendedCheckboxProps;
  switchProps?: ExtendedSwitchProps;
  setFieldValue?: (name: NamePath, value: string | number | boolean) => void;
};
