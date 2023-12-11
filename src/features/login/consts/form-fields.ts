import { passwordValidator } from '@/login/utils/validators/password-validator';

import { emailOrUsernameValidator } from '@/validators/email-or-username-validator';

import { EInputType } from '@/enums/input-type';

import { TCustomFormItem } from '@/types/custom-form-item-props';
import { TNonStandardItemProps } from '@/types/non-standard-form-item-props';

import { ELoginFormKeys } from '../types';

import { FORM_LABELS } from './form-field-labels';
import { FORM_FIELD_PLACEHOLDERS } from './form-field-placeholders';

export const FORM_FIELDS: (TCustomFormItem<ELoginFormKeys> | TNonStandardItemProps)[] = [
  {
    type: EInputType.TEXT,
    key: ELoginFormKeys.LOGIN,
    name: ELoginFormKeys.LOGIN,
    label: FORM_LABELS[ELoginFormKeys.LOGIN],
    rules: [{ validator: emailOrUsernameValidator }],
    inputProps: {
      placeholder: FORM_FIELD_PLACEHOLDERS[ELoginFormKeys.LOGIN],
    },
  },
  {
    type: EInputType.PASSWORD,
    key: ELoginFormKeys.PASSWORD,
    name: ELoginFormKeys.PASSWORD,
    label: FORM_LABELS[ELoginFormKeys.PASSWORD],
    rules: [{ validator: passwordValidator }],
    inputProps: {
      placeholder: FORM_LABELS[ELoginFormKeys.PASSWORD],
    },
  },
  {
    type: EInputType.SWITCH,
    key: ELoginFormKeys.REMEMBER_ME,
    name: ELoginFormKeys.REMEMBER_ME,
    switchProps: {
      label: FORM_LABELS[ELoginFormKeys.REMEMBER_ME],
    },
  },
];
