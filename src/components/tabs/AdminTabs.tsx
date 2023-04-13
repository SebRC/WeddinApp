import { FunctionComponent, useState } from "react";
import { useTranslator } from "../../translations/useTranslator";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { Paper } from "../layout/paper/Paper";
import { GiftTableContainer } from "../table/gift/GiftTableContainer";
import { GuestTableContainer } from "../table/guest/GuestTableContainer";
import { TabContent } from "./TabContent";
import { Tabs } from "./Tabs";

interface AdminTabsProps {}

export const AdminTabs: FunctionComponent<AdminTabsProps> = () => {
  const [activeTab, setActiveTab] = useState("guests");

  const translator = useTranslator();
  return (
    <Flexbox flexDirection="column" gap={20}>
      <Paper minHeight="auto" padding="10px 20px 10px 20px">
        <Tabs
          tabItems={[
            { title: translator.guests(), id: "guests", activeTab: activeTab, setActiveTab: setActiveTab },
            { title: translator.gifts(), id: "gifts", activeTab: activeTab, setActiveTab: setActiveTab },
          ]}
        />
      </Paper>
      <TabContent id="guests" activeTab={activeTab}>
        <GuestTableContainer />
      </TabContent>
      <TabContent id="gifts" activeTab={activeTab}>
        <GiftTableContainer />
      </TabContent>
    </Flexbox>
  );
};
