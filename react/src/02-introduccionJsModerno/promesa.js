import { getHeroeById } from "./02-introduccionJsModerno/ImportExport";
const promesa = new Promise((resuelto, rechazado) => {
  setTimeout(() => {
    const heroe = getHeroeById(2);
    // resuelto transfiere el valor a then
    // rechazado transfiere el valor a catch
    heroe ? resuelto(heroe) : rechazado("No se encontró el héroe");
  }, 1000);
});

promesa
  .then((mensaje) => {
    console.log(`El héroe es ${mensaje.name}`);
  })
  .catch((err) => {
    console.warn(err);
  })
  .finally(() => {
    console.log("Se terminó el proceso");
  });