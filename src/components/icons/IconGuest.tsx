import { FunctionComponent } from "react";
import { IconProps, IconSize } from "./iconProps";

export const IconGuest: FunctionComponent<IconProps> = ({ fill = "white", size = IconSize.Medium }) => {
  return (
    <svg width={size} height={size} viewBox="0 0 372 499" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="186" cy="127" rx="131" ry="127" fill={fill} />
      <path
        d="M0 499C0 470.372 4.81103 442.024 14.1584 415.575C23.5058 389.126 37.2064 365.094 54.4781 344.851C71.7498 324.608 92.2543 308.55 114.821 297.594C137.387 286.639 161.574 281 186 281C210.426 281 234.613 286.639 257.179 297.594C279.746 308.55 300.25 324.608 317.522 344.851C334.794 365.094 348.494 389.126 357.842 415.575C367.189 442.024 372 470.372 372 499L186 499L0 499Z"
        fill={fill}
      />
    </svg>
  );
};
