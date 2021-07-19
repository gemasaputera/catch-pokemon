import React from "react";
import { Label, Input } from "./styles";

const TextInput = ({ label, value, onChange, placeholder }) => {
  return (
    <div>
      <Label>{label}</Label>
      <Input onChange={onChange} placeholder={placeholder} value={value} />
    </div>
  );
};

export default TextInput;
