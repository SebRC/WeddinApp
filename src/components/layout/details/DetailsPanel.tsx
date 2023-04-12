import { FunctionComponent, ReactNode } from "react";
import { CloseButton } from "../../button/CloseButton";
import { Title } from "../../text/Title";
import { Flexbox } from "../flexbox/Flexbox";
import styles from "./DetailsPanel.module.css";

interface DetailsPanelProps {
  title: string;
  onClose: () => void;
  children: ReactNode;
}

export const DetailsPanel: FunctionComponent<DetailsPanelProps> = ({ title, onClose, children }) => {
  return (
    <div className={styles.panel}>
      <Flexbox flexDirection="column" gap={20} width="100%">
        <Flexbox justifyContent="space-between" alignItems="flex-start">
          <Title title={title} />
          <CloseButton onClick={onClose} />
        </Flexbox>
        {children}
      </Flexbox>
    </div>
  );
};
