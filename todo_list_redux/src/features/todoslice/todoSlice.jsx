import { createSlice } from '@reduxjs/toolkit';
import { act } from 'react';

// initial state
const initialState =[];

//slice 
export const todoSlice = createSlice({
  name: 'Todos',
  initialState,

  // reduce function take old state and  action in input state and return new state
  reducers: {
    // increment ik action h yani jb ham increment wale button pr click kre ge to ye action chle ga
    AddTodo: (state , action) => {
      state.push({
        id:action.payload.id,
        text: action.payload.text,
        completed:false
      });
    },

    DeleteTodo: (state , action) => {
      return state.filter( todo =>{
       return todo.id !== action.payload.id
    })
    },

    ToggleTodo: (state, action) => {
        // Find the todo by its ID from the payload
        const todo = state.find(todo => todo.id === action.payload.id);
        if (todo) {
          // Directly mutate the todo's "completed" property
          todo.completed = !todo.completed;
        }
      },

    updateTodo  :(state , action)=>{
      const todos =  state.find(todo => todo.id === action.payload.id);
      if(todos){
              todos.text =  action.payload.newText
      }
    }
  },
});

// Export actions and reducer
export const { AddTodo, DeleteTodo, ToggleTodo ,  updateTodo} = todoSlice.actions;
export default todoSlice.reducer; 