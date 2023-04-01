import { FunctionComponent } from "react";
import { useTranslator } from "../../translations/useTranslator";
import { Header } from "../text/Header";
import { TimeTable } from "./TimeTable";

export const DateAndTime: FunctionComponent = () => {
  const translator = useTranslator();
  return (
    <>
      <Header text={translator.when()} subHeader={translator.weddingDateDescription()} />
      <TimeTable />
    </>
  );
};
