import { FunctionComponent, useState } from "react";
import { useTranslator } from "../../translations/useTranslator";
import { Button } from "../button/Button";
import { Checkbox } from "../checkbox/Checkbox";
import { Input } from "../input/Input";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { Header } from "../text/Header";

export const CreateGuestPage: FunctionComponent = () => {
  const translator = useTranslator();
  const [mainGuestName, setMainGuestName] = useState("");
  const [plusOnes, setPlusOnes] = useState<string[]>([]);

  const handlePlusOneChange = (value: string, index: number) => {
    const newValues = plusOnes.map((po, i) => {
      if (i === index) {
        return value;
      }
      return po;
    });
    setPlusOnes(newValues);
  };

  const handlePlusOneRemove = (index: number) => {
    const newValues = plusOnes.filter((po, i) => {
      return i !== index;
    });
    setPlusOnes(newValues);
  };
  return (
    <Flexbox flexDirection="column" gap={20}>
      <Input
        required
        onChange={(e) => {
          setMainGuestName(e.target.value);
        }}
        value={mainGuestName}
        label={translator.guestName()}
        placeholder={translator.name()}
      />
      {/* <Checkbox label={translator.mainGuest()} id="main-guest-checkbox" onChange={() => {}} value={false} /> */}
      <Header text={translator.plusOnes()} subHeader={translator.plusOnesDescription()} />
      {plusOnes.map((po, index) => {
        return (
          <Flexbox gap={20}>
            <Input
              label={translator.plusX(`${index + 1}`)}
              value={po}
              onChange={(e) => handlePlusOneChange(e.target.value, index)}
            />
            <Button text="Delete" onClick={() => handlePlusOneRemove(index)} />
          </Flexbox>
        );
      })}
      <Button
        onClick={() => {
          setPlusOnes((prev) => [...prev, ""]);
        }}
        text="Add a plus one"
      />

      <Button onClick={() => {}} text="Create guest" />
    </Flexbox>
  );
};
