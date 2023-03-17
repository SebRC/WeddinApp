import { FunctionComponent } from "react";
import { Flexbox } from "../flexbox/Flexbox";
import { Header } from "../text/Header";
import { TimeTableItem } from "./TimeTableItem";
import styles from "./TimeTable.module.css";

export interface TimeTableListItem {
  time: string;
  value: string;
  icon: string;
}

const timeTable: TimeTableListItem[] = [
  { time: "12:30", value: "Ceremoni", icon: "💍" },
  { time: "13:30", value: "Køretur", icon: "🚙" },
  { time: "14:30", value: "Ankomst", icon: "🎊" },
  { time: "15:00", value: "Velkomstdrinks", icon: "🥂" },
  { time: "16:30", value: "Gruppebillede", icon: "📸" },
  { time: "18:00", value: "Hovedret", icon: "🍔" },
  { time: "20:00", value: "Festen starter", icon: "🕺" },
  { time: "22:00", value: "Natmad", icon: "🌮" },
];

export const TimeTable: FunctionComponent = () => {
  return (
    <>
      <Header text="Tidsplan" />
      <Flexbox justifyContent="center" gap={50}>
        {timeTable.map((tti, index) => {
          return <TimeTableItem item={tti} key={`${tti.value}-${index}`} />;
        })}
      </Flexbox>
      <div className={styles.connector} />
    </>
  );
};
