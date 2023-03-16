export interface Wish {
  value: string;
  id: number;
}

interface ResponsePageState {
  coming: boolean;
  wishes: Wish[];
}

interface PageResponseAction {
  type: string;
  payload: {coming?: boolean, wish?: {value: string, id: number}}
}

export const INITIAL_STATE: ResponsePageState = {
  coming: false,
  wishes: [{value: '', id: 0}, {value: '', id: 1}, {value: '', id: 2}]
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
  
    default:
      return state;
  }
};
