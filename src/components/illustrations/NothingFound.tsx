import { FunctionComponent } from "react";
import { useTranslator } from "../../translations/useTranslator";
import { Header } from "../text/Header";
import { IconNothingFound } from "./IconNothingFound";
import styles from "./Illustration.module.css";

export const NothingFound: FunctionComponent = () => {
  const translator = useTranslator();
  return (
    <div className={styles.container}>
      <IconNothingFound />
      <Header text={translator.nothingFound()} />
    </div>
  );
};
