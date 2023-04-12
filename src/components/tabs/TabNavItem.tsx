import React, { FunctionComponent } from "react";
import { Flexbox } from "../layout/flexbox/Flexbox";
import styles from "./Tabs.module.css";

interface TabNavItemProps {
  id: string;
  title: string;
  activeTab: string;
  setActiveTab: (id: string) => void;
}

export const TabNavItem: FunctionComponent<TabNavItemProps> = ({ id, title, activeTab, setActiveTab }) => {
  const handleClick = () => {
    setActiveTab(id);
  };

  return (
    <Flexbox flexDirection="column">
      <div onClick={handleClick} className={styles.tab} onKeyUp={() => {}} role="button" tabIndex={0}>
        {title}
      </div>
      {activeTab === id && <div className={styles.activeTab} />}
    </Flexbox>
  );
};
