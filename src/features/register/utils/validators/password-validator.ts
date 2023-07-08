import { RuleObject } from "antd/es/form";

const REQUIRED_LENGTH = 8;
const hasUppercase = /[A-Z]/;
const hasLowercase = /[a-z]/;
const hasDigit = /[0-9]/;
const hasSpecialChar = /[^a-zA-Z0-9]/;

export const passwordValidator = (_: RuleObject, value: string) => {
  if (value.length < REQUIRED_LENGTH) {
    return Promise.reject(new Error(`Password must be at least ${REQUIRED_LENGTH} characters`));
  }
  if (!hasUppercase.test(value)) {
    return Promise.reject(new Error("Password must contain at least one uppercase letter"));
  }
  if (!hasLowercase.test(value)) {
    return Promise.reject(new Error("Password must contain at least one lowercase letter"));
  }
  if (!hasDigit.test(value)) {
    return Promise.reject(new Error("Password must contain at least one digit"));
  }
  if (!hasSpecialChar.test(value)) {
    return Promise.reject(new Error("Password must contain at least one special character"));
  }
  return Promise.resolve();
};
