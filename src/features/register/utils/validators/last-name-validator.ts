import { RuleObject } from "antd/es/form";
import { hasOnlyLettersWithPauseMark, startWithUpperCase } from "shared/consts/regex";

const MIN_LENGTH = 2;
const MAX_LENGTH = 150;

export const lastNameValidator = (_: RuleObject, value: string) => {
  if (value.length < MIN_LENGTH) {
    return Promise.reject(new Error(`Last name must be at least ${MIN_LENGTH} characters`));
  }

  if (value.length > MAX_LENGTH) {
    return Promise.reject(new Error(`Last name can contain up to ${MAX_LENGTH} characters`));
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
