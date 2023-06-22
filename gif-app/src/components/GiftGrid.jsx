import propTypes from "prop-types";

import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GiftGrid = ({ category }) => {
  const { images, isloading } = useFetchGifs(category);
  console.log({ images, isloading });

  return (
    <>
      <h3>{category}</h3>
      {isloading && <h2>Cargando...</h2>}
      <main className="card-grid">
        {images.map((image) => (
          <GifItem key={image.id} {...image} />
        ))}
      </main>
    </>
  );
};

GiftGrid.propTypes = {
  category: propTypes.string.isRequired,
};
