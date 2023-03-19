import { FunctionComponent } from "react";
import { Flexbox } from "../components/flexbox/Flexbox";
import { ResponsePage } from "../components/responsePage/ResponsePage";
import { Guest } from "./Guest";

interface GuestInfoProps {
  guest: Guest;
}

export const GuestInfo: FunctionComponent<GuestInfoProps> = ({ guest }) => {
  return (
    <Flexbox flexDirection="column" gap={20}>
      <ResponsePage guest={guest} />
      {guest.guests &&
        guest.guests.map((g, index) => {
          return <GuestInfo guest={g} key={`${g.name}-${index}`} />;
        })}
    </Flexbox>
  );
};
