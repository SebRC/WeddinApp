export interface Wish {
  value: string;
  id: number;
}

export interface ResponsePageState {
  attending: boolean;
  songWishes: Wish[];
  foodInfo: string;
}

interface PageResponseAction {
  type: string;
  payload: {attending?: boolean, wish?: {value: string, id: number}, foodInfo?: string}
}

export const INITIAL_STATE: ResponsePageState = {
  attending: false,
  songWishes: [{value: '', id: 0}, {value: '', id: 1}, {value: '', id: 2}],
  foodInfo: ''
};

export const responsePageReducer = (state: ResponsePageState, action: PageResponseAction): ResponsePageState => {
  switch (action.type) {
    case "COMING_CHANGED":
      return {
        ...state, attending: action.payload.attending ?? state.attending
      }
    case "WISHES_CHANGED":
      return {
        ...state, songWishes: state.songWishes.map(w => {
          if(w.id === action.payload.wish?.id) {
            return action.payload.wish
          }
          return w
        })
      }

    case "FOOD_INFO_CHANGED":
      return {
        ...state, foodInfo: action.payload.foodInfo ?? state.foodInfo
      }

    case "SONG_WISH_ADDED":
      return {
        ...state, songWishes: [...state.songWishes, {value: "", id: action.payload.wish?.id ?? -1}]
      }

    case "SONG_WISH_REMOVED":
      const wishToremove = action.payload.wish ?? {value: "", id: -1};
      const index = state.songWishes.indexOf(wishToremove);
      if(index > -1) {
        state.songWishes.splice(index, 1)
      }
      return {
        ...state, songWishes: state.songWishes
      }
  
    default:
      return state;
  }
};
