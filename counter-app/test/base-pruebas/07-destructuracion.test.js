import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe("pruebas con destructuracion", () => {
  test("Esto debe retornar un string y un numero", () => {
    const [letras, numeros] = retornaArreglo();

    expect(letras).toBe("ABC"); // espera que letras sea ABC
    expect(numeros).toBe(123); // espera que numeros sea 123

    expect(typeof letras).toBe("string"); // espera que el tipo de dato de letras sea string
    expect(typeof numeros).toBe("number"); // espera que el tipo de dato de numeros sea number

    expect(letras).toEqual(expect.any(String)); // espera cualquier string
  });
});
