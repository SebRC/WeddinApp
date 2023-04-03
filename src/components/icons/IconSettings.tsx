import { FunctionComponent } from "react";
import { IconProps } from "./iconProps";

export const IconSettings: FunctionComponent<IconProps> = ({ fill = "white", size = 18 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 610 610" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M530 305C530 429.264 429.264 530 305 530C180.736 530 80 429.264 80 305C80 180.736 180.736 80 305 80C429.264 80 530 180.736 530 305ZM170.551 305C170.551 379.254 230.746 439.449 305 439.449C379.254 439.449 439.449 379.254 439.449 305C439.449 230.746 379.254 170.551 305 170.551C230.746 170.551 170.551 230.746 170.551 305Z"
        fill={fill}
      />
      <rect x="255" width="100" height="160" rx="20" fill={fill} />
      <rect x="450" y="355" width="100" height="160" rx="20" transform="rotate(-90 450 355)" fill={fill} />
      <rect x="47" y="117.711" width="100" height="160" rx="20" transform="rotate(-45 47 117.711)" fill={fill} />
      <rect x="379" y="449.711" width="100" height="160" rx="20" transform="rotate(-45 379 449.711)" fill={fill} />
      <rect x="450" y="230.848" width="100" height="160" rx="20" transform="rotate(-135 450 230.848)" fill={fill} />
      <rect
        x="117.711"
        y="562.848"
        width="100"
        height="160"
        rx="20"
        transform="rotate(-135 117.711 562.848)"
        fill={fill}
      />
      <rect y="355" width="100" height="160" rx="20" transform="rotate(-90 0 355)" fill={fill} />
      <rect x="255" y="450" width="100" height="160" rx="20" fill={fill} />
    </svg>
  );
};
