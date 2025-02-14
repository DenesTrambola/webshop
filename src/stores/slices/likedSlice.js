import { createSlice } from "@reduxjs/toolkit";

const loadLikedProducts = () => {
  const saved = localStorage.getItem("likedProducts");
  return saved ? JSON.parse(saved) : [];
};

const initialState = {
  likedProducts: loadLikedProducts(),
};

const likedSlice = createSlice({
  name: "liked",
  initialState,
  reducers: {
    toggleLike: (state, action) => {
      const productId = action.payload;
      if (state.likedProducts.includes(productId)) {
        state.likedProducts = state.likedProducts.filter((id) => id !== productId);
      } else {
        state.likedProducts.push(productId);
      }
      localStorage.setItem("likedProducts", JSON.stringify(state.likedProducts));
    },
  },
});

export const { toggleLike } = likedSlice.actions;
export default likedSlice.reducer;
