import { FunctionComponent, ReactNode } from "react";
import { useTranslator } from "../../translations/useTranslator";
import { Button } from "../button/Button";
import { CloseButton } from "../button/CloseButton";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { Separator } from "../layout/separator/Separator";
import { Title } from "../text/Title";
import styles from "./Modal.module.css";

interface ModalProps {
  onConfirm: () => void;
  onCancel: () => void;
  title: string;
  loading?: boolean;
  children: ReactNode;
}

export const Modal: FunctionComponent<ModalProps> = ({ onConfirm, onCancel, title, loading = false, children }) => {
  const translator = useTranslator();
  return (
    <div className={styles.background}>
      <div className={styles.modal}>
        <Flexbox
          justifyContent="space-between"
          alignItems="flex-start"
          marginTop="20px"
          marginRight="20px"
          marginBottom="20px"
          marginLeft="20px"
        >
          <Title title={title} />
          <CloseButton onClick={onCancel} />
        </Flexbox>
        <Separator noMargin />
        <Flexbox marginTop="20px" marginRight="20px" marginBottom="20px" marginLeft="20px">
          {children}
        </Flexbox>
        <Separator noMargin />
        <Flexbox gap={20} marginTop="20px" marginRight="20px" marginBottom="20px" marginLeft="20px">
          <Button onClick={onCancel} text={translator.cancel()} type="danger" loading={loading} />
          <Button onClick={onConfirm} text={translator.confirm()} loading={loading} />
        </Flexbox>
      </div>
    </div>
  );
};
