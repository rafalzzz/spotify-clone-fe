import { RuleObject } from "antd/es/form";

const REQUIRED_LENGTH = 2;
const startWithUpperCase = /^[A-Z]/;
const hasOnlyLettersWithPauseMark = /^([A-Z][a-z]*)(-[A-Z][a-z]*)?$/;

export const lastNameValidator = (_: RuleObject, value: string) => {
  if (value.length < REQUIRED_LENGTH) {
    return Promise.reject(new Error(`Last name must be at least ${REQUIRED_LENGTH} characters`));
  }
  if (!startWithUpperCase.test(value)) {
    return Promise.reject(new Error("Last name must start with an uppercase letter"));
  }
  if (!hasOnlyLettersWithPauseMark.test(value)) {
    return Promise.reject(
      new Error(
        "Last name must only contain letters and may consist of two parts separated by a pause mark"
      )
    );
  }
  return Promise.resolve();
};
