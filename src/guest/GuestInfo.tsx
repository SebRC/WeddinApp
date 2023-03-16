import React, { FunctionComponent } from "react";
import { Flexbox } from "../components/flexbox/Flexbox";
import { ResponsePage } from "../components/responsePage/ResponsePage";
import { Guest } from "./Guest";

interface GuestInfoProps {
  guest: Guest;
}

export const GuestInfo: FunctionComponent<GuestInfoProps> = ({ guest }) => {
  return (
    <Flexbox flexDirection="column" gap={20}>
      {guest.guests ? (
        guest.guests
          .map((g) => {
            return <ResponsePage guest={g} />;
          })
          .concat(<ResponsePage guest={guest} />)
          .reverse()
      ) : (
        <ResponsePage guest={guest} />
      )}
    </Flexbox>
  );
};
