import { FunctionComponent } from "react";
import { useTranslator } from "../../translations/useTranslator";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { Header } from "../text/Header";
import { TimeTableListItem } from "./TimeTable";
import styles from "./TimeTableItem.module.css";

interface TimeTableItemProps {
  item: TimeTableListItem;
}

export const TimeTableItem: FunctionComponent<TimeTableItemProps> = ({ item }) => {
  const translator = useTranslator();
  return (
    <Flexbox flexDirection="row">
      <div className={styles.pin} />
      <Flexbox flexDirection="row" width="100%" justifyContent="space-between" gap={20}>
        <Header text={translator.timeTableItem(item.time, item.value)} />
        <Header text={item.icon}></Header>
      </Flexbox>
    </Flexbox>
  );
};
