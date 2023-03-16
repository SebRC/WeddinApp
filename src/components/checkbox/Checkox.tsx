import React, { FunctionComponent } from "react";

interface CheckboxProps {
  checked: boolean;
  label: string;
  id: string;
  onChange: () => void;
}

export const Checkbox: FunctionComponent<CheckboxProps> = ({ checked, label, id, onChange }) => {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type="checkbox" id={id} checked={checked} onChange={onChange} />
    </>
  );
};
