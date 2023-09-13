import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getPokemons } from "./store/slice/pokemon";

export const PokemonApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  return (
    <>
      <h1>Pokemon App</h1>

      <hr />

      <ul>
        <li>hola</li>
        <li>funciona</li>
        <li>pokemon</li>
      </ul>
    </>
  );
};
