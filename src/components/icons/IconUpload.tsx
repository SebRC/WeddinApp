import { FunctionComponent } from "react";
import { IconProps, IconSize } from "./iconProps";

export const IconUpload: FunctionComponent<IconProps> = ({ fill = "white", size = IconSize.Medium }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 408 401" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="188" width="64" height="213" rx="32" fill={fill} />
      <rect y="401" width="64" height="408" rx="32" transform="rotate(-90 0 401)" fill={fill} />
      <rect x="344" y="188" width="64" height="213" rx="32" fill={fill} />
      <rect x="172" y="5" width="64" height="303" rx="32" fill={fill} />
      <rect x="159" y="32.2548" width="64" height="175.188" rx="32" transform="rotate(-45 159 32.2548)" fill={fill} />
      <rect
        x="125.255"
        y="156.132"
        width="64"
        height="175.188"
        rx="32"
        transform="rotate(-135 125.255 156.132)"
        fill={fill}
      />
    </svg>
  );
};
