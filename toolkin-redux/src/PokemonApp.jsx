import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPokemons } from "./store/slice/pokemon";

export const PokemonApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPokemons());
  }, []);

  const { isLoading, pokemons, page } = useSelector((state) => state.pokemons);

  return (
    <>
      <h1>Pokemon App</h1>

      <hr />

      <span>{isLoading ? <p>Loading...</p> : <p>Loaded!</p>}</span>

      <ul>
        {pokemons.map((pokemon) => (
          <li key={self.crypto.randomUUID()}>{pokemon.name}</li>
        ))}
      </ul>

      <button onClick={() => dispatch(getPokemons(page))}>Next</button>
    </>
  );
};
