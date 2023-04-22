import { FunctionComponent } from "react";
import { IconProps, IconSize } from "./iconProps";

export const IconHamburger: FunctionComponent<IconProps> = ({ fill = "white", size = IconSize.Medium }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 573 391" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="573" height="68" rx="30" fill={fill} />
      <rect y="161" width="573" height="68" rx="30" fill={fill} />
      <rect y="323" width="573" height="68" rx="30" fill={fill} />
    </svg>
  );
};
