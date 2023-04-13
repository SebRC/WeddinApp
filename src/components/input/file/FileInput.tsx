import { ChangeEvent, ChangeEventHandler, FunctionComponent, useState } from "react";
import { createGift } from "../../../firebase/firebase";
import { useTranslator } from "../../../translations/useTranslator";
import { Button } from "../../button/Button";
import { IconUpload } from "../../icons/IconUpload";
import { Flexbox } from "../../layout/flexbox/Flexbox";
import { Header } from "../../text/Header";
import styles from "./FileInput.module.css";
interface FileInputProps {
  accept: "image/*" | "audio/*" | "video/*";
  label?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const FileInput: FunctionComponent<FileInputProps> = ({ accept, label, onChange }) => {
  const [file, setFile] = useState<File>();
  const [percentage, setPercentage] = useState(0);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      onChange(e);
    }
  };

  const handleProgress = (progress: number) => {
    setPercentage(progress);
  };

  const handleUpload = () => {
    if (file) {
      createGift(file, handleProgress);
    }
  };

  const translator = useTranslator();

  return (
    <Flexbox flexDirection="column">
      {label && <label className={styles.label}>{label}</label>}
      <Flexbox>
        <div className={styles.fileText}>{file ? file.name : translator.noFileChosen()}</div>
        <div className={styles.container}>
          <input id="file" type="file" accept={accept} className={styles.file} onChange={handleChange} />
          <label htmlFor="file" className={styles.button}>
            {translator.selectFile()}
            <IconUpload fill="black" />
          </label>
        </div>
      </Flexbox>
      <Header text={`Progress: ${percentage}%`} />
      <Button onClick={handleUpload} text="start upload" />
    </Flexbox>
  );
};
