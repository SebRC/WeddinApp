import { FunctionComponent, useEffect, useReducer, useState } from "react";
import { Checkbox } from "../checkbox/Checkbox";
import { Flexbox } from "../flexbox/Flexbox";
import { ACTION_TYPE } from "./responsePageActionTypes";
import { responsePageReducer, ResponsePageState, Wish } from "./responsePageReducer";
import { SongWishInput } from "../input/SongWishInput";
import styles from "./ResponsePage.module.css";
import { Guest } from "../../guest/Guest";
import { Title } from "../text/Title";
import { Header } from "../text/Header";
import { FoodInfoInput } from "../input/FoodInfoInput";
import { setGuestData } from "../../firebase/firebase";
import { Button } from "../button/Button";

interface ResponsePageProps {
  guest: Guest;
}

export const ResponsePage: FunctionComponent<ResponsePageProps> = ({ guest }) => {
  const [state, dispatch] = useReducer(responsePageReducer, {
    attending: guest.attending,
    songWishes: guest.songWishes.map((sw, index) => {
      return { value: sw, id: index };
    }),
    foodInfo: guest.foodInfo ?? "",
  });
  const [name, setName] = useState("");
  const [index, setIndex] = useState(1);
  const [expanded, setExpanded] = useState(true);
  const [editing, setEditing] = useState(false);
  const phrase = `Hello ${guest.name}`;

  const handleAttendingChange = () => {
    setEditing(true);
    guest.attending = !guest.attending;
    dispatch({ type: ACTION_TYPE.COMING_CHANGED, payload: { attending: !attending } });
  };

  const handleWishChange = (wish: string, index: number) => {
    setEditing(true);
    dispatch({ type: ACTION_TYPE.WISHES_CHANGED, payload: { wish: { value: wish, id: index } } });
  };

  const handleFoodInfoChange = (foodInfo: string) => {
    setEditing(true);
    dispatch({ type: ACTION_TYPE.FOOD_INFO_CHANGED, payload: { foodInfo: foodInfo } });
  };

  const handleSongWishAdd = () => {
    setEditing(true);
    const newIndex = state.songWishes.length;
    dispatch({ type: ACTION_TYPE.SONG_WISH_ADDED, payload: { wish: { value: "", id: newIndex } } });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (index <= phrase.length) {
        setName(phrase.slice(0, index));
        setIndex((i) => i + 1);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [name]);

  const handleBannerClick = () => {
    if (!expanded) {
      setExpanded(true);
    }
  };

  const handleSongRemove = (wish: Wish) => {
    setEditing(true);
    dispatch({ type: ACTION_TYPE.SONG_WISH_REMOVED, payload: { wish: wish } });
  };

  const updateState = async (state: ResponsePageState) => {
    setEditing(false);
    const updatedGuest: Guest = {
      ...guest,
      attending: state.attending,
      foodInfo: state.foodInfo,
      songWishes: state.songWishes.map((sw) => sw.value),
    };
    await setGuestData(updatedGuest);
  };

  const { attending: attending, songWishes: wishes } = state;
  return (
    <div className={styles.container + ` ${!expanded ? styles.collapsed : ""}`} onClick={handleBannerClick}>
      <button className={styles.closeCardButton} onClick={() => setExpanded(!expanded)}>
        <h1>{expanded ? "-" : "+"}</h1>
      </button>
      {expanded ? (
        <Flexbox flexDirection="column" alignItems="flex-start" height="100%" gap={10}>
          <Title title={name} />
          <Checkbox
            label="Are you coming to our wedding?"
            id={`${guest.name}-${attending}`}
            checked={attending}
            onChange={handleAttendingChange}
          />
          <Header
            text="Song wishes"
            subHeader="🎶 If you have any song wishes, please put them here. We'll make a playlist for the wedding with everyones
          suggestions 🎶"
          />
          <Flexbox
            height="350px"
            width="100%"
            flexDirection="column"
            gap={20}
            overflow="scroll"
            justifyContent="normal"
            alignItems="normal"
            paddingBottom="10px"
            paddingRight="10px"
          >
            {state.songWishes.map((sw, index) => {
              return (
                <SongWishInput
                  wish={sw}
                  id={`${guest.name}-wish-${index}`}
                  key={`${guest.name}-wish-${index}`}
                  label={`Wish ${index + 1}`}
                  onChange={handleWishChange}
                  onSongRemove={() => handleSongRemove(sw)}
                />
              );
            })}
            <Button text="+" onClick={handleSongWishAdd} width="3rem" alignSelf="flex-end" height="3rem" />
          </Flexbox>
          <FoodInfoInput value={state.foodInfo} id={`${guest.name}-food-info`} onChange={handleFoodInfoChange} />
          <Button text="Update state" disabled={!editing} onClick={async () => await updateState(state)} width="100%" />
        </Flexbox>
      ) : (
        <Title title={guest.name}></Title>
      )}
    </div>
  );
};
