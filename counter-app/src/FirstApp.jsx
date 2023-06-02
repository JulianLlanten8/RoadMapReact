import { Fragment } from "react";
import PropTypes from "prop-types";
/* 
  En react siempre se debe retornar un nodo padre y dentro de este los hijos 
  algo parecido a vue que en vue se debe retornar un solo elemento.
*/
class persona {
  constructor(nombre, apellido, edad) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.edad = edad;
    this.nombreCompleto = `${nombre} ${apellido}`;
  }
  info() {
    return `${this.nombreCompleto} Edad: ${this.edad}`;
  }
}

const hugo = new persona("Hugo", "Julian", 26);

const FirstApp = () => (
  <Fragment>
    <p>{hugo.info()}</p>
    <p>Frontend Developer</p>
  </Fragment>
);
// Otra forma de hacerlo y la habitual
const SecondApp = ({ title = "No tiene" }) => {
  // console.log(props);
  return (
    <>
      <h2>Fragmento de forma diferente</h2>
      <p>{title}</p>
    </>
  );
};

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
};

export { FirstApp, SecondApp };
