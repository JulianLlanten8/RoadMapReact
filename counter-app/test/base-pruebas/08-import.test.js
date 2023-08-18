import {
  getHeroeById,
  getHeroesByOwner,
} from "../../src/base-pruebas/08-imp-exp";
import heroes from "../../src/data/heroes";

describe("pruebas de import", () => {
  test("prueba la funcion getById", () => {
    const id = 1;
    const heroe = getHeroeById(id);
    expect(heroe).toEqual({ id: 1, name: "Batman", owner: "DC" });
  });
  test("prueba la funcion getById debe retornar undefined si no exixte", () => {
    const id = 11;
    const heroe = getHeroeById(id);
    expect(heroe).toBe(undefined);
  });

  test("Debe retornar 3 heroes de Marvel", () => {
    const owner = "DC";
    const filter = getHeroesByOwner(owner);
    expect(filter).toEqual(heroes.filter((heroe) => heroe.owner === owner));
    expect(filter.length).toBe(3);
  });
});
