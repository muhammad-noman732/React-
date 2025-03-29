import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react";

export const getTodos = createAsyncThunk("todos/getTodos", async () => {
  try {
    const response = await fetch("http://localhost:8000/todos/");
    console.log("response", response);
    const data = await response.json();
    console.log("data", data);
    return data;
  } catch (error) {
    console.log("error in fetching", data.error.message);
    return data.error;
  }
});

export const deleteTodo = createAsyncThunk("todos/deleteTodo", async (id) => {
  try {
    const response = await fetch(`http://localhost:8000/todos/delete/${id}`, {
      method: "DELETE",
    });
    if (!response.ok) {
      throw new Error("Server responded with error");
    }
    console.log("response in delete reducer", response);
    const data = await response.json();
    console.log("data in delete reducer", data);
    return data.data._id;
  } catch (error) {
    console.log("error", error);
    return error;
  }
});

export const createTodo = createAsyncThunk(
  "todos/createTodo",
  async ({ title, description }) => {
    try {
      const response = await fetch("http://localhost:8000/todos/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });
      if (!response.ok) {
        throw new Error(`Failed to create todo ${response.status}`);
      }
      console.log("response in create reducer", response);
      const data = await response.json();
      console.log("data in create reducer", data);
      return data;
    } catch (error) {
      console.log("error", error);
      return error;
    }
  }
);

export const updateTodo = createAsyncThunk(
  "todo/updateTodo",
  async ({ id, title, description }) => {
    try {
      const response = await fetch(
        `http://localhost:8000/todos/update/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ title, description }),
        }
      );
      if (!response.ok) {
        throw new Error(`Failed to update todos ${response.status}`);
      }
      // data from backend
      const data = await response.json();
      return data.data; // return update object
    } catch (error) {
      console.log("error in updating todos", error);
      return error;
    }
  }
);

const initialState = {
  todos: [],
  loading: false,
  error: null,
  updateTodoid: null
};

export const todosSlice = createSlice({
  name: "todos",
  initialState,
  //   extraReducers
  reducers: {
    getState :(state , action)=>{
        console.log("id in action of updating todos" , action.payload);
        
        state.updateTodoid = action.payload
    }
     
  },
  extraReducers: (builder) => {
    builder.addCase(getTodos.fulfilled, (state, action) => {
      console.log("todos in action", action.payload);
      state.todos = action.payload.data;
      state.loading = false;
    });
    builder.addCase(getTodos.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getTodos.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(deleteTodo.fulfilled, (state, action) => {
      console.log("todos in delete action", action.payload);
      state.todos = state.todos.filter((todo) => todo._id !== action.payload);
      state.loading = false;
    });
    builder.addCase(deleteTodo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deleteTodo.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });

    builder.addCase(createTodo.fulfilled, (state, action) => {
      console.log("todos in create action", action.payload);
      state.todos = [action.payload.data, ...state.todos]; // Add new todo at start
      state.loading = false;
    });
    builder.addCase(createTodo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createTodo.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
    builder.addCase(updateTodo.fulfilled, (state, action) => {
      const updatedTodo = action.payload;
      state.todos = state.todos.map(todo => 
        todo._id === updatedTodo._id ? updatedTodo : todo
      );
      state.loading = false;
      state.updateTodoid = null; // Clear edit mode
    });
    
    builder.addCase(updateTodo.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(updateTodo.rejected, (state, action) => {
      state.error = action.error.message;
      state.loading = false;
    });
  },
});

// Export actions and reducer
export const { getState } = todosSlice.actions;
export default todosSlice.reducer;
