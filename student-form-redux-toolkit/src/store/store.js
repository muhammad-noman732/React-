import { configureStore } from '@reduxjs/toolkit'
import todosReducer from '../features/studentForm/studentSlice'


export const store = configureStore({
  reducer: {
    todos: todosReducer,
    
  },
})