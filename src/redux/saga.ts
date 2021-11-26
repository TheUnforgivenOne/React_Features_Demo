import { all, takeLatest, put } from 'redux-saga/effects';
import { setTodos } from './reducers/todosReducer';
import JSONService from '../services/JSONService';

const FETCH_TODOS_SAGA = 'FETCH_TODOS_SAGA';

export function * fetchTodosSaga () {
  const todosQuery = {
    _start: 0,
    _limit: 20
  };

  // @ts-ignore
  const response = yield JSONService.getTodos(todosQuery);
  yield put(setTodos(response));
}

export function * watchTodos () {
  // @ts-ignore
  yield takeLatest(FETCH_TODOS_SAGA, fetchTodosSaga);
}

export function * todosSaga () {
  yield all([
    watchTodos()
  ])
}
