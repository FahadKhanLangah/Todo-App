import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './slice/counter';

export const mainStore = configureStore({
  reducer: {
    counter : counterSlice
  }
});