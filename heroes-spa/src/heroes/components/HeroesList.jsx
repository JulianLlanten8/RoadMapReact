import { GetHeroByPublicer } from "../helpers";

export const HeroesList = ({ publicer }) => {
  const heroes = GetHeroByPublicer(publicer);
  return (
    <ul>
      {heroes.map((hero) => (
        <li key={hero.id}>{hero.superhero}</li>
      ))}
    </ul>
  );
};
