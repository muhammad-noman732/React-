import { configureStore } from '@reduxjs/toolkit';
import todosReducer from './features/todoSlice';
import authReducer from './features/authSlice'
export const store = configureStore({
  reducer: {
    todos: todosReducer,
    users : authReducer
  },
});
