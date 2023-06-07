import { getUser, getUsuarioActivo } from "../../src/base-pruebas/05-funciones";

describe("test a funciones", () => {
  test("getUser debe de retornar un objeto", () => {
    const userTest = {
      uid: "ABC123",
      username: "El_Papi1502",
    };
    const user = getUser();
    expect(user).toStrictEqual(userTest);
  });

  test("getUsuarioActivo debe de retornar un objeto", () => {
    const nombre = "Hugo";

    const user = getUsuarioActivo(nombre);
    expect(user).toStrictEqual({
      uid: "ABC567",
      username: nombre,
    });
  });
});
