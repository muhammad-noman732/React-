import { createSlice } from "@reduxjs/toolkit";
const  initialState ={
        todos:[],
        updateId: null
        
    }


const todoSlice = createSlice({
    name:'todos',
    initialState,
    reducers:{
     addTodo :(state ,action)=>{
        console.log('todos added value in action', action.payload);
        
        state.todos = [action.payload ,...state.todos ]
      },
      setEditId: (state , action)=>{
        console.log('update todo id in action', action.payload.id);
       state.updateId = action.payload.id;
      },

     deleteTodo : (state , action)=>{
        console.log('todos deleted in action', action.payload);
        state.todos = state.todos.filter(todo => todo.id !== action.payload.id)
     },

     updateTodo:(state , action)=>{
        state.todos = state.todos.map(todo =>(
            todo.id === action.payload.id ? action.payload :todo
        ))
        state.updateId = null
    }
   }
})

export const {addTodo , updateTodo , deleteTodo , setEditId} = todoSlice.actions
export default todoSlice.reducer