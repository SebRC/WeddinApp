import React, { FunctionComponent, ReactNode } from "react";

interface FlexboxProps {
  flexDirection?: "row" | "column" | "row-reverse" | "column-reverse";
  justifyContent?:
    | "normal"
    | "start"
    | "end"
    | "center"
    | "left"
    | "right"
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "normal" | "start" | "end" | "center" | "flex-start" | "flex-end" | "stretch";
  overflow?: "visible" | "hidden" | "scroll" | "auto";
  marginBottom?: any;
  marginTop?: any;
  marginRight?: any;
  marginLeft?: any;
  paddingBottom?: any;
  paddingTop?: any;
  paddingRight?: any;
  paddingLeft?: any;
  height?: any;
  minHeight?: any;
  maxHeight?: any;
  width?: any;
  minWidth?: any;
  maxWidth?: any;
  gap?: string | number;
  debug?: boolean;
  style?: React.CSSProperties;
  children: ReactNode;
}

export const Flexbox: FunctionComponent<FlexboxProps> = ({
  flexDirection = "row",
  justifyContent = "normal",
  alignItems = "normal",
  overflow = "visible",
  marginBottom = "0px",
  marginTop = "0px",
  marginRight = "0px",
  marginLeft = "0px",
  paddingBottom = "0px",
  paddingTop = "0px",
  paddingRight = "0px",
  paddingLeft = "0px",
  height = "auto",
  minHeight = "auto",
  maxHeight = "auto",
  width = "auto",
  minWidth = "auto",
  maxWidth = "auto",
  gap = "normal",
  debug = false,
  style = {},
  children,
}) => {
  return (
    <div
      style={{
        display: "flex",
        position: "relative",
        flexDirection: flexDirection,
        justifyContent: justifyContent,
        alignItems: alignItems,
        overflow: overflow,
        height: height,
        minHeight: minHeight,
        width: width,
        minWidth: minWidth,
        marginBottom: marginBottom,
        marginTop: marginTop,
        marginRight: marginRight,
        marginLeft: marginLeft,
        paddingBottom: paddingBottom,
        paddingTop: paddingTop,
        paddingRight: paddingRight,
        paddingLeft: paddingLeft,
        gap: gap && gap,
        borderWidth: debug ? "2px" : "0px",
        borderStyle: debug ? "solid" : "none",
        borderColor: debug ? "red" : "transparent",
        ...style,
      }}
    >
      {children}
    </div>
  );
};
