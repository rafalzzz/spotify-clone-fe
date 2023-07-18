import { useMemo, useCallback } from "react";
import { Form } from "antd";

import { usernameValidator, passwordValidator } from "@/register/utils/validators";
import { emailValidator } from "../utils/validators/email-validator";

import { InputType, NonStandardInputType } from "@/enums/input-type";
import { CustomFormItemProps } from "@/types/custom-form-item-props";
import { NonStandardItemProps } from "@/types/non-standard-form-item-props";
import { CustomButtonProps } from "@/types/custom-button-props";

enum RegisterFormKeys {
  EMAIL = "email",
  PASSWORD = "password",
  USERNAME = "username",
}

const REGISTER_FORM_LABELS = {
  [RegisterFormKeys.EMAIL]: "Your e-mail address",
  [RegisterFormKeys.PASSWORD]: "Create a password",
  [RegisterFormKeys.USERNAME]: "How should we address you?",
  [NonStandardInputType.DATE_OF_BIRTH]: "Enter your date of birth",
};

export const INITIAL_VALUES = {
  [RegisterFormKeys.EMAIL]: "",
  [RegisterFormKeys.PASSWORD]: "",
  [RegisterFormKeys.USERNAME]: "",
};

export type RegisterFormType = Record<keyof typeof INITIAL_VALUES, string | number>;

export const useRegisterForm = () => {
  const [form] = Form.useForm<RegisterFormType>();

  const formFields: (CustomFormItemProps<RegisterFormKeys> | NonStandardItemProps)[] = useMemo(
    () => [
      {
        type: InputType.TEXT,
        key: RegisterFormKeys.EMAIL,
        name: RegisterFormKeys.EMAIL,
        label: REGISTER_FORM_LABELS[RegisterFormKeys.EMAIL],
        rules: [{ validator: emailValidator }],
        inputOptions: {
          placeholder: "Give me your e-mail address",
        },
      },
      {
        type: InputType.PASSWORD,
        key: RegisterFormKeys.PASSWORD,
        name: RegisterFormKeys.PASSWORD,
        label: REGISTER_FORM_LABELS[RegisterFormKeys.PASSWORD],
        rules: [{ validator: passwordValidator }],
        inputOptions: {
          placeholder: REGISTER_FORM_LABELS[RegisterFormKeys.PASSWORD],
        },
      },
      {
        type: InputType.TEXT,
        key: RegisterFormKeys.USERNAME,
        name: RegisterFormKeys.USERNAME,
        label: REGISTER_FORM_LABELS[RegisterFormKeys.USERNAME],
        rules: [{ validator: usernameValidator }],
        inputOptions: {
          placeholder: "Enter a username",
        },
      },
      {
        type: NonStandardInputType.DATE_OF_BIRTH,
        key: NonStandardInputType.DATE_OF_BIRTH,
        name: NonStandardInputType.DATE_OF_BIRTH,
        label: REGISTER_FORM_LABELS[NonStandardInputType.DATE_OF_BIRTH],
      },
    ],
    []
  );

  const onFinish = (values: any) => {
    console.log("Received values of form: ", values);
  };

  const clearForm = useCallback(() => {
    form.resetFields();
  }, [form]);

  const formButtons: CustomButtonProps[] = useMemo(
    () => [
      { key: 1, type: "default", htmlType: "reset", text: "Clear", onClick: clearForm },
      { key: 2, type: "primary", htmlType: "submit", text: "Register" },
    ],
    [clearForm]
  );

  return { form, formFields, formButtons, onFinish };
};
