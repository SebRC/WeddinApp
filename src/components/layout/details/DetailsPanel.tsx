import { FunctionComponent, ReactNode } from "react";
import { Title } from "../../text/Title";
import { Flexbox } from "../flexbox/Flexbox";
import styles from "./DetailsPanel.module.css";

interface DetailsPanelProps {
  title: string;
  children: ReactNode;
}

export const DetailsPanel: FunctionComponent<DetailsPanelProps> = ({ title, children }) => {
  return (
    <div className={styles.panel}>
      <Flexbox flexDirection="column" gap={20}>
        <Title title={title} />
        {children}
      </Flexbox>
    </div>
  );
};
