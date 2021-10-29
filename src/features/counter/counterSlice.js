import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0
  },
  reducers: {
    // increment action is recieved by increment
    // triggers calling the increment reducer function
    // will run logic to update state
    // returns a new copy of state
    increment: state => {
      console.log('calling increment')

      state.value += 1;
    },
    decrement: state => {
      state.value -= 1;
    },
    incrementBy: (state, action) => {
      console.log('action ==>', action);


      state.value += action.payload;
    }
  }
})

// console.log('============================')
// console.log('counterSlice ==>', counterSlice);
// console.log('============================')

// console.log('counterSlice.actions ==>', counterSlice.actions);
// console.log('============================')

// console.log('counterSlice.reducer ==>', counterSlice.reducer);
// console.log('============================')

export const {
  increment,
  decrement,
  incrementBy
} = counterSlice.actions;

export default counterSlice.reducer;
