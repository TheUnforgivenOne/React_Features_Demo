import { all, takeLatest, put } from 'redux-saga/effects';
import { setTodos } from './reducers/todosReducer';
import JSONService from '../services/JSONService';

const FETCH_TODOS_SAGA = 'FETCH_TODOS_SAGA';

export function * fetchTodosSaga () {
  const todosQuery = {
    _start: 0,
    _limit: 20
  };
  // eslint-disable-next-line no-console
  console.log('query', todosQuery);

  // @ts-ignore
  // const response = yield call(async () => await JSONService.getTodos(todosQuery));
  const response = yield JSONService.getTodos(todosQuery);
  // eslint-disable-next-line no-console
  console.log('response', response);
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
