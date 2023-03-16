import React, { FunctionComponent } from "react";
import { Flexbox } from "../flexbox/Flexbox";

interface CheckboxProps {
  checked: boolean;
  label: string;
  id: string;
  onChange: () => void;
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({ checked, label, id, onChange }) => {
  return (
    <Flexbox>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
      <label htmlFor={id}>{label}</label>
    </Flexbox>
  );
};
