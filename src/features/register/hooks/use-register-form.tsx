import { useMemo, useCallback } from "react";
import { Form } from "antd";

import {
  usernameValidator,
  passwordValidator,
  genderValidator,
  termsValidator,
} from "@/register/utils/validators";
import { emailValidator } from "@/register/utils/validators/email-validator";

import { InputType, NonStandardInputType } from "@/enums/input-type";
import { CustomFormItemProps } from "@/types/custom-form-item-props";
import { NonStandardItemProps } from "@/types/non-standard-form-item-props";
import { CustomButtonProps } from "@/types/custom-button-props";

enum RegisterFormKeys {
  EMAIL = "email",
  PASSWORD = "password",
  USERNAME = "username",
  GENDER = "gender",
  OFFERS = "offers",
  SHARE_INFORMATION = "shareInformation",
  TERMS = "terms",
}

const REGISTER_FORM_LABELS = {
  [RegisterFormKeys.EMAIL]: "Your e-mail address",
  [RegisterFormKeys.PASSWORD]: "Create a password",
  [RegisterFormKeys.USERNAME]: "How should we address you?",
  [NonStandardInputType.DATE_OF_BIRTH]: "Enter your date of birth",
  [RegisterFormKeys.GENDER]: "Your gender?",
};

export const INITIAL_VALUES = {
  [RegisterFormKeys.EMAIL]: "",
  [RegisterFormKeys.PASSWORD]: "",
  [RegisterFormKeys.USERNAME]: "",
  [RegisterFormKeys.GENDER]: undefined,
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
        inputProps: {
          placeholder: "Give me your e-mail address",
        },
      },
      {
        type: InputType.PASSWORD,
        key: RegisterFormKeys.PASSWORD,
        name: RegisterFormKeys.PASSWORD,
        label: REGISTER_FORM_LABELS[RegisterFormKeys.PASSWORD],
        rules: [{ validator: passwordValidator }],
        inputProps: {
          placeholder: REGISTER_FORM_LABELS[RegisterFormKeys.PASSWORD],
        },
      },
      {
        type: InputType.TEXT,
        key: RegisterFormKeys.USERNAME,
        name: RegisterFormKeys.USERNAME,
        label: REGISTER_FORM_LABELS[RegisterFormKeys.USERNAME],
        rules: [{ validator: usernameValidator }],
        inputProps: {
          placeholder: "Enter a username",
        },
      },
      {
        type: NonStandardInputType.DATE_OF_BIRTH,
        key: NonStandardInputType.DATE_OF_BIRTH,
        name: NonStandardInputType.DATE_OF_BIRTH,
        label: REGISTER_FORM_LABELS[NonStandardInputType.DATE_OF_BIRTH],
      },
      {
        type: InputType.RADIO,
        key: RegisterFormKeys.GENDER,
        name: RegisterFormKeys.GENDER,
        label: REGISTER_FORM_LABELS[RegisterFormKeys.GENDER],
        rules: [{ validator: genderValidator }],
        radioProps: {
          options: [
            { label: "Man", value: 0 },
            { label: "Woman", value: 1 },
            { label: "Non-binary person", value: 2 },
            { label: "Other", value: 3 },
            { label: "I don't want to give", value: 4 },
          ],
        },
      },
      {
        type: InputType.CHECKBOX,
        key: RegisterFormKeys.OFFERS,
        name: RegisterFormKeys.OFFERS,
        checkboxProps: {
          text: "I want to receive news and offers from Spotify",
        },
      },
      {
        type: InputType.CHECKBOX,
        key: RegisterFormKeys.SHARE_INFORMATION,
        name: RegisterFormKeys.SHARE_INFORMATION,
        checkboxProps: {
          text: "Share my registration information with content providers on Spotify. This information may be used for marketing purposes. Note: According to our Privacy Policy, your data may be sent to a country outside the EEA.",
        },
      },
      {
        type: InputType.CHECKBOX,
        key: RegisterFormKeys.TERMS,
        name: RegisterFormKeys.TERMS,
        rules: [{ validator: termsValidator }],
        checkboxProps: {
          text: "I accept the Spotify Terms of Use.",
        },
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
