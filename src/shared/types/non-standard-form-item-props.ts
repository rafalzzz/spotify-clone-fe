import { TCustomFormItem } from './custom-form-item-props';

type TCustomFormItemKeys = 'type' | 'key' | 'name' | 'label';
export type TNonStandardItemProps = Pick<TCustomFormItem, TCustomFormItemKeys>;
