import { createSlice } from '@reduxjs/toolkit';

// initial state
const initialState = {
  value: 0,
};

//slice 
export const counterSlice = createSlice({
  name: 'counter',
  initialState,

  // reduce function take old state and  action in input state and return new state
  reducers: {
    // increment ik action h yani jb ham increment wale button pr click kre ge to ye action chle ga
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    Reset :(state)=>{
      state.value=0
    },

  // reduce function take old state and action in input state and return new state
    incrementByAmount: (state, action) => {

      state.value += Number(action.payload);
    },
  },
});

// Export actions and reducer
export const { increment, decrement, incrementByAmount ,Reset} = counterSlice.actions;
export default counterSlice.reducer;