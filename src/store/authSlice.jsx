// authSlice.jsx
import { createSlice } from "@reduxjs/toolkit";
import { userInfo } from "./data";

const initialState = {
  isAuthenticated: false,
  user: null,
  users: [...userInfo],
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { email, password } = action.payload;
      const user = state.users.find(
        (u) => u.email === email && u.password === password
      );
      if (user) {
        state.isAuthenticated = true;
        state.user = user;
      } else {
        alert("Invalid credentials");
      }
    },
    register: (state, action) => {
      const { email, password } = action.payload;
      const existingUser = state.users.find((u) => u.email === email);
      if (!existingUser) {
        state.users.push({ email, password });
        state.isAuthenticated = true;
      } else {
        alert("User already exists");
      }
    },
    logout: (state) => {
      state.isAuthenticated = false;
      state.user = null;
    },
  },
});

export const { login, register, logout } = authSlice.actions;
export default authSlice.reducer;
