import { heroes } from "../../data/Heroes";

export const getHeroByPublicer = (publisher) => {
  const validPublishers = ["DC Comics", "Marvel Comics"];

  if (!validPublishers.includes(publisher)) {
    throw new Error(`Publisher "${publisher}" no es correcto`);
  }

  return heroes.filter((hero) => hero.publisher === publisher);
};
