import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  //nombre del slice con el que se vincula al store
  name: "auth",

  //declaracion del estado inicial de las variables
  initialState: {
    status: "checking",
    uid: null,
    email: null,
    displayName: null,
    photoURL: null,
    errorMessage: null,
  },
  //funciones que modifican el estado
  reducers: {
    login: (state, action) => {
      state.status = "authenticated";
      state.uid = action.payload.uid;
      state.email = action.payload.email;
      state.displayName = action.payload.displayName;
      state.photoURL = action.payload.photoURL;
      state.errorMessage = null;
    },

    logout: (state, { payload }) => {
      state.status = "not-authenticated";
      state.uid = null;
      state.email = null;
      state.displayName = null;
      state.photoURL = null;
      state.errorMessage = payload;
    },

    checkingCredentials: (state) => {
      state.status = "checking";
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
