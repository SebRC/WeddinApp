import { ChangeEvent, ChangeEventHandler, FunctionComponent, useState } from "react";
import { useTranslator } from "../../../translations/useTranslator";
import { IconUpload } from "../../icons/IconUpload";
import { Flexbox } from "../../layout/flexbox/Flexbox";
import styles from "./FileInput.module.css";
import inputStyles from "../Input.module.css";

interface FileInputProps {
  accept: "image/*" | "audio/*" | "video/*";
  label?: string;
  error?: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

export const FileInput: FunctionComponent<FileInputProps> = ({ accept, label, error, onChange }) => {
  const [file, setFile] = useState<File>();

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
      onChange(e);
    }
  };

  const translator = useTranslator();

  return (
    <Flexbox flexDirection="column">
      {label && <label className={styles.label}>{label}</label>}
      <Flexbox>
        <form className={styles.button}>
          <label htmlFor="file" className={styles.fileText}>
            {file ? file.name : translator.noFileChosen()}
          </label>
          <div className={styles.container}>
            <input id="file" type="file" accept={accept} className={styles.file} onChange={handleChange} />
            <label htmlFor="file" className={styles.buttonLabel}>
              {translator.selectFile()}
              <IconUpload fill="black" />
            </label>
          </div>
        </form>
      </Flexbox>
      {error && <p className={inputStyles.errorParagraph}>{error}</p>}
    </Flexbox>
  );
};
