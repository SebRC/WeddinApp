import { FunctionComponent, useState } from "react";
import { createGuest, createUser } from "../../firebase/firebase";
import { useTranslator } from "../../translations/useTranslator";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { Header } from "../text/Header";

export const CreateGuestPage: FunctionComponent = () => {
  const translator = useTranslator();
  const [mainGuestName, setMainGuestName] = useState("Charlotte Christiansen");
  const [email, setEmail] = useState("charlotte@ahosrcwedding.com");
  const [password, setPassword] = useState("Charlotte");
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

  const handleCreateGuest = async () => {
    if (email && password) {
      const result = await createUser(email, password);
      if (result.userId) {
        await createGuest({ name: mainGuestName, id: result.userId, guestNames: plusOnes });
      }
    }
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
      <Header text={"Email og kodeord"} subHeader="Hvilken email og kodeord skal brugeren have" />
      <Input
        required
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
        label={translator.email()}
        placeholder={translator.email()}
      />
      <Input
        required
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        value={password}
        label={translator.password()}
        placeholder={translator.password()}
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

      <Button onClick={async () => await handleCreateGuest()} text="Create guest" />
    </Flexbox>
  );
};
