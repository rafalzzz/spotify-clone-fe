import { RuleObject } from "antd/es/form";

const REQUIRED_LENGTH = 2;
const hasOnlyLettersAndDigits = /^[a-zA-Z0-9]+$/;

export const nicknameValidator = (_: RuleObject, value: string) => {
  if (value.length < REQUIRED_LENGTH) {
    return Promise.reject(new Error(`Nickname must be at least ${REQUIRED_LENGTH} characters`));
  }
  if (!hasOnlyLettersAndDigits.test(value)) {
    return Promise.reject(new Error("Nickname must only contain letters and digits"));
  }
  return Promise.resolve();
};
