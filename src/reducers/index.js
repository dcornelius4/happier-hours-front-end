import { combineReducers } from 'redux';
import posts from './postReducer';
import auth from './authReducer';
import search from './searchReducer';

export default combineReducers({
  posts,
  auth,
  search
});
