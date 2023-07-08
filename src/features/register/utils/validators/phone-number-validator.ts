import { RuleObject } from "antd/es/form";

const phoneNumberRegex = /^\d{9}$/;

export const phoneNumberValidator = (_: RuleObject, value: string) => {
  if (!phoneNumberRegex.test(value)) {
    return Promise.reject(new Error("Invalid phone number"));
  }

  return Promise.resolve();
};
