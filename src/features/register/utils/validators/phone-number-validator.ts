import { RuleObject } from "antd/es/form";
import { phoneNumberRegex } from "shared/consts/regex";

export const phoneNumberValidator = (_: RuleObject, value: string) => {
  if (!phoneNumberRegex.test(value)) {
    return Promise.reject(new Error("Invalid phone number"));
  }

  return Promise.resolve();
};
