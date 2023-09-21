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
      //console.log(action.payload);
    },
    logout: (state) => {
      //console.log('logout');
    },
    checkingCredentials: (state) => {
      //console.log('checkingCredentials');
    },
  },
});

export const { login, logout, checkingCredentials } = authSlice.actions;
