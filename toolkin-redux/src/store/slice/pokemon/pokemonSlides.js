import { createSlice } from "@reduxjs/toolkit";

export const pokemonSlides = createSlice({
  //nombre del slice con el que se vincula al store
  name: "pokemon",
  //declaracion del estado inicial de las variables
  initialState: {
    page: 0,
    pokemons: [],
    isLoading: false,
  },
  //funciones que modifican el estado
  reducers: {
    startLoadingPokemons: (state) => {
      state.isLoading = true;
    },
    setPokemons: (state, action) => {
      state.isLoading = false;
      state.page = action.payload.page;
      state.pokemons = action.payload.pokemons;
    },
  },
});

export const { startLoadingPokemons, setPokemons } = pokemonSlides.actions;
