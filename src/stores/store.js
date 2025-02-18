import { configureStore } from "@reduxjs/toolkit";
import { likedReducer, authReducer, cartReducer } from './slices';

export const store = configureStore({
  reducer: {
    liked: likedReducer,
    auth: authReducer,
    cart: cartReducer,
  },
});
