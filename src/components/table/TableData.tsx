import { FunctionComponent, ReactNode } from "react";
import { KeyCodes } from "../../keycode/KeyCodes";

interface TableDataProps {
  width?: any;
  onClick?: () => void;
  children: ReactNode;
}

export const TableData: FunctionComponent<TableDataProps> = ({ width = "auto", onClick, children }) => {
  const handleKeyUp = (key: string) => {
    if (key === KeyCodes.Enter) {
      onClick?.();
    }
  };
  return (
    <td style={{ width: width }}>
      {onClick ? (
        <div role="button" onClick={onClick} onKeyUp={(e) => handleKeyUp(e.key)} tabIndex={0}>
          {children}
        </div>
      ) : (
        children
      )}
    </td>
  );
};
