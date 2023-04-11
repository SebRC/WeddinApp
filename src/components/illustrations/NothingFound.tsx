import { FunctionComponent } from "react";
import { useTranslator } from "../../translations/useTranslator";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { Paper } from "../layout/paper/Paper";
import { IconNothingFound } from "./IconNothingFound";
import styles from "./Illustration.module.css";

export const NothingFound: FunctionComponent = () => {
  const translator = useTranslator();
  return (
    <div className={styles.container}>
      <IconNothingFound />
      {translator.nothingFound()}
    </div>
  );
};
