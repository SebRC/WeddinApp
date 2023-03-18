import React, { FunctionComponent } from "react";
import { Flexbox } from "../components/flexbox/Flexbox";
import { LoadingPage } from "../components/loading/LoadingPage";
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
          .map((g, index) => {
            return <ResponsePage guest={g} key={`${g.name}-${index}`} />;
          })
          .concat(<ResponsePage guest={guest} key={guest.name} />)
          .reverse()
      ) : (
        <ResponsePage guest={guest} />
      )}
    </Flexbox>
  );
};
