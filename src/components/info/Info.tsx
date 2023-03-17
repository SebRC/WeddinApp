import { FunctionComponent } from "react";
import { Title } from "../text/Title";
import { DateAndTime } from "./DateAndTime";
import styles from "./Info.module.css";
import { Location } from "./Location";

export const Info: FunctionComponent = () => {
  return (
    <div className={styles.container}>
      <Title title="Info" subtitle="Her kan du finde nyttige information om den store dag." />
      <Location />
      <DateAndTime />
    </div>
  );
};
