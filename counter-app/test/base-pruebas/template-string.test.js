import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe("Pruebas en el archivo template-string", () => {
  test('getsaludo debe retornar "hola hugo"', () => {
    const nombre = "Hugo";
    const saludo = getSaludo(nombre);

    expect(saludo).toBe(`Hola ${nombre}`);
  });
});
