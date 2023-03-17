import { FunctionComponent } from "react";
import { Header } from "../text/Header";
import { TimeTable } from "./TimeTable";

export const DateAndTime: FunctionComponent = () => {
  return (
    <>
      <Header
        text="Hvornår"
        subHeader="Vi har valgt lørdag den 27. juli 2024 kl. 14:30 til at fejre vores kærlighed."
      />
      <TimeTable />
    </>
  );
};
