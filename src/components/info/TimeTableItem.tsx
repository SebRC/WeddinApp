import { FunctionComponent } from "react";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { Header } from "../text/Header";
import { TimeTableListItem } from "./TimeTable";
import styles from "./TimeTableItem.module.css";

interface TimeTableItemProps {
  item: TimeTableListItem;
}

export const TimeTableItem: FunctionComponent<TimeTableItemProps> = ({ item }) => {
  return (
    <Flexbox flexDirection="column" alignItems="flex-start" justifyContent="center">
      <div style={{ alignSelf: "center" }}>
        <Header text={item.icon} />
      </div>
      <div style={{ alignSelf: "center" }}>
        <Header text={item.time} />
      </div>
      <div className={styles.pin} />
    </Flexbox>
  );
};
