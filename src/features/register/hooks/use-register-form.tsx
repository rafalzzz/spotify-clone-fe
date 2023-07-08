import { useMemo, useCallback } from "react";
import { Form } from "antd";

import { requiredFieldMessage } from "@/utils/required-field-message";
import {
  firstNameValidator,
  genderValidator,
  lastNameValidator,
  nicknameValidator,
  passwordValidator,
  phoneNumberValidator,
} from "@/register/utils/validators";

import { PhoneNumberPrefix } from "@/components/phone-number-prefix";

import { InputType } from "@/enums/input-type";
import { CustomFormItemProps } from "@/types/custom-form-item-props";
import { CustomButtonProps } from "@/types/custom-button-props";

enum RegisterFormKeys {
  FIRST_NAME = "firstName",
  LAST_NAME = "lastName",
  NICKNAME = "nickname",
  EMAIL = "email",
  PASSWORD = "password",
  CONFIRM_PASSWORD = "confirm",
  GENDER = "gender",
  PHONE_NUMBER = "phone",
}

const REGISTER_FORM_LABELS = {
  [RegisterFormKeys.FIRST_NAME]: "First name",
  [RegisterFormKeys.LAST_NAME]: "Last name",
  [RegisterFormKeys.NICKNAME]: "Nickname",
  [RegisterFormKeys.EMAIL]: "E-mail",
  [RegisterFormKeys.PASSWORD]: "Password",
  [RegisterFormKeys.CONFIRM_PASSWORD]: "Confirm password",
  [RegisterFormKeys.GENDER]: "Gender",
  [RegisterFormKeys.PHONE_NUMBER]: "Phone number",
};

export type RegisterFormType = Record<RegisterFormKeys, string>;

export const useRegisterForm = () => {
  const [form] = Form.useForm<RegisterFormType>();

  const formFields: CustomFormItemProps<RegisterFormKeys>[] = useMemo(
    () => [
      {
        type: InputType.TEXT,
        key: RegisterFormKeys.FIRST_NAME,
        name: RegisterFormKeys.FIRST_NAME,
        label: REGISTER_FORM_LABELS[RegisterFormKeys.FIRST_NAME],
        rules: [
          {
            required: true,
            message: requiredFieldMessage(REGISTER_FORM_LABELS[RegisterFormKeys.FIRST_NAME]),
          },
          { validator: firstNameValidator },
        ],
      },
      {
        type: InputType.TEXT,
        key: RegisterFormKeys.LAST_NAME,
        name: RegisterFormKeys.LAST_NAME,
        label: REGISTER_FORM_LABELS[RegisterFormKeys.LAST_NAME],
        rules: [
          {
            required: true,
            message: requiredFieldMessage(REGISTER_FORM_LABELS[RegisterFormKeys.LAST_NAME]),
          },
          { validator: lastNameValidator },
        ],
      },
      {
        type: InputType.TEXT,
        key: RegisterFormKeys.NICKNAME,
        name: RegisterFormKeys.NICKNAME,
        label: REGISTER_FORM_LABELS[RegisterFormKeys.NICKNAME],
        rules: [
          {
            required: true,
            message: requiredFieldMessage(REGISTER_FORM_LABELS[RegisterFormKeys.NICKNAME]),
          },
          { validator: nicknameValidator },
        ],
      },
      {
        type: InputType.TEXT,
        key: RegisterFormKeys.EMAIL,
        name: RegisterFormKeys.EMAIL,
        label: REGISTER_FORM_LABELS[RegisterFormKeys.EMAIL],
        rules: [
          {
            required: true,
            message: requiredFieldMessage(REGISTER_FORM_LABELS[RegisterFormKeys.EMAIL]),
          },
          {
            type: "email",
            message: "Invalid e-mail address",
          },
        ],
      },
      {
        type: InputType.PASSWORD,
        key: RegisterFormKeys.PASSWORD,
        name: RegisterFormKeys.PASSWORD,
        label: REGISTER_FORM_LABELS[RegisterFormKeys.PASSWORD],
        rules: [
          {
            required: true,
            message: requiredFieldMessage(REGISTER_FORM_LABELS[RegisterFormKeys.PASSWORD]),
          },
          { validator: passwordValidator },
        ],
      },
      {
        type: InputType.PASSWORD,
        key: RegisterFormKeys.CONFIRM_PASSWORD,
        name: RegisterFormKeys.CONFIRM_PASSWORD,
        label: REGISTER_FORM_LABELS[RegisterFormKeys.CONFIRM_PASSWORD],
        rules: [
          {
            required: true,
            message: requiredFieldMessage(REGISTER_FORM_LABELS[RegisterFormKeys.CONFIRM_PASSWORD]),
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue(RegisterFormKeys.PASSWORD) === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("The new password that you entered do not match!"));
            },
          }),
        ],
      },
      {
        type: InputType.SELECT,
        key: RegisterFormKeys.GENDER,
        name: RegisterFormKeys.GENDER,
        label: REGISTER_FORM_LABELS[RegisterFormKeys.GENDER],
        rules: [{ validator: genderValidator }],
        selectOptions: {
          placeholder: "Select your gender",
          options: [
            { label: "Male", value: "male" },
            { label: "Female", value: "female" },
            { label: "Other", value: "other" },
          ],
        },
      },
      {
        type: InputType.TEXT,
        key: RegisterFormKeys.PHONE_NUMBER,
        name: RegisterFormKeys.PHONE_NUMBER,
        label: REGISTER_FORM_LABELS[RegisterFormKeys.PHONE_NUMBER],
        rules: [
          {
            required: true,
            message: requiredFieldMessage(REGISTER_FORM_LABELS[RegisterFormKeys.PHONE_NUMBER]),
          },
          { validator: phoneNumberValidator },
        ],
        inputOptions: {
          addonBefore: PhoneNumberPrefix,
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
