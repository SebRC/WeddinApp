import { FunctionComponent } from "react";
import { IconProps, IconSize } from "./iconProps";

export const IconInfo: FunctionComponent<IconProps> = ({ fill = "white", size = IconSize.Medium }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 525 529" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M525 264.5C525 410.579 407.475 529 262.5 529C117.525 529 0 410.579 0 264.5C0 118.421 117.525 0 262.5 0C407.475 0 525 118.421 525 264.5ZM52.5 264.5C52.5 381.363 146.52 476.1 262.5 476.1C378.48 476.1 472.5 381.363 472.5 264.5C472.5 147.637 378.48 52.9 262.5 52.9C146.52 52.9 52.5 147.637 52.5 264.5Z"
        fill={fill}
      />
      <circle cx="262" cy="143" r="45" fill={fill} />
      <rect x="227" y="213" width="70" height="227" rx="25" fill={fill} />
    </svg>
  );
};
