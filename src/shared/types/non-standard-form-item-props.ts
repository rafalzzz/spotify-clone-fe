import { CustomFormItemProps } from "./custom-form-item-props";

export type NonStandardItemProps = Pick<CustomFormItemProps, "type" | "key" | "name" | "label">;
