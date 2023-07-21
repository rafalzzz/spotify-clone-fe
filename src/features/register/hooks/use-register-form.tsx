import { useMemo, useCallback } from "react";
import { Form } from "antd";

import {
  usernameValidator,
  passwordValidator,
  genderValidator,
  termsValidator,
} from "@/register/utils/validators";
import { emailValidator } from "@/register/utils/validators/email-validator";
import { parseRequestBody } from "@/register/helpers/parse-request-body";

import { GENDER_OPTIONS } from "@/register/consts/gender-options";

import { InputType, NonStandardInputType } from "@/enums/input-type";
import { RegisterFormKeys } from "@/register/enums/register-form-keys";
import { CustomFormItemProps } from "@/types/custom-form-item-props";
import { NonStandardItemProps } from "@/types/non-standard-form-item-props";
import { CustomButtonProps } from "@/types/custom-button-props";
import { registerUser } from "../utils/requests/register-user";

const REGISTER_FORM_LABELS = {
  [RegisterFormKeys.EMAIL]: "Your e-mail address",
  [RegisterFormKeys.PASSWORD]: "Create a password",
  [RegisterFormKeys.NICKNAME]: "How should we address you?",
  [NonStandardInputType.DATE_OF_BIRTH]: "Enter your date of birth",
  [RegisterFormKeys.GENDER]: "Your gender?",
};

export const INITIAL_VALUES = {
  [RegisterFormKeys.EMAIL]: "",
  [RegisterFormKeys.PASSWORD]: "",
  [RegisterFormKeys.NICKNAME]: "",
  [RegisterFormKeys.GENDER]: undefined,
  [RegisterFormKeys.OFFERS]: false,
  [RegisterFormKeys.SHARE_INFORMATION]: false,
  [RegisterFormKeys.TERMS]: false,
};

export type RegisterFormType = Record<RegisterFormKeys, string | number>;

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
        key: RegisterFormKeys.NICKNAME,
        name: RegisterFormKeys.NICKNAME,
        label: REGISTER_FORM_LABELS[RegisterFormKeys.NICKNAME],
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
          options: GENDER_OPTIONS,
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

  const onFinish = async (values: Record<RegisterFormKeys, string | number>) => {
    const requestBody = parseRequestBody(values);
    const response = await registerUser(requestBody);
    console.log({ response });
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
