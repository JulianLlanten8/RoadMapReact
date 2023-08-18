const persona = {
  nombre: "Tony",
  lastName: "Stark",
  edad: 45,
  clave: "Ironman",
};

// const { nombre } = persona;
const { nombre, lastName, edad, clave } = persona;


const retornaPersona = ({ nombre, edad, clave, rango = "capitan" }) => {
  console.log(nombre, edad, clave, rango);
};

retornaPersona(persona);

const useContext = ({ clave, nombre, edad, rango = "capitan" }) => {
  return {
    nombreClave: clave,
    anios: edad,
    herramientas: {
      traje: "Mark 1",
      arma: "Laser",
    },
  };
};

const {
  nombreClave,
  anios,
  herramientas: { traje, arma },
} = useContext(persona);

console.log(nombreClave, anios, traje, arma);
