import { getHeroByPublicer } from "../helpers";
import { HeroCard } from "./HeroCard";

export const HeroesList = ({ publicer }) => {
  const heroes = getHeroByPublicer(publicer);
  return (
    <div className="container-fluid">
      <div className="row g-4 row-cols-xs-1 row-cols-md-2 row-cols-lg-5 row-cols-xl-5">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </div>
  );
};
