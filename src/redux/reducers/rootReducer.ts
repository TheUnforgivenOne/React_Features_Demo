import { combineReducers } from '@reduxjs/toolkit';

import todosReducer from './todosReducer';

export default combineReducers({
  todos: todosReducer
});
