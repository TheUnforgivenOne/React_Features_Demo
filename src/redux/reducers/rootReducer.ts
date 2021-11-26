import { combineReducers } from '@reduxjs/toolkit';
import { all } from 'redux-saga/effects';

import { todosSaga } from '../saga';
import todosReducer from './todosReducer';

export function * rootSaga () {
  yield all([
    todosSaga()
  ]);
}

export default combineReducers({
  todos: todosReducer
});
