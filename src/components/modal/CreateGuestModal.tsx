import { FunctionComponent, useState } from "react";
import { createUser, createGuest } from "../../firebase/firebase";
import { useTranslator } from "../../translations/useTranslator";
import { Button } from "../button/Button";
import { Input } from "../input/Input";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { Header } from "../text/Header";
import { Modal } from "./Modal";

interface CreateGuestModalProps {
  onCancel: () => void;
}

export const CreateGuestModal: FunctionComponent<CreateGuestModalProps> = ({ onCancel }) => {
  const translator = useTranslator();
  const [mainGuestName, setMainGuestName] = useState("Charlotte Christiansen");
  const [email, setEmail] = useState("charlotte@ahosrcwedding.com");
  const [password, setPassword] = useState("Charlotte");
  const [plusOnes, setPlusOnes] = useState<string[]>([]);
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

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
    setLoading(true);
    if (email && password) {
      const result = await createUser(email, password);
      if (!result.success) {
        console.log(result.errorCode);
        if (result.errorCode === "auth/invalid-password") {
          setPasswordError(translator.invalidPassword());
          setEmailError("");
        }
        if (result.errorCode === "auth/email-already-exists") {
          setEmailError(translator.emailAlreadyExists());
          setPasswordError("");
        }
        if (result.errorCode === "auth/invalid-email") {
          setEmailError(translator.invalidEmail());
          setPasswordError("");
        }
      }

      if (result.userId) {
        await createGuest({ name: mainGuestName, id: result.userId, guestNames: plusOnes });
        onCancel();
      }
    }
    setLoading(false);
  };

  const handleEmailChange = (value: string) => {
    setEmail(value);
    setEmailError("");
  };

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setPasswordError("");
  };

  return (
    <Modal onConfirm={async () => await handleCreateGuest()} onCancel={onCancel} loading={loading}>
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
        <Header text={translator.emailAndPassword()} subHeader={translator.emailAndPasswordDescription()} />
        <Input
          required
          onChange={(e) => {
            handleEmailChange(e.target.value);
          }}
          value={email}
          label={translator.email()}
          placeholder={translator.email()}
          type="email"
          error={emailError}
        />
        <Input
          required
          onChange={(e) => {
            handlePasswordChange(e.target.value);
          }}
          value={password}
          label={translator.password()}
          placeholder={translator.password()}
          type="password"
          error={passwordError}
        />
        <Header text={translator.plusOnes()} subHeader={translator.plusOnesDescription()} />
        {plusOnes.map((po, index) => {
          return (
            <Flexbox gap={20}>
              <Input
                label={translator.plusX(`${index + 1}`)}
                value={po}
                onChange={(e) => handlePlusOneChange(e.target.value, index)}
              />
              <Button
                text={translator.delete()}
                onClick={() => handlePlusOneRemove(index)}
                alignSelf="flex-end"
                height="3rem"
                loading={loading}
              />
            </Flexbox>
          );
        })}
        <Button
          onClick={() => {
            setPlusOnes((prev) => [...prev, ""]);
          }}
          text={translator.addAPlusOne()}
          loading={loading}
        />
      </Flexbox>
    </Modal>
  );
};
