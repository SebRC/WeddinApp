import { FunctionComponent, useEffect, useState } from "react";
import { KeyCode } from "../../keycode/KeyCode";
import { Flexbox } from "../layout/flexbox/Flexbox";
import styles from "./Select.module.css";
import { SelectOption } from "./SelectOption";

interface SelectProps {
  options: SelectOption[];
  value: SelectOption;
  width?: string;
  onChange: (value: string) => void;
}

export const Select: FunctionComponent<SelectProps> = ({ options, value, width = "auto", onChange }) => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);

  const handleOptionChange = (option: SelectOption) => {
    onChange(option.value);
    setSelectedOption(option);
    setOpen(false);
  };

  const handleSelectKeyUp = (key: string) => {
    if (key === KeyCode.Enter) {
      setOpen(!open);
    }
  };

  const handleOptionKeyUp = (key: string, option: SelectOption) => {
    if (key === KeyCode.Enter) {
      handleOptionChange(option);
    }
  };

  useEffect(() => {
    setSelectedOption(options.find((o) => o.value === selectedOption.value) ?? options[0]);
  }, [options, selectedOption.value]);

  return (
    <>
      <div
        className={styles.select}
        onClick={() => setOpen(!open)}
        onKeyUp={(e) => handleSelectKeyUp(e.key)}
        role="menu"
        tabIndex={0}
        style={{ width: width }}
      >
        <Flexbox gap={20}>
          {selectedOption.icon && selectedOption.icon}
          {selectedOption.option}
        </Flexbox>
      </div>
      {open && (
        <div className={styles.optionContainer} style={{ width: width }}>
          {options.map((o, index) => {
            return (
              <div
                role="option"
                aria-selected={o.value === selectedOption.value}
                onClick={() => handleOptionChange(o)}
                onKeyUp={(e) => handleOptionKeyUp(e.key, o)}
                tabIndex={0}
                className={styles.optionWrapper}
              >
                <Flexbox gap={20} width="100%" key={`${o.option}-${index}`}>
                  {o.icon && o.icon}
                  {o.option}
                </Flexbox>
                {index < options.length - 1 && <div className={styles.separator} />}
              </div>
            );
          })}
        </div>
      )}
    </>
  );
};
