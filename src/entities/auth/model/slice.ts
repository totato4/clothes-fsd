import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { AuthState } from "./types";

const initialState: AuthState = {
  userName: "",
  isLogged: false,
};

export const authSlice = createSlice({
  name: "AUTH_TAG",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.userName = action.payload;
      state.isLogged = true;
    },
    logout: (state) => {
      state.isLogged = false;
      state.userName = "";
    },
  },
});

export const { login, logout } = authSlice.actions;
