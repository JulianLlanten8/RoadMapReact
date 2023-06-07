import { getImagen } from "../../src/base-pruebas/11-async-await";
describe("test asincronico", () => {
  test("test para probar una llamada asincronica", async () => {
    try {
      const url = await getImagen();
      expect(typeof url).toBe("string");
      console.log(url);
    } catch (error) {
      console.error(error);
      expect(error).toBe("No existe");
    }
  });
});
