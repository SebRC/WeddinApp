import { FunctionComponent, useState } from "react";
import { useTranslator } from "../../translations/useTranslator";
import { Paper } from "../layout/paper/Paper";
import { GiftTableContainer } from "../table/gift/GiftTableContainer";
import { GuestTableContainer } from "../table/guest/GuestTableContainer";
import { TabContent } from "./TabContent";
import { TabNavItem } from "./TabNavItem";
import styles from "./Tabs.module.css";

interface AdminTabsProps {}

export const AdminTabs: FunctionComponent<AdminTabsProps> = () => {
  const [activeTab, setActiveTab] = useState("guests");

  const translator = useTranslator();
  return (
    <>
      <Paper minHeight="auto">
        <div className={styles.tabs}>
          <TabNavItem title={translator.guest()} id="guests" activeTab={activeTab} setActiveTab={setActiveTab} />
          <TabNavItem title={translator.admin()} id="gifts" activeTab={activeTab} setActiveTab={setActiveTab} />
        </div>
      </Paper>
      <div
        style={{ height: "2px", width: "100%", backgroundColor: "black", borderRadius: "var(--border-radius-large)" }}
      ></div>
      <TabContent id="guests" activeTab={activeTab}>
        <GuestTableContainer />
      </TabContent>
      <TabContent id="gifts" activeTab={activeTab}>
        <GiftTableContainer />
      </TabContent>
    </>
  );
};
