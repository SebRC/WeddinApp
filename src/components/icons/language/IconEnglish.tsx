import { FunctionComponent } from "react";
import { IconSize } from "../iconProps";

export const IconEnglish: FunctionComponent = () => {
  const size = IconSize.Medium;
  return (
    <svg width={size} height={size} viewBox="0 0 413 267" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="2.5" y="2.5" width="408" height="262" rx="27.5" fill="white" stroke="black" stroke-width="5" />
      <rect x="123" y="5" width="46" height="257" fill="#B11414" />
      <rect x="5" y="152" width="46" height="403" transform="rotate(-90 5 152)" fill="#AC1616" />
    </svg>
  );
};
