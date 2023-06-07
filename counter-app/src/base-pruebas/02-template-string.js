export function getSaludo(nombre) {
  return "Hola " + nombre;
}
const nombre = "Hugo";
console.log(`Este es un texto: ${getSaludo(nombre)}  `);
