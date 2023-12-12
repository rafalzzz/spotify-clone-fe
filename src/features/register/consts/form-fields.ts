import {
  emailValidator,
  usernameValidator,
  genderValidator,
  termsValidator,
} from '@/register/utils/validators';

import { passwordValidator } from '@/validators/password-validator';

import { EInputType, ENonStandardInputType } from '@/enums/input-type';

import { TCustomFormItem } from '@/types/custom-form-item-props';
import { TNonStandardItemProps } from '@/types/non-standard-form-item-props';

import { ERegisterFormKeys } from '../types';

import { FORM_LABELS } from './form-field-labels';
import { FORM_FIELD_PLACEHOLDERS } from './form-field-placeholders';
import { GENDER_OPTIONS } from './gender-options';

export const FORM_FIELDS: (TCustomFormItem<ERegisterFormKeys> | TNonStandardItemProps)[] = [
  {
    type: EInputType.TEXT,
    key: ERegisterFormKeys.EMAIL,
    name: ERegisterFormKeys.EMAIL,
    label: FORM_LABELS[ERegisterFormKeys.EMAIL],
    rules: [{ validator: emailValidator }],
    inputProps: {
      placeholder: FORM_FIELD_PLACEHOLDERS[ERegisterFormKeys.EMAIL],
    },
  },
  {
    type: EInputType.PASSWORD,
    key: ERegisterFormKeys.PASSWORD,
    name: ERegisterFormKeys.PASSWORD,
    label: FORM_LABELS[ERegisterFormKeys.PASSWORD],
    rules: [{ validator: passwordValidator }],
    inputProps: {
      placeholder: FORM_LABELS[ERegisterFormKeys.PASSWORD],
    },
  },
  {
    type: EInputType.TEXT,
    key: ERegisterFormKeys.NICKNAME,
    name: ERegisterFormKeys.NICKNAME,
    label: FORM_LABELS[ERegisterFormKeys.NICKNAME],
    rules: [{ validator: usernameValidator }],
    inputProps: {
      placeholder: FORM_FIELD_PLACEHOLDERS[ERegisterFormKeys.NICKNAME],
    },
  },
  {
    type: ENonStandardInputType.DATE_OF_BIRTH,
    key: ENonStandardInputType.DATE_OF_BIRTH,
    name: ENonStandardInputType.DATE_OF_BIRTH,
    label: FORM_LABELS[ENonStandardInputType.DATE_OF_BIRTH],
  },
  {
    type: EInputType.RADIO,
    key: ERegisterFormKeys.GENDER,
    name: ERegisterFormKeys.GENDER,
    label: FORM_LABELS[ERegisterFormKeys.GENDER],
    rules: [{ validator: genderValidator }],
    radioProps: {
      options: GENDER_OPTIONS,
    },
  },
  {
    type: EInputType.CHECKBOX,
    key: ERegisterFormKeys.OFFERS,
    name: ERegisterFormKeys.OFFERS,
    checkboxProps: {
      label: FORM_LABELS[ERegisterFormKeys.OFFERS],
    },
  },
  {
    type: EInputType.CHECKBOX,
    key: ERegisterFormKeys.SHARE_INFORMATION,
    name: ERegisterFormKeys.SHARE_INFORMATION,
    checkboxProps: {
      label: FORM_LABELS[ERegisterFormKeys.SHARE_INFORMATION],
    },
  },
  {
    type: EInputType.CHECKBOX,
    key: ERegisterFormKeys.TERMS,
    name: ERegisterFormKeys.TERMS,
    rules: [{ validator: termsValidator }],
    checkboxProps: {
      label: FORM_LABELS[ERegisterFormKeys.TERMS],
    },
  },
];
