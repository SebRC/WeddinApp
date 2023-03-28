import { FunctionComponent } from "react";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { LoadingPage } from "../loading/LoadingPage";
import { ResponsePage } from "../responsePage/ResponsePage";
import { Guest } from "./Guest";

interface GuestInfoProps {
  guest: Guest;
  loading?: boolean;
}

export const GuestInfo: FunctionComponent<GuestInfoProps> = ({ guest, loading }) => {
  return loading ? (
    <LoadingPage />
  ) : (
    <Flexbox flexDirection="column" gap={20} width="100%">
      <ResponsePage guest={guest} />
      {guest.guests &&
        guest.guests.map((g, index) => {
          return <GuestInfo guest={g} key={`${g.name}-${index}`} />;
        })}
    </Flexbox>
  );
};
