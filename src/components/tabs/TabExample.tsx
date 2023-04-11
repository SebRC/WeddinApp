import { FunctionComponent, useState } from "react";
import { CreateGuestPage } from "../admin/CreateGuestPage";
import { Paper } from "../layout/paper/Paper";
import { GuestTableContainer } from "../table/guest/GuestTableContainer";
import { TabContent } from "./TabContent";
import { TabNavItem } from "./TabNavItem";
import styles from "./Tabs.module.css";

interface TabExampleProps {}

export const TabExample: FunctionComponent<TabExampleProps> = () => {
  const [activeTab, setActiveTab] = useState("guests");
  return (
    <Paper>
      <div className={styles.tabs}>
        <TabNavItem title="Guests" id="guests" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabNavItem title="Create guest" id="create" activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div
        style={{ height: "2px", width: "100%", backgroundColor: "black", borderRadius: "var(--border-radius-large)" }}
      ></div>
      <div className={styles.outlet}>
        <TabContent id="guests" activeTab={activeTab}>
          <GuestTableContainer />
        </TabContent>
        <TabContent id="create" activeTab={activeTab}>
          <CreateGuestPage />
        </TabContent>
      </div>
    </Paper>
  );
};
