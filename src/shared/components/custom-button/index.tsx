import React from "react";
import { Button } from "antd";
import { CustomButtonProps } from "@/types/custom-button-props";

export const CustomButton = ({ type, htmlType, text, onClick }: CustomButtonProps) => (
  <Button type={type} htmlType={htmlType} onClick={onClick}>
    {text}
  </Button>
);
