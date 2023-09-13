import { configureStore } from "@reduxjs/toolkit";
import { counterSlice } from "./slice/counter";
import { pokemonSlides } from "./slice/pokemon";

export const store = configureStore({
  reducer: {
    // Aquí se añaden los slices
    counter: counterSlice.reducer,
    pokemons: pokemonSlides.reducer,
  },
});
