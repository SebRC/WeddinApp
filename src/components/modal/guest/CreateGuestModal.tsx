import { FunctionComponent, useState } from "react";
import { createUser, createGuest } from "../../../firebase/firebase";
import { useTranslator } from "../../../translations/useTranslator";
import { Button } from "../../button/Button";
import { IconTrash } from "../../icons/IconTrash";
import { Input } from "../../input/Input";
import { Flexbox } from "../../layout/flexbox/Flexbox";
import { Header } from "../../text/Header";
import { Modal } from "../Modal";

interface CreateGuestModalProps {
  onCancel: () => void;
}

interface PlusOne {
  value: string;
  id: number;
}

export const CreateGuestModal: FunctionComponent<CreateGuestModalProps> = ({ onCancel }) => {
  const translator = useTranslator();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [plusOnes, setPlusOnes] = useState<PlusOne[]>([]);
  const [nameError, setNameError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePlusOneChange = (plusOne: PlusOne) => {
    const newValues = plusOnes.map((po) => {
      if (po.id === plusOne.id) {
        return { value: plusOne.value, id: po.id };
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
    if (
      email &&
      password &&
      name &&
      plusOnes.every((po) => {
        return po.value.length > 0;
      })
    ) {
      const result = await createUser(email, password);
      if (!result.success) {
        if (result.errorCode === "auth/invalid-password") {
          setPasswordError(translator.invalidPassword());
        }
        if (result.errorCode === "auth/email-already-exists") {
          setEmailError(translator.emailAlreadyExists());
        }
        if (result.errorCode === "auth/invalid-email") {
          setEmailError(translator.invalidEmail());
        }
      }

      if (result.userId) {
        await createGuest({ name: name, id: result.userId, guestNames: plusOnes.map((po) => po.value) });
        onCancel();
      }
    } else {
      const emptyFieldErrorMessafe = translator.thisFieldIsRequired();

      setNameError(name ? "" : emptyFieldErrorMessafe);
      setEmailError(email ? "" : emptyFieldErrorMessafe);
      setPasswordError(password ? "" : emptyFieldErrorMessafe);
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
    <Modal
      onConfirm={async () => await handleCreateGuest()}
      onCancel={onCancel}
      loading={loading}
      title={translator.createGuest()}
    >
      <Flexbox flexDirection="column" gap={20} width="100%">
        <Input
          required
          onChange={(e) => {
            setName(e.target.value);
          }}
          value={name}
          label={translator.name()}
          placeholder={translator.name()}
          error={nameError}
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
            <Flexbox gap={20} key={`${po}-${index}`}>
              <Input
                required
                label={translator.plusX(`${index + 1}`)}
                value={po.value}
                onChange={(e) => handlePlusOneChange({ value: e.target.value, id: po.id })}
              />
              <Button
                width="3rem"
                icon={<IconTrash fill="black" />}
                onClick={() => handlePlusOneRemove(index)}
                height="3rem"
                loading={loading}
                alignSelf={po.value.length === 0 ? "center" : "flex-end"}
              />
            </Flexbox>
          );
        })}
        <Button
          onClick={() => {
            setPlusOnes((prev) => [...prev, { value: "", id: plusOnes.length + 1 }]);
          }}
          text={translator.addAPlusOne()}
          loading={loading}
        />
      </Flexbox>
    </Modal>
  );
};
