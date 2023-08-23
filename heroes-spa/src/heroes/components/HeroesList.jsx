import { getHeroByPublicer } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HeroesList = ({ publicer }) => {
  const heroes = getHeroByPublicer(publicer);
  return (
    <div className="row rows-cols-1 rows-cols-md-3 g-3">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
        
      ))}
    </div>
  );
};
