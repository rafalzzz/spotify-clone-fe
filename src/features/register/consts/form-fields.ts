import {
  emailValidator,
  usernameValidator,
  genderValidator,
  termsValidator,
} from '@/register/utils/validators';

import { passwordValidator } from '@/validators/password-validator';

import { InputType, NonStandardInputType } from '@/enums/input-type';

import { TCustomFormItem } from '@/types/custom-form-item-props';
import { NonStandardItemProps } from '@/types/non-standard-form-item-props';

import { ERegisterFormKeys } from '../types';

import { FORM_LABELS } from './form-field-labels';
import { FORM_FIELD_PLACEHOLDERS } from './form-field-placeholders';
import { GENDER_OPTIONS } from './gender-options';

export const FORM_FIELDS: (TCustomFormItem<ERegisterFormKeys> | NonStandardItemProps)[] = [
  {
    type: InputType.TEXT,
    key: ERegisterFormKeys.EMAIL,
    name: ERegisterFormKeys.EMAIL,
    label: FORM_LABELS[ERegisterFormKeys.EMAIL],
    rules: [{ validator: emailValidator }],
    inputProps: {
      placeholder: FORM_FIELD_PLACEHOLDERS[ERegisterFormKeys.EMAIL],
    },
  },
  {
    type: InputType.PASSWORD,
    key: ERegisterFormKeys.PASSWORD,
    name: ERegisterFormKeys.PASSWORD,
    label: FORM_LABELS[ERegisterFormKeys.PASSWORD],
    rules: [{ validator: passwordValidator }],
    inputProps: {
      placeholder: FORM_LABELS[ERegisterFormKeys.PASSWORD],
    },
  },
  {
    type: InputType.TEXT,
    key: ERegisterFormKeys.NICKNAME,
    name: ERegisterFormKeys.NICKNAME,
    label: FORM_LABELS[ERegisterFormKeys.NICKNAME],
    rules: [{ validator: usernameValidator }],
    inputProps: {
      placeholder: FORM_FIELD_PLACEHOLDERS[ERegisterFormKeys.NICKNAME],
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
    key: ERegisterFormKeys.GENDER,
    name: ERegisterFormKeys.GENDER,
    label: FORM_LABELS[ERegisterFormKeys.GENDER],
    rules: [{ validator: genderValidator }],
    radioProps: {
      options: GENDER_OPTIONS,
    },
  },
  {
    type: InputType.CHECKBOX,
    key: ERegisterFormKeys.OFFERS,
    name: ERegisterFormKeys.OFFERS,
    checkboxProps: {
      label: FORM_LABELS[ERegisterFormKeys.OFFERS],
    },
  },
  {
    type: InputType.CHECKBOX,
    key: ERegisterFormKeys.SHARE_INFORMATION,
    name: ERegisterFormKeys.SHARE_INFORMATION,
    checkboxProps: {
      label: FORM_LABELS[ERegisterFormKeys.SHARE_INFORMATION],
    },
  },
  {
    type: InputType.CHECKBOX,
    key: ERegisterFormKeys.TERMS,
    name: ERegisterFormKeys.TERMS,
    rules: [{ validator: termsValidator }],
    checkboxProps: {
      label: FORM_LABELS[ERegisterFormKeys.TERMS],
    },
  },
];
