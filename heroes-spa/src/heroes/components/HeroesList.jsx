import { useMemo } from "react";
import { getHeroByPublicer } from "../helpers";
import { HeroCard } from "./HeroCard";
import PropTypes from "prop-types";

export const HeroesList = ({ publicer }) => {
  const heroes = useMemo(() => getHeroByPublicer(publicer), [publicer]);
  return (
    <div className="container-fluid">
      <div className="row g-1 row-cols-xs-1 row-cols-md-2 row-cols-lg-5 mx-auto my-auto">
        {heroes.map((hero) => (
          <HeroCard key={hero.id} {...hero} />
        ))}
      </div>
    </div>
  );
};

HeroesList.propTypes = {
  publicer: PropTypes.string.isRequired,
};
