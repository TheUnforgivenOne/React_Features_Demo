import { fetchTodos } from '../../redux/reducers/todosReducer';

export default [
  { path: '/redux/default', fetch: (dispatch: any) => dispatch(fetchTodos({ page: 1, limit: 20 })) },
  { path: '/redux/hooks', fetch: (dispatch: any) => dispatch(fetchTodos({ page: 1, limit: 20 })) },
  { path: '/redux/dumbsmart', fetch: (dispatch: any) => dispatch(fetchTodos({ page: 1, limit: 20 })) }
];
