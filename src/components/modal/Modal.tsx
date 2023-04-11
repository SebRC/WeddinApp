import { FunctionComponent, ReactNode } from "react";
import { useTranslator } from "../../translations/useTranslator";
import { Button } from "../button/Button";
import { Flexbox } from "../layout/flexbox/Flexbox";
import styles from "./Modal.module.css";

interface ModalProps {
  onConfirm: () => void;
  onCancel: () => void;
  loading?: boolean;
  children: ReactNode;
}

export const Modal: FunctionComponent<ModalProps> = ({ onConfirm, onCancel, loading = false, children }) => {
  const translator = useTranslator();
  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        {children}
        <Flexbox marginTop="20px" gap={20}>
          <Button onClick={onCancel} text={translator.cancel()} type="danger" loading={loading} />
          <Button onClick={onConfirm} text={translator.confirm()} loading={loading} />
        </Flexbox>
      </div>
    </div>
  );
};
