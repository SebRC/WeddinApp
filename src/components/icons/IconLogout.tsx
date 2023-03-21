import { FunctionComponent } from "react";
import { IconProps } from "./iconProps";

export const IconLogout: FunctionComponent<IconProps> = ({ fill = "white", size = 18 }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="32" y="1" width="4" height="18" rx="2" fill={fill} />
      <rect x="10" y="28" width="4" height="38" rx="2" transform="rotate(-90 10 28)" fill={fill} />
      <rect
        width="4.15438"
        height="12.2406"
        rx="2.07719"
        transform="matrix(0.698523 -0.715588 0.698523 0.715588 38.5478 19.3392)"
        fill={fill}
      />
      <rect
        width="4.15438"
        height="12.2406"
        rx="2.07719"
        transform="matrix(-0.698523 -0.715588 0.698523 -0.715588 41.4497 33.9543)"
        fill={fill}
      />
      <rect x="32" y="35" width="4" height="14" rx="2" fill={fill} />
      <rect y="2" width="4" height="46" fill={fill} />
      <rect y="50" width="4" height="36" rx="2" transform="rotate(-90 0 50)" fill={fill} />
      <rect y="4" width="4" height="36" rx="2" transform="rotate(-90 0 4)" fill={fill} />
    </svg>
  );
};
