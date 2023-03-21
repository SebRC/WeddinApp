import { FunctionComponent } from "react";

interface IconNodeProps {
  fill?: string;
}

export const IconNode: FunctionComponent<IconNodeProps> = ({ fill = "white" }) => {
  return (
    <svg width="30" height="30" viewBox="0 0 507 587" fill="none" xmlns="http://www.w3.org/2000/svg">
      <ellipse cx="236" cy="447.5" rx="139" ry="97.5" fill={fill} />
      <rect x="329" y="87" width="46" height="378" rx="20" fill={fill} />
      <path d="M147.809 300C107.85 307.886 28.2058 343.073 29.2972 420.731" stroke={fill} stroke-width="10" />
      <rect
        x="153.577"
        y="293.28"
        width="10.093"
        height="12.659"
        rx="5.0465"
        transform="rotate(75.8878 153.577 293.28)"
        fill={fill}
      />
      <rect
        x="24.3222"
        y="412"
        width="9.99204"
        height="13.9881"
        rx="4.99602"
        transform="rotate(0.068346 24.3222 412)"
        fill={fill}
      />
      <path d="M72.3611 284.051C49.8343 288.804 4.93469 310.014 5.54998 356.824" stroke={fill} stroke-width="10" />
      <rect
        width="9.9421"
        height="16.0736"
        rx="4.97105"
        transform="matrix(0.193597 0.981081 -0.97446 0.224559 79.7618 277.234)"
        fill={fill}
      />
      <rect
        width="9.99517"
        height="15.3679"
        rx="4.99759"
        transform="matrix(0.999568 0.0293855 -0.0292257 0.999573 0.815826 346.779)"
        fill={fill}
      />
      <path d="M343.406 580.458C365.928 575.681 410.806 554.425 410.142 507.616" stroke={fill} stroke-width="10" />
      <rect
        width="9.9421"
        height="16.0736"
        rx="4.97105"
        transform="matrix(-0.194611 -0.98088 0.974228 -0.225567 336.013 587.282)"
        fill={fill}
      />
      <rect
        width="9.99517"
        height="15.3679"
        rx="4.99759"
        transform="matrix(-0.999598 -0.0283522 0.0281924 -0.999603 414.887 517.655)"
        fill={fill}
      />
      <rect
        x="326"
        y="31.8747"
        width="168.608"
        height="91.9249"
        rx="20"
        transform="rotate(-11.9371 326 31.8747)"
        fill={fill}
      />
      <rect x="329" y="29" width="46" height="155" rx="20" fill={fill} />
    </svg>
  );
};
