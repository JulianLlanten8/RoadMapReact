/* 
  Los "thunks" en React Redux son funciones que permiten realizar 
  operaciones asíncronas en las acciones de Redux. 
  Estos thunks encapsulan lógica compleja y permiten despachar múltiples acciones, 
  facilitando la gestión de flujos asíncronos en aplicaciones React con Redux. 
*/

import { pokemonApi } from "../../../api/pokemonApi";
import { setPokemons, startLoadingPokemons } from "./pokemonSlides";

export const getPokemons = (page = 0) => {
  return async (dispatch, getState) => {
    dispatch(startLoadingPokemons());

    const { data } = await pokemonApi.get(
      `pokemon?offset=${page * 20}&limit=10`
    );

    dispatch(setPokemons({ pokemons: data.results, page: page + 1 }));
  };
};
