"use client";
import { Form } from "antd";

import { INITIAL_VALUES, useRegisterForm } from "@/register/hooks/use-register-form";

import { CustomFormItem } from "@/components/custom-form-item";
import { CustomDateInput } from "@/components/custom-date-input";
import { CustomFormButtons } from "@/components/custom-form-buttons";

import "./RegisterForm.scss";

export const RegisterForm = () => {
  const { form, formFields, formButtons, onFinish } = useRegisterForm();

  return (
    <Form
      className="register-form"
      form={form}
      name="register"
      layout="vertical"
      size={"large"}
      initialValues={INITIAL_VALUES}
      onFinish={onFinish}
      scrollToFirstError
    >
      {formFields.map(({ key, ...restProps }) => (
        <CustomFormItem key={key} {...restProps} />
      ))}
      <CustomDateInput />
      <CustomFormButtons formButtons={formButtons} />
    </Form>
  );
};
