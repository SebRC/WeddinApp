import { FunctionComponent } from "react";
import { IconProps, IconSize } from "./iconProps";

export const IconExpand: FunctionComponent<IconProps> = ({ fill = "white", size = IconSize.Small }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 267 205" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M145.893 197.828C139.938 206.56 127.062 206.56 121.107 197.828L2.7014 24.2012C-4.08885 14.2442 3.04206 0.75 15.094 0.75L251.906 0.75C263.958 0.75 271.089 14.2442 264.299 24.2012L145.893 197.828Z"
        fill={fill}
      />
    </svg>
  );
};
