import { FunctionComponent } from "react";
import { Paper } from "../layout/paper/Paper";
import { Title } from "../text/Title";
import { DateAndTime } from "./DateAndTime";
import { Location } from "./Location";

export const Info: FunctionComponent = () => {
  return (
    <Paper>
      <Title title="Info" subtitle="Her kan du finde nyttige information om den store dag." />
      <Location />
      <DateAndTime />
    </Paper>
  );
};
