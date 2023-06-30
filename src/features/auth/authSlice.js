import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
  user: null,
  token: "",
  isAuthenticated: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    logIn: (state, { payload }) => {
      console.log(payload);
      state.user = payload?.user;
      state.token = payload?.user?.token;
      state.isAuthenticated = true;
      localStorage.setItem("auth", JSON.stringify(payload));
      //default axios
      axios.defaults.headers.common["Authorization"] = payload?.user?.token;
    },
    logOut: (state, { payload }) => {
      state.isAuthenticated = false;
      state.user = null;
      state.token = "";
      delete axios.defaults.headers.common["Authorization"];
    },
  },
});

export const { logIn, logOut } = userSlice.actions;

export default userSlice.reducer;
