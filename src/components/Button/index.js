import React from "react";
import { Button as PrimaryButton } from "./styles";

const Button = ({ title, onClick, disabled }) => {
  return (
    <PrimaryButton onClick={onClick} disabled={disabled}>
      {title}
    </PrimaryButton>
  );
};

export default Button;
