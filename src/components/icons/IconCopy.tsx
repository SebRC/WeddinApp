import { FunctionComponent } from "react";
import { IconProps, IconSize } from "./iconProps";

export const IconCopy: FunctionComponent<IconProps> = ({ fill = "white", size = IconSize.Medium }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 557 679" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="557" height="679" fill={fill} />
      <rect x="25" y="145" width="391" height="509" rx="50" fill={fill} stroke="black" stroke-width="50" />
      <rect x="141" y="25" width="391" height="509" rx="50" fill={fill} stroke="black" stroke-width="50" />
    </svg>
  );
};
