import { FunctionComponent, ReactNode } from "react";
import { useTranslator } from "../../translations/useTranslator";
import { Button } from "../button/Button";
import { Flexbox } from "../layout/flexbox/Flexbox";
import styles from "./Modal.module.css";

interface ModalProps {
  onConfirm: () => void;
  onCancel: () => void;
  children: ReactNode;
}

export const Modal: FunctionComponent<ModalProps> = ({ onConfirm, onCancel, children }) => {
  const translator = useTranslator();
  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        {children}
        <Flexbox marginTop="20px" gap={20}>
          <Button onClick={onCancel} text={translator.cancel()} type="danger" />
          <Button onClick={onConfirm} text={translator.confirm()} />
        </Flexbox>
      </div>
    </div>
  );
};
