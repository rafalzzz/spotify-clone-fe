import React from "react";
import { Form } from "antd";
import { CustomButton } from "../custom-button";
import { CustomButtonProps } from "@/types/custom-button-props";

import "./CustomFormButtons.scss";

export const CustomFormButtons = ({ formButtons }: { formButtons: CustomButtonProps[] }) => (
  <Form.Item className="form-buttons">
    {formButtons.map(({ key, ...restProps }) => (
      <CustomButton key={key} {...restProps} />
    ))}
  </Form.Item>
);
