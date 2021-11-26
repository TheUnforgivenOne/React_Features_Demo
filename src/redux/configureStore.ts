import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware, { END } from 'redux-saga';

import rootReducer, { rootSaga } from './reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: [...getDefaultMiddleware(), sagaMiddleware]
  });

  // @ts-ignore
  store.runSaga = () => sagaMiddleware.run(rootSaga);
  // @ts-ignore
  store.close = () => store.dispatch(END);

  return store;
};

export default createStore;
