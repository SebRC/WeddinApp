import { FunctionComponent, useState } from "react";
import { KeyCodes } from "../../keycode/KeyCodes";
import { Flexbox } from "../layout/flexbox/Flexbox";
import styles from "./Select.module.css";
import { SelectOption } from "./SelectOption";

interface SelectProps {
  options: SelectOption[];
  value: SelectOption;
  onChange: (value: string) => void;
}

export const Select: FunctionComponent<SelectProps> = ({ options, value, onChange }) => {
  const [open, setOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(value);

  const handleOptionChange = (option: SelectOption) => {
    setSelectedOption(option);
    setOpen(false);
    onChange(option.value);
  };

  const handleSelectKeyUp = (key: string) => {
    if (key === KeyCodes.Enter) {
      setOpen(!open);
    }
  };

  const handleOptionKeyUp = (key: string, option: SelectOption) => {
    if (key === KeyCodes.Enter) {
      handleOptionChange(option);
    }
  };
  return (
    <>
      <div
        className={styles.select}
        onClick={() => setOpen(!open)}
        onKeyUp={(e) => handleSelectKeyUp(e.key)}
        role="menu"
        tabIndex={0}
      >
        <Flexbox gap={20}>
          {selectedOption.icon && selectedOption.icon}
          {selectedOption.option}
        </Flexbox>
      </div>
      {open && (
        <div className={styles.optionContainer}>
          {options.map((o, index) => {
            return (
              <div
                role="option"
                aria-selected={o.option === selectedOption.option}
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
