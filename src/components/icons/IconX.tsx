import { FunctionComponent } from "react";
import { IconProps, IconSize } from "./iconProps";

export const IconX: FunctionComponent<IconProps> = ({ fill = "white", size = IconSize.Medium }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 488 488" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g filter="url(#filter0_d_0_1)">
        <circle cx="244" cy="240" r="225" stroke={fill} strokeWidth="30" shapeRendering="crispEdges" />
      </g>
      <path
        d="M115.858 141.438C108.047 133.627 108.047 120.964 115.858 113.153L117.153 111.858C124.964 104.047 137.627 104.047 145.438 111.858L371.153 337.574C378.964 345.384 378.964 358.047 371.153 365.858L369.858 367.153C362.047 374.964 349.384 374.964 341.574 367.153L115.858 141.438Z"
        fill={fill}
      />
      <path
        d="M341.574 111.858C349.384 104.047 362.047 104.047 369.858 111.858L371.153 113.153C378.964 120.964 378.964 133.627 371.153 141.438L145.438 367.153C137.627 374.964 124.964 374.964 117.153 367.153L115.858 365.858C108.047 358.047 108.047 345.384 115.858 337.574L341.574 111.858Z"
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
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
