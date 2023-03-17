export interface Wish {
  value: string;
  id: number;
}

interface ResponsePageState {
  coming: boolean;
  wishes: Wish[];
  foodInfo: string;
}

interface PageResponseAction {
  type: string;
  payload: {coming?: boolean, wish?: {value: string, id: number}, foodInfo?: string}
}

export const INITIAL_STATE: ResponsePageState = {
  coming: false,
  wishes: [{value: '', id: 0}, {value: '', id: 1}, {value: '', id: 2}],
  foodInfo: ''
};

export const responsePageReducer = (state: ResponsePageState, action: PageResponseAction): ResponsePageState => {
  switch (action.type) {
    case "COMING_CHANGED":
      return {
        ...state, coming: action.payload.coming ?? state.coming
      }
    case "WISHES_CHANGED":
      return {
        ...state, wishes: state.wishes.map(w => {
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
  
    default:
      return state;
  }
};
