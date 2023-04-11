import { FunctionComponent, useState } from "react";
import { useTranslator } from "../../translations/useTranslator";
import { AdminPage } from "../admin/AdminPage";
import { Paper } from "../layout/paper/Paper";
import { GuestTableContainer } from "../table/guest/GuestTableContainer";
import { TabContent } from "./TabContent";
import { TabNavItem } from "./TabNavItem";
import styles from "./Tabs.module.css";

interface TabExampleProps {}

export const TabExample: FunctionComponent<TabExampleProps> = () => {
  const [activeTab, setActiveTab] = useState("guests");

  const translator = useTranslator();
  return (
    <Paper>
      <div className={styles.tabs}>
        <TabNavItem title={translator.guest()} id="guests" activeTab={activeTab} setActiveTab={setActiveTab} />
        <TabNavItem title={translator.admin()} id="admin" activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>
      <div
        style={{ height: "2px", width: "100%", backgroundColor: "black", borderRadius: "var(--border-radius-large)" }}
      ></div>
      <div className={styles.outlet}>
        <TabContent id="guests" activeTab={activeTab}>
          <GuestTableContainer />
        </TabContent>
        <TabContent id="admin" activeTab={activeTab}>
          <AdminPage />
        </TabContent>
      </div>
    </Paper>
  );
};
