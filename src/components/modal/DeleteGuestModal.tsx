import { FunctionComponent, useState } from "react";
import { createUser, createGuest } from "../../firebase/firebase";
import { useTranslator } from "../../translations/useTranslator";
import { Button } from "../button/Button";
import { Guest } from "../guest/Guest";
import { Input } from "../input/Input";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { Header } from "../text/Header";
import { Title } from "../text/Title";
import { Modal } from "./Modal";

interface DeleteGuestModalProps {
  guest: Guest;
  onCancel: () => void;
}

export const DeleteGuestModal: FunctionComponent<DeleteGuestModalProps> = ({ guest, onCancel }) => {
  const translator = useTranslator();

  const handleDeleteGuest = async () => {};

  console.log("Guest plus ones delete", guest.guests);

  const getPlusOnes = () => {
    return guest.guestIds ? (
      guest.guestIds?.map((g) => {
        return <div>{`• ${g.charAt(0).toUpperCase()}${g.slice(1)}`}</div>;
      })
    ) : (
      <p></p>
    );
  };

  return (
    <Modal onConfirm={async () => await handleDeleteGuest()} onCancel={onCancel}>
      <Flexbox flexDirection="column" gap={20}>
        you are about to delete the following guest and their plus ones. Are yuo sure you want to continue?
        <Title title={guest.name} />
        {guest.guestIds && (
          <Flexbox flexDirection="column" gap={10}>
            <Header text={translator.plusOnes()} />
            {getPlusOnes()}
          </Flexbox>
        )}
      </Flexbox>
    </Modal>
  );
};
