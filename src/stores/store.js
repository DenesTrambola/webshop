import { configureStore } from "@reduxjs/toolkit";
import { likedReducer, authReducer } from './slices';

export const store = configureStore({
  reducer: {
    liked: likedReducer,
    auth: authReducer,
  },
});
