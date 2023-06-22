import { useEffect, useState } from "react";
import { getGifs } from "../helpers/GetGifts";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isloading, setisLoading] = useState(true);

  const getImages = async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setisLoading(false);
  };

  useEffect(() => {
    getImages();
  }, []);

  return {
    images: images,
    isloading: isloading,
  };
};
