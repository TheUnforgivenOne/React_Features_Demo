import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { TodoType } from '../../types/types';
import JSONService from '../../services/JSONService';

export const fetchTodos = createAsyncThunk('fetchTodos', async (param: { page: number, limit: number }) => {
  const { page, limit } = param;
  const todosQuery = {
    _start: (page - 1) * limit,
    _limit: limit
  };

  const response = await JSONService.getTodos(todosQuery);

  return { todos: response };
});

const initialState = {
  loadingState: 'initial',
  items: []
} as TodosSliceType;

const todosSlice = createSlice({
  name: 'todosSlice',
  initialState,
  reducers: {
    setTodos: (state, action) => {
      state.loadingState = 'ready';
      state.items = action.payload;
    },
    resetState: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchTodos.pending, (state) => {
      state.loadingState = 'loading';
    });
    builder.addCase(fetchTodos.fulfilled, (state, action: PayloadAction<{ todos: TodoType[] }>) => {
      state.loadingState = 'ready';
      state.items = action.payload.todos;
    });
    builder.addCase(fetchTodos.rejected, (state) => {
      state.loadingState = 'error';
    });
  }
});

export const selectTodos = (state: any) => state.todos;

export const { setTodos, resetState } = todosSlice.actions;

export default todosSlice.reducer;

type TodosSliceType = {
  loadingState: string;
  items: TodoType[]
}
