import { FunctionComponent } from "react";
import { IconProps, IconSize } from "./iconProps";

export const IconSearch: FunctionComponent<IconProps> = ({ fill = "white", size = IconSize.Medium }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 424 404" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M288 146C288 226.634 223.529 292 144 292C64.471 292 0 226.634 0 146C0 65.3664 64.471 0 144 0C223.529 0 288 65.3664 288 146ZM36.478 146C36.478 206.208 84.6172 255.015 144 255.015C203.383 255.015 251.522 206.208 251.522 146C251.522 85.7925 203.383 36.9846 144 36.9846C84.6172 36.9846 36.478 85.7925 36.478 146Z"
        fill={fill}
      />
      <rect
        x="247.655"
        y="213.303"
        width="242.664"
        height="32"
        transform="rotate(43.4553 247.655 213.303)"
        fill={fill}
      />
    </svg>
  );
};
