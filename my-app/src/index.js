import { heroes } from "./data/heroes";

console.log(heroes);

const getHeroeById = (id) => {
  return heroes.find((heroe) => heroe.id === id);
};

console.log(getHeroeById(2));
