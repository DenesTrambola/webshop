import { configureStore } from "@reduxjs/toolkit";
import likedReducer from './slices/likedSlice';

export const store = configureStore({
  reducer: {
    liked: likedReducer,
  },
});
