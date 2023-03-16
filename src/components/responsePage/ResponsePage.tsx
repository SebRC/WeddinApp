import React, { FunctionComponent, useReducer } from "react";
import { Checkbox } from "../checkbox/Checkbox";
import { Flexbox } from "../flexbox/Flexbox";
import { ACTION_TYPE } from "./responsePageActionTypes";
import { INITIAL_STATE, responsePageReducer } from "./responsePageReducer";
import { SongWishInput } from "../songWishInput/SongWishInput";
import styles from "./ResponsePage.module.css";
import { Guest } from "../../user/Guest";

interface ResponsePageProps {
  guest: Guest;
}

export const ResponsePage: FunctionComponent<ResponsePageProps> = ({ guest }) => {
  const [state, dispatch] = useReducer(responsePageReducer, INITIAL_STATE);

  const handleWishChange = (wish: string, index: number) => {
    dispatch({ type: ACTION_TYPE.WISHES_CHANGED, payload: { wish: { value: wish, id: index } } });
  };

  console.table(state.wishes);
  const { coming, wishes } = state;
  const [wish1, wish2, wish3] = wishes;
  return (
    <div className={styles.container}>
      <Flexbox flexDirection="column" alignItems="flex-start" height="100%" gap={10}>
        <h1>Hello {guest.name}</h1>
        <Checkbox
          label="Are you coming to our wedding?"
          id="coming"
          checked={state.coming}
          onChange={() => dispatch({ type: ACTION_TYPE.COMING_CHANGED, payload: { coming: !coming } })}
        />
        <h2>Song wishes</h2>
        <h3>
          🎶 If you have any song wishes, please put them here. We'll make a playlist for the wedding with everyones
          suggestions 🎶
        </h3>
        <SongWishInput wish={wish1} id="wish1" label="Wish 1" onChange={handleWishChange} />
        <SongWishInput wish={wish2} id="wish2" label="Wish 2" onChange={handleWishChange} />
        <SongWishInput wish={wish3} id="wish3" label="Wish 3" onChange={handleWishChange} />
      </Flexbox>
    </div>
  );
};
