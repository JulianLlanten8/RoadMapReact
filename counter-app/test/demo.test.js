describe("mis primeras pruebas", () => {
  //un grupo de pruebas
  test("No se puede dividir entre cero", () => {
    //priemra prueba
    if (0 / 0 == NaN) {
      throw new Error("Falló,   no se puede dividir entre 0");
    }
  });

  test("igualdad", () => {
    //segunda prueba
    const mesage = "Hola mundo";
    const mesage2 = "Hola mundo";
    expect(mesage).toBe(mesage2);
  });
});
