import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice/counter";
import { pokemonSlides } from "./slice/pokemon";
import { todosApi } from "./apis";

export const store = configureStore({
  reducer: {
    // Aquí se añaden los slices
    counter: counterSlice.reducer,
    pokemons: pokemonSlides.reducer,

    [todosApi.reducerPath]: todosApi.reducer,
  },
  // middleware es una funcion que se ejecuta antes de que se ejecute otra funcion
  middleware: (getDefaultMiddleware) =>
    // se añade el middleware que viene de la api
    getDefaultMiddleware().concat(todosApi.middleware),
});
