import { FunctionComponent, useState } from "react";
import { createGift } from "../../../firebase/firebase";
import { useTranslator } from "../../../translations/useTranslator";
import { Button } from "../../button/Button";
import { IconUpload } from "../../icons/IconUpload";
import { Flexbox } from "../../layout/flexbox/Flexbox";
import { Header } from "../../text/Header";
import styles from "./FileInput.module.css";
export const FileInput: FunctionComponent = () => {
  const [file, setFile] = useState<File>();
  const [percentage, setPercentage] = useState(0);

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
    <>
      <Flexbox>
        <div className={styles.fileText}>{file ? file.name : translator.noFileChosen()}</div>
        <div className={styles.container}>
          <input
            id="file"
            type="file"
            accept="image/*"
            className={styles.file}
            onChange={(e) => {
              if (e.target.files) {
                setFile(e.target.files[0]);
              }
            }}
          />
          <label htmlFor="file" className={styles.label}>
            {translator.selectFile()}
            <IconUpload fill="black" />
          </label>
        </div>
      </Flexbox>
      <Header text={`Progress: ${percentage}%`} />
      <Button onClick={handleUpload} text="start upload" />
    </>
  );
};
