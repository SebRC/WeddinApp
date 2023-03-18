import { FunctionComponent, useEffect, useReducer, useState } from "react";
import { Checkbox } from "../checkbox/Checkbox";
import { Flexbox } from "../flexbox/Flexbox";
import { ACTION_TYPE } from "./responsePageActionTypes";
import { responsePageReducer } from "./responsePageReducer";
import { SongWishInput } from "../input/SongWishInput";
import styles from "./ResponsePage.module.css";
import { Guest } from "../../guest/Guest";
import { Title } from "../text/Title";
import { Header } from "../text/Header";
import { FoodInfoInput } from "../input/FoodInfoInput";

interface ResponsePageProps {
  guest: Guest;
}

export const ResponsePage: FunctionComponent<ResponsePageProps> = ({ guest }) => {
  const [state, dispatch] = useReducer(responsePageReducer, {
    coming: guest.attending,
    wishes: [
      { value: guest.songWishes[0], id: 0 },
      { value: guest.songWishes[1], id: 1 },
      { value: guest.songWishes[2], id: 2 },
    ],
    foodInfo: guest.foodInfo ?? "",
  });
  const [name, setName] = useState("");
  const [index, setIndex] = useState(1);
  const [expanded, setExpanded] = useState(true);
  const phrase = `Hello ${guest.name}`;

  const handleAttendingChange = () => {
    guest.attending = !guest.attending;
    dispatch({ type: ACTION_TYPE.COMING_CHANGED, payload: { coming: !coming } });
  };

  const handleWishChange = (wish: string, index: number) => {
    dispatch({ type: ACTION_TYPE.WISHES_CHANGED, payload: { wish: { value: wish, id: index } } });
  };

  const handleFoodInfoChange = (foodInfo: string) => {
    dispatch({ type: ACTION_TYPE.FOOD_INFO_CHANGED, payload: { foodInfo: foodInfo } });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (index <= phrase.length) {
        const sliced = phrase.slice(0, index);
        setName(phrase.slice(0, index));
        setIndex((i) => i + 1);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [name]);

  const handleClick = () => {
    if (!expanded) {
      setExpanded(true);
    }
  };

  const { coming, wishes } = state;
  const [wish1, wish2, wish3] = wishes;
  return (
    <div className={styles.container + ` ${!expanded ? styles.collapsed : ""}`} onClick={handleClick}>
      <button className={styles.closeCardButton} onClick={() => setExpanded(!expanded)}>
        <h1>{expanded ? "-" : "+"}</h1>
      </button>
      {expanded ? (
        <Flexbox flexDirection="column" alignItems="flex-start" height="100%" gap={10}>
          <Title title={name} />
          <Checkbox
            label="Are you coming to our wedding?"
            id={`${guest.name}-coming`}
            checked={state.coming}
            onChange={handleAttendingChange}
          />
          <Header
            text="Song wishes"
            subHeader="🎶 If you have any song wishes, please put them here. We'll make a playlist for the wedding with everyones
          suggestions 🎶"
          />
          <SongWishInput wish={wish1} id={`${guest.name}-wish1`} label="Wish 1" onChange={handleWishChange} />
          <SongWishInput wish={wish2} id={`${guest.name}-wish2`} label="Wish 2" onChange={handleWishChange} />
          <SongWishInput wish={wish3} id={`${guest.name}-wish3`} label="Wish 3" onChange={handleWishChange} />
          <FoodInfoInput value={state.foodInfo} id={`${guest.name}-food-info`} onChange={handleFoodInfoChange} />
        </Flexbox>
      ) : (
        <Title title={guest.name}></Title>
      )}
    </div>
  );
};
