import { MouseEventHandler } from "react";

export type CustomButtonProps = {
  type: "default" | "primary" | "link" | "text" | "ghost" | "dashed" | undefined;
  htmlType: "reset" | "submit" | "button" | undefined;
  text: string;
  key?: number;
  onClick?: MouseEventHandler<HTMLAnchorElement> & MouseEventHandler<HTMLButtonElement>;
};
