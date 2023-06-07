import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe("prueba de promesas", () => {
  /* test("getHeroeByIdAsync debe de retornar un heroe", (done) => {
    const id = 1;
    getHeroeByIdAsync(id).then((heroe) => {
      expect(heroe).toEqual({ id: 1, name: "Batman", owner: "DC" });
      done();
    });
  }); */
  test("getHeroeByIdAsync debe de obtener un error si el heroe no exixte", (done) => {
    const id = 19;
    getHeroeByIdAsync(id)
      .then((heroe) => {
        expect(heroe).toBeFalsy();
        done();
      })
      .catch((error) => {
        expect(error).toBe(`No se pudo encontrar el héroe con el id ${id}`);
        done();
      });
  });
});
