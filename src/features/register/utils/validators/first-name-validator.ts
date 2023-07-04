import { RuleObject } from "antd/es/form";

const REQUIRED_LENGTH = 2;
const startWithUpperCase = /^[A-Z]/;
const hasOnlyLetters = /^[A-Za-z]+$/;

export const firstNameValidator = (_: RuleObject, value: string) => {
  if (value.length < REQUIRED_LENGTH) {
    return Promise.reject(new Error(`First name must be at least ${REQUIRED_LENGTH} characters`));
  }
  if (!startWithUpperCase.test(value)) {
    return Promise.reject(new Error("First name must start with an uppercase letter"));
  }
  if (!hasOnlyLetters.test(value)) {
    return Promise.reject(new Error("First name must only contain letters"));
  }
  return Promise.resolve();
};
