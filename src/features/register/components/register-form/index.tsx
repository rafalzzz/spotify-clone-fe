"use client";
import { Form } from "antd";

import { useRegisterForm } from "@/register/hooks/use-register-form";

import { CustomFormItem } from "@/components/custom-form-item";
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
      onFinish={onFinish}
      style={{ maxWidth: 600 }}
      scrollToFirstError
    >
      {formFields.map(({ key, ...restProps }) => (
        <CustomFormItem key={key} {...restProps} />
      ))}
      <CustomFormButtons formButtons={formButtons} />
    </Form>
  );
};
