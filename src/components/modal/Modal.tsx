import { FunctionComponent, ReactNode } from "react";
import { Button } from "../button/Button";
import styles from "./Modal.module.css";

interface ModalProps {
  onRequestClose: () => void;
  children: ReactNode;
}

export const Modal: FunctionComponent<ModalProps> = ({ onRequestClose, children }) => {
  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        {children}
        <Button onClick={onRequestClose} text="Hide modal" />
      </div>
    </div>
  );
};
