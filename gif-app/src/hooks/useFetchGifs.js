import { useEffect, useState, useCallback } from "react";
import { getGifs } from "../helpers/GetGifts";

export const useFetchGifs = (category) => {
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getImages = useCallback(async () => {
    const newImages = await getGifs(category);
    setImages(newImages);
    setIsLoading(false);
  }, [category]); // depende solo de category

  useEffect(() => {
    getImages();
  }, [getImages]);

  return {
    images,
    isLoading,
  };
};
