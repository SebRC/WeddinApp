import { FunctionComponent, ReactNode } from "react";
import { Button } from "../button/Button";
import { Flexbox } from "../layout/flexbox/Flexbox";
import styles from "./Modal.module.css";

interface ModalProps {
  onConfirm: () => void;
  onCancel: () => void;
  children: ReactNode;
}

export const Modal: FunctionComponent<ModalProps> = ({ onConfirm, onCancel, children }) => {
  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        {children}
        <Flexbox marginTop="20px" gap={20}>
          <Button onClick={onCancel} text="Cancel" type="danger" />
          <Button onClick={onConfirm} text="Confirm" />
        </Flexbox>
      </div>
    </div>
  );
};
