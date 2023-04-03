import { FunctionComponent } from "react";
import { useTranslator } from "../../translations/useTranslator";
import { Paper } from "../layout/paper/Paper";
import { Title } from "../text/Title";
import { DateAndTime } from "./DateAndTime";
import { Location } from "./Location";

export const Info: FunctionComponent = () => {
  const translator = useTranslator();
  return (
    <Paper gap={10}>
      <Title title={translator.info()} subtitle={translator.usefulInformationAboutTheBigDay()} />
      <Location />
      <DateAndTime />
    </Paper>
  );
};
