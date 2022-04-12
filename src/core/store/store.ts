import { configureStore, ThunkAction, Action, getDefaultMiddleware } from '@reduxjs/toolkit';
import todos from '../slices/todosSlice';

export const store = configureStore({
  reducer: {
    todos
  },
  middleware: [
    ...getDefaultMiddleware()
  ]
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
