import { RegisterFormKeys } from '@/register/enums/register-form-keys';
import {
  emailValidator,
  usernameValidator,
  passwordValidator,
  genderValidator,
  termsValidator,
} from '@/register/utils/validators';

import { InputType, NonStandardInputType } from '@/enums/input-type';

import { CustomFormItemProps } from '@/types/custom-form-item-props';
import { NonStandardItemProps } from '@/types/non-standard-form-item-props';

import { FORM_LABELS } from './form-field-labels';
import { FORM_FIELD_PLACEHOLDERS } from './form-field-placeholders';
import { GENDER_OPTIONS } from './gender-options';

export const FORM_FIELDS: (CustomFormItemProps<RegisterFormKeys> | NonStandardItemProps)[] = [
  {
    type: InputType.TEXT,
    key: RegisterFormKeys.EMAIL,
    name: RegisterFormKeys.EMAIL,
    label: FORM_LABELS[RegisterFormKeys.EMAIL],
    rules: [{ validator: emailValidator }],
    inputProps: {
      placeholder: FORM_FIELD_PLACEHOLDERS[RegisterFormKeys.EMAIL],
    },
  },
  {
    type: InputType.PASSWORD,
    key: RegisterFormKeys.PASSWORD,
    name: RegisterFormKeys.PASSWORD,
    label: FORM_LABELS[RegisterFormKeys.PASSWORD],
    rules: [{ validator: passwordValidator }],
    inputProps: {
      placeholder: FORM_LABELS[RegisterFormKeys.PASSWORD],
    },
  },
  {
    type: InputType.TEXT,
    key: RegisterFormKeys.NICKNAME,
    name: RegisterFormKeys.NICKNAME,
    label: FORM_LABELS[RegisterFormKeys.NICKNAME],
    rules: [{ validator: usernameValidator }],
    inputProps: {
      placeholder: FORM_FIELD_PLACEHOLDERS[RegisterFormKeys.NICKNAME],
    },
  },
  {
    type: NonStandardInputType.DATE_OF_BIRTH,
    key: NonStandardInputType.DATE_OF_BIRTH,
    name: NonStandardInputType.DATE_OF_BIRTH,
    label: FORM_LABELS[NonStandardInputType.DATE_OF_BIRTH],
  },
  {
    type: InputType.RADIO,
    key: RegisterFormKeys.GENDER,
    name: RegisterFormKeys.GENDER,
    label: FORM_LABELS[RegisterFormKeys.GENDER],
    rules: [{ validator: genderValidator }],
    radioProps: {
      options: GENDER_OPTIONS,
    },
  },
  {
    type: InputType.CHECKBOX,
    key: RegisterFormKeys.OFFERS,
    name: RegisterFormKeys.OFFERS,
    checkboxProps: {
      label: FORM_LABELS[RegisterFormKeys.OFFERS],
    },
  },
  {
    type: InputType.CHECKBOX,
    key: RegisterFormKeys.SHARE_INFORMATION,
    name: RegisterFormKeys.SHARE_INFORMATION,
    checkboxProps: {
      label: FORM_LABELS[RegisterFormKeys.SHARE_INFORMATION],
    },
  },
  {
    type: InputType.CHECKBOX,
    key: RegisterFormKeys.TERMS,
    name: RegisterFormKeys.TERMS,
    rules: [{ validator: termsValidator }],
    checkboxProps: {
      label: FORM_LABELS[RegisterFormKeys.TERMS],
    },
  },
];
