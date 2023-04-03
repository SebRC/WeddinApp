import { FunctionComponent, useCallback, useEffect, useReducer, useState } from "react";
import { Checkbox } from "../checkbox/Checkbox";
import { Flexbox } from "../layout/flexbox/Flexbox";
import { ACTION_TYPE } from "./responsePageActionTypes";
import { responsePageReducer, ResponsePageState, Wish } from "./responsePageReducer";
import { SongWishInput } from "../input/SongWishInput";
import styles from "./ResponsePage.module.css";
import { Guest } from "../guest/Guest";
import { Title } from "../text/Title";
import { Header } from "../text/Header";
import { FoodInfoInput } from "../input/FoodInfoInput";
import { setGuestData } from "../../firebase/firebase";
import { Button } from "../button/Button";
import { IconNode } from "../icons/IconNode";
import { useDebounce } from "../../hooks/debounce/useDebounce";
import { IconCollapse } from "../icons/IconCollapse";
import { IconExpand } from "../icons/IconExpand";
import { useTranslator } from "../../translations/useTranslator";

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
  const translator = useTranslator();

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
      if (index <= guest.name.length) {
        setName(guest.name.slice(0, index));
        setIndex((i) => i + 1);
      }
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, [name, index, guest.name]);

  const handleSongRemove = (wish: Wish) => {
    dispatch({ type: ACTION_TYPE.SONG_WISH_REMOVED, payload: { wish: wish } });
  };

  const updateState = useCallback(
    async (state: ResponsePageState) => {
      const updatedGuest: Guest = {
        ...guest,
        attending: state.attending,
        foodInfo: state.foodInfo,
        songWishes: state.songWishes.map((sw) => sw.value),
      };
      await setGuestData(updatedGuest);
    },
    [guest]
  );

  useEffect(() => {
    if (debouncedState) {
      updateState(debouncedState);
    }
  }, [debouncedState, updateState]);

  const { attending, songWishes } = state;
  return (
    <div className={styles.container + ` ${!expanded ? styles.collapsed : ""}`}>
      <Flexbox justifyContent="space-between">
        <Title title={name} />
        <button className={styles.closeCardButton} onClick={() => setExpanded(!expanded)}>
          {expanded ? <IconCollapse fill="black" /> : <IconExpand fill="black" />}
        </button>
      </Flexbox>
      {expanded && (
        <Flexbox flexDirection="column" alignItems="flex-start" height="100%" gap={10} marginTop="12px">
          <Checkbox
            label={translator.areYouAttending()}
            id={`${guest.name}-${attending}`}
            value={attending}
            onChange={handleAttendingChange}
          />
          <Header text={translator.songWishes()} subHeader={translator.songWishesDescription()} />
          <Flexbox
            maxHeight="360px"
            minHeight="100px"
            width="100%"
            flexDirection="column"
            overflow="scroll"
            paddingBottom="10px"
            paddingRight="10px"
            gap={20}
          >
            {songWishes.map((sw, index) => {
              return (
                <SongWishInput
                  wish={sw}
                  id={`${guest.name}-wish-${index}`}
                  key={`${guest.name}-wish-${index}`}
                  label={translator.wish(`${index + 1}`)}
                  onChange={handleWishChange}
                  onSongRemove={() => handleSongRemove(sw)}
                />
              );
            })}
            <Button
              icon={<IconNode fill="black" />}
              onClick={handleSongWishAdd}
              width="3rem"
              alignSelf="flex-end"
              height="3rem"
              minHeight="3rem"
              minWidth="3rem"
            />
          </Flexbox>
          <FoodInfoInput value={state.foodInfo} id={`${guest.name}-food-info`} onChange={handleFoodInfoChange} />
        </Flexbox>
      )}
    </div>
  );
};
