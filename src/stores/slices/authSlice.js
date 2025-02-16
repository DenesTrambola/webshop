import { createSlice } from "@reduxjs/toolkit";

const loadUser = () => {
  const savedUser = localStorage.getItem("user");
  return savedUser ? JSON.parse(savedUser) : null;
};

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: loadUser(),
  },
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      localStorage.setItem("user", JSON.stringify(action.payload));
    },
    logout: (state) => {
      state.user = null;
      localStorage.removeItem("user");
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
