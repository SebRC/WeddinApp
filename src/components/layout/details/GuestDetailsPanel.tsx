import { FunctionComponent } from "react";
import { useTranslator } from "../../../translations/useTranslator";
import { Button } from "../../button/Button";
import { Guest } from "../../guest/Guest";
import { Header } from "../../text/Header";
import { Flexbox } from "../flexbox/Flexbox";
import { DetailsPanel } from "./DetailsPanel";

interface GuestDetailsPanelProps {
  guest: Guest;
  onDelete: () => void;
}

export const GuestDetailsPanel: FunctionComponent<GuestDetailsPanelProps> = ({ guest, onDelete }) => {
  const translator = useTranslator();
  return (
    <DetailsPanel title={guest.name}>
      <Header text={translator.attending()} subHeader={guest.attending ? translator.yes() : translator.no()} />
      <Header text={translator.songWishes()} subHeader={guest.songWishes.join(", ")} />
      <Header text={translator.foodInfo()} subHeader={guest.foodInfo} />
      <Button text="delete" onClick={onDelete} />
    </DetailsPanel>
  );
};
