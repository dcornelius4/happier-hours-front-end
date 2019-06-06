import { MAKE_SEARCH } from '../actions/searchAction';

const initialState = [];

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case MAKE_SEARCH:
      return [...state, action.payload];
    default:
      return state;
  }
}
