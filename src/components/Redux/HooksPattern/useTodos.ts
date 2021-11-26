import { useDispatch, useSelector } from 'react-redux';
import { fetchTodos, resetState, selectTodos } from '../../../redux/reducers/todosReducer';

export const useTodos = () => {
  const { loadingState, items } = useSelector(selectTodos);
  const dispatch = useDispatch();

  const loadTodos = (page: number, limit: number) => {
    dispatch(fetchTodos({ page, limit }));
  };

  const resetTodos = () => {
    dispatch(resetState());
  };

  return {
    loadTodos,
    resetTodos,
    loadingState,
    items
  }
};
