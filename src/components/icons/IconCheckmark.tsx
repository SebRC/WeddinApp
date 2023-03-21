import { FunctionComponent } from "react";
import { IconProps, IconSize } from "./iconProps";

export const IconCheckmark: FunctionComponent<IconProps> = ({ fill = "white", size = IconSize.Medium }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 488 488" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_0_1)">
        <circle cx="244" cy="240" r="225" stroke={fill} stroke-width="30" shape-rendering="crispEdges" />
      </g>
      <path
        d="M114.89 235.685C109.173 226.234 112.2 213.938 121.651 208.221C131.102 202.503 143.398 205.53 149.115 214.981L219.767 331.774C225.484 341.225 222.458 353.521 213.007 359.239C203.556 364.956 191.259 361.929 185.542 352.478L114.89 235.685Z"
        fill={fill}
      />
      <path
        d="M340.07 125.223C346.575 116.296 359.085 114.332 368.012 120.837C376.939 127.342 378.903 139.852 372.398 148.779L223.185 353.557C216.68 362.485 204.17 364.448 195.243 357.943C186.316 351.439 184.352 338.928 190.857 330.001L340.07 125.223Z"
        fill={fill}
      />
      <defs>
        <filter
          id="filter0_d_0_1"
          x="0"
          y="0"
          width="488"
          height="488"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_0_1" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_0_1" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};
