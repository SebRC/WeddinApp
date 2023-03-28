import { FunctionComponent } from "react";
import { IconProps, IconSize } from "./iconProps";

export const IconCollapse: FunctionComponent<IconProps> = ({ fill = "white", size = IconSize.Small }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 267 205" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M121.107 7.17212C127.062 -1.55958 139.938 -1.55958 145.893 7.17212L264.299 180.799C271.089 190.756 263.958 204.25 251.906 204.25H15.094C3.04205 204.25 -4.08883 190.756 2.70143 180.799L121.107 7.17212Z"
        fill={fill}
      />
    </svg>
  );
};
