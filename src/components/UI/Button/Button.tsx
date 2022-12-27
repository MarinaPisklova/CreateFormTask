import React from "react";
import { StyledButton } from "./styles";

interface IPropsButton {
  type: "button" | "submit" | "reset" | undefined;
  disabled?: boolean;
  children: React.ReactNode;
  handleClick?: () => void;
  autofocus?: boolean;
  className?: string;
}

const Button = (props: IPropsButton) => {
  return (
    <StyledButton
      autoFocus={props.autofocus}
      type={props.type}
      disabled={props.disabled}
      onClick={props.handleClick}
    >
      {props.children}
    </StyledButton>
  )
}

export default Button;