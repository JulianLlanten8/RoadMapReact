import { createSlice } from "@reduxjs/toolkit";
/* 
  createSlice toma un objeto como argumento con tres propiedades:

  name: El nombre del slice. Esto será el nombre del slice en el estado global de Redux.
  initialState: El estado inicial del slice.
  reducers: Un objeto que contiene las funciones reductoras. 
  Cada función reductora recibe el estado actual y puede modificarlo directamente.
  createSlice automáticamente genera las acciones relacionadas con los reducers que defines y
  te proporciona una manera fácil de exportarlos.
 */
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 10,
  },
  reducers: {
    increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.counter += 1;
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment } = counterSlice.actions;

export default counterSlice.reducer;
