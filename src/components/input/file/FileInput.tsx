import { FunctionComponent, useState } from "react";
import { Flexbox } from "../../layout/flexbox/Flexbox";
import styles from "./FileInput.module.css";
export const FileInput: FunctionComponent = () => {
  const [file, setFile] = useState("");

  return (
    <Flexbox>
      <div className={styles.fileText}>{file ? file : "No file chosen"}</div>
      <div className={styles.container}>
        <input
          id="file"
          type="file"
          accept="image/*"
          className={styles.file}
          onChange={(e) => {
            setFile(e.target.value);
          }}
        />
        <label htmlFor="file" className={styles.label}>
          Select file
        </label>
      </div>
    </Flexbox>
  );
};
