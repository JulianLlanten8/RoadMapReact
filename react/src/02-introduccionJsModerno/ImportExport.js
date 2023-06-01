import heroes, { owners } from "../data/heroes";

console.log(heroes);

export const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

console.log(owners);

console.log(getHeroeById(2));
