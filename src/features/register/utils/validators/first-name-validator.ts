import { RuleObject } from "antd/es/form";
import { hasOnlyLetters, startWithUpperCase } from "shared/consts/regex";

const MIN_LENGTH = 2;
const MAX_LENGTH = 150;

export const firstNameValidator = (_: RuleObject, value: string) => {
  if (value.length < MIN_LENGTH) {
    return Promise.reject(new Error(`First name must be at least ${MIN_LENGTH} characters`));
  }

  if (value.length > MAX_LENGTH) {
    return Promise.reject(new Error(`First name can contain up to ${MAX_LENGTH} characters`));
  }

  if (!startWithUpperCase.test(value)) {
    return Promise.reject(new Error("First name must start with an uppercase letter"));
  }

  if (!hasOnlyLetters.test(value)) {
    return Promise.reject(new Error("First name must only contain letters"));
  }

  return Promise.resolve();
};
