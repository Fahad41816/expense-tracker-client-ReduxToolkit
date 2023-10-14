import { configureStore } from '@reduxjs/toolkit';
import tranjectionSlice from './features/tranjection/tranjectionSlice';
 

const store = configureStore({
  reducer: {
    expense: tranjectionSlice 
  },
});


export default store;

