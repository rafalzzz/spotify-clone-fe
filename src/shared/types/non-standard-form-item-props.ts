import { TCustomFormItem } from './custom-form-item-props';

type CustomFormItemKeys = 'type' | 'key' | 'name' | 'label';
export type NonStandardItemProps = Pick<TCustomFormItem, CustomFormItemKeys>;
