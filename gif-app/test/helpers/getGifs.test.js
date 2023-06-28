import { getGifs } from "../../src/helpers/GetGifts";

describe("Pruebas de getGifs", () => {
  test("Debe retornar el arreglo de getGifs", async () => {
    const gifs = await getGifs("super campeones");
    // console.log(gifs);
    expect(gifs.length).toBeGreaterThan(0);
    expect(gifs[0]).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      url: expect.any(String),
    });
  });
});
