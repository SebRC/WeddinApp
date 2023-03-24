import { FunctionComponent, useCallback, useEffect, useReducer, useState } from "react";
import { Checkbox } from "../checkbox/Checkbox";
import { Flexbox } from "../layout/flexbox/Flexbox";
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
import { IconNode } from "../icons/IconNode";
import { useDebounce } from "../../hooks/debounce/useDebounce";

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

  const debouncedState = useDebounce(state, 1000);
  const [name, setName] = useState("");
  const [index, setIndex] = useState(1);
  const [expanded, setExpanded] = useState(true);
  const phrase = `Hej ${guest.name}`;

  const handleAttendingChange = () => {
    guest.attending = !guest.attending;
    dispatch({ type: ACTION_TYPE.COMING_CHANGED, payload: { attending: !attending } });
  };

  const handleWishChange = (wish: string, index: number) => {
    dispatch({ type: ACTION_TYPE.WISHES_CHANGED, payload: { wish: { value: wish, id: index } } });
  };

  const handleFoodInfoChange = (foodInfo: string) => {
    dispatch({ type: ACTION_TYPE.FOOD_INFO_CHANGED, payload: { foodInfo: foodInfo } });
  };

  const handleSongWishAdd = () => {
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
  }, [name, index, phrase]);

  const handleBannerClick = () => {
    if (!expanded) {
      setExpanded(true);
    }
  };

  const handleSongRemove = (wish: Wish) => {
    dispatch({ type: ACTION_TYPE.SONG_WISH_REMOVED, payload: { wish: wish } });
  };

  const updateState = async (state: ResponsePageState) => {
    const updatedGuest: Guest = {
      ...guest,
      attending: state.attending,
      foodInfo: state.foodInfo,
      songWishes: state.songWishes.map((sw) => sw.value),
    };
    await setGuestData(updatedGuest);
  };

  useEffect(() => {
    if (debouncedState) {
      updateState(state);
    }
  }, [debouncedState]);

  const { attending, songWishes } = state;
  return (
    <div className={styles.container + ` ${!expanded ? styles.collapsed : ""}`} onClick={handleBannerClick}>
      <button className={styles.closeCardButton} onClick={() => setExpanded(!expanded)}>
        <h1>{expanded ? "-" : "+"}</h1>
      </button>
      {expanded ? (
        <Flexbox flexDirection="column" alignItems="flex-start" height="100%" gap={10}>
          <Title title={name} />
          <Checkbox
            label="Kommer du til vores bryllup?"
            id={`${guest.name}-${attending}`}
            checked={attending}
            onChange={handleAttendingChange}
          />
          <Header
            text="Sang ønsker"
            subHeader="🎶 Skriv dine sang ønsker her hvis du har nogle, så laver vi en playliste med alles ønsker til brylluppet 🎶"
          />
          <Flexbox
            maxHeight="350px"
            minHeight="100px"
            width="100%"
            flexDirection="column"
            gap={20}
            overflow="scroll"
            justifyContent="normal"
            alignItems="normal"
            paddingBottom="10px"
            paddingRight="10px"
          >
            {songWishes.map((sw, index) => {
              return (
                <SongWishInput
                  wish={sw}
                  id={`${guest.name}-wish-${index}`}
                  key={`${guest.name}-wish-${index}`}
                  label={`Ønske ${index + 1}`}
                  onChange={handleWishChange}
                  onSongRemove={() => handleSongRemove(sw)}
                />
              );
            })}
            <Button
              icon={<IconNode fill="black" />}
              onClick={handleSongWishAdd}
              minWidth="3rem"
              alignSelf="flex-end"
              minHeight="3rem"
            />
          </Flexbox>
          <FoodInfoInput value={state.foodInfo} id={`${guest.name}-food-info`} onChange={handleFoodInfoChange} />
        </Flexbox>
      ) : (
        <Title title={guest.name}></Title>
      )}
    </div>
  );
};
