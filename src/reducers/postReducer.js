import { CREATE_POST, UPDATE_POST } from '../actions/postAction';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case CREATE_POST:
      return [...state, action.payload];
    case UPDATE_POST:
      return [
        ...state.slice(0, action.payload.id),
        {
          ...state[action.payload.id],
          times: action.payload.times,
          specials: action.payload.specials
        },
        ...state.slice(action.payload.id + 1)
      ];
    default:
      return state;
  }
}
