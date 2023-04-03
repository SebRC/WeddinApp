import { FunctionComponent, ReactNode } from "react";

interface TabContentProps {
  id: string;
  activeTab: string;
  children: ReactNode;
}

export const TabContent: FunctionComponent<TabContentProps> = ({ id, activeTab, children }) => {
  return activeTab === id ? <>{children}</> : null;
};
