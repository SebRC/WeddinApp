import { FunctionComponent, ReactNode } from "react";

interface TableDataProps {
  width?: any;
  onClick?: () => void;
  children: ReactNode;
}

export const TableData: FunctionComponent<TableDataProps> = ({ width = "auto", onClick, children }) => {
  return (
    <td style={{ width: width }} onClick={onClick}>
      {children}
    </td>
  );
};
