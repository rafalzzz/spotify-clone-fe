"use client";
import { Button, Checkbox, Form, Input, InputNumber, Select } from "antd";

import { useRegisterForm } from "@/register/hooks/use-register-form";

import "./RegisterForm.scss";
import { FormItem } from "@/components/form-item";

const { Option } = Select;

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

export const RegisterForm = () => {
  const { form, formItems, onFinish } = useRegisterForm();

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
      {formItems.map(({ key, ...restProps }) => (
        <FormItem key={key} {...restProps} />
      ))}
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};
