export const getImagen = async () => {
  try {
    const apiKey = "n7X50L3fGzjK3N84gA7yPI6PLxzrIhS0";
    const resp = await fetch(
      `http://api.giphy.com/v1/gifs/random?api_key=${apiKey}`
    );
    const { data } = await resp.json();

    const { url } = data.images.original;

    return url;
  } catch (error) {
    // manejo del error
    return "No existe";
  }
};
