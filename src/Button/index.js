import React from "react";
import { ButtonBase } from "./styles";

const Button = ({ children, ...props }) => {
  let Component;
  Component = ButtonBase;

  return <Component {...props}>{children}</Component>;
};

export default Button;
