import { FunctionComponent } from "react";
import { TabNavItem, TabNavItemProps } from "./TabNavItem";
import styles from "./Tabs.module.css";

interface TabsProps {
  tabItems: TabNavItemProps[];
}

export const Tabs: FunctionComponent<TabsProps> = ({ tabItems }) => {
  return (
    <div className={styles.tabs}>
      {tabItems.map((ti, index) => {
        return (
          <TabNavItem
            title={ti.title}
            id={ti.id}
            activeTab={ti.activeTab}
            setActiveTab={ti.setActiveTab}
            key={`${ti.id}-${index}`}
          />
        );
      })}
    </div>
  );
};
