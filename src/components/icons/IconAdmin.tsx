import { FunctionComponent } from "react";
import { IconProps, IconSize } from "./iconProps";

export const IconAdmin: FunctionComponent<IconProps> = ({ fill = "white", size = IconSize.Medium }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 492 499" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="185" cy="127" rx="131" ry="127" fill={fill} />
      <circle cx="295" cy="439" r="50" fill={fill} />
      <path
        d="M24 499C10.1929 499 -1.12806 487.78 0.223191 474.039C2.90758 446.742 9.97926 420.208 21.1313 395.867C35.6592 364.157 56.6598 337.157 82.2584 317.276C107.857 297.395 137.257 285.252 167.835 281.93C191.139 279.399 214.575 282.052 236.925 289.667C248.953 293.765 254.238 307.265 249.922 319.217L190.962 482.491C187.384 492.398 177.981 499 167.448 499L24 499Z"
        fill={fill}
      />
      <rect
        x="415.092"
        y="254"
        width="29.3194"
        height="235"
        rx="14.6597"
        transform="rotate(39.0632 415.092 254)"
        fill={fill}
      />
      <rect
        width="25.1911"
        height="105.455"
        rx="12.5956"
        transform="matrix(-0.656044 0.754722 -0.747121 -0.664688 496.314 324.094)"
        fill={fill}
      />
      <rect
        width="25.1911"
        height="105.455"
        rx="12.5956"
        transform="matrix(-0.656044 0.754722 -0.747121 -0.664688 454.314 379.094)"
        fill={fill}
      />
    </svg>
  );
};
