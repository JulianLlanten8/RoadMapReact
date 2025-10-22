import { Link } from "react-router";
//import { ProfesionalApp } from "../useContext/ProfesionalApp";

const projects = [
  {
    title: "Hooks App",
    path: "/hooks",
    desc: "Demuestra uso de hooks básicos de React",
    img: "",
  },
  {
    title: "Traffic Light",
    path: "/state/traffic-light",
    desc: "Cambia luces usando useState",
    img: `./imgs/projects/traffic-light.png`,
  },
  {
    title: "Traffic Light Effect",
    path: "/effect/traffic-light",
    desc: "Semáforo con useEffect",
    img: "./imgs/projects/traffic-light-useEffect.png",
  },
  {
    title: "Traffic Light Custom Hook",
    path: "/effect/traffic-light-hook",
    desc: "Hook personalizado con efectos",
    img: "./imgs/projects/traffic-light-useEffect.png",
  },
  {
    title: "Pokemon Page",
    path: "/examples/pokemon",
    desc: "Consulta API Pokémon con fetch, aplicando los hooks useState",
    img: "./imgs/projects/pokemon-fetch.png",
  },
  {
    title: "Tasks App",
    path: "/reducer/tasks",
    desc: "To-do app usando useReducer",
    img: "./imgs/projects/tasks-reducer.png",
  },
  {
    title: "Scramble Words",
    path: "/reducer/scramble",
    desc: "Ordena palabras dinámicamente",
    img: "./imgs/projects/scramble-words-reducer.png",
  },
  {
    title: "Memo Hook",
    path: "/memos/memo-hook",
    desc: "muestra cómo React “memoriza” funciones para evitar renders innecesarios y mejorar el rendimiento.",
    img: "./imgs/projects/memo-hook.png",
  },
  {
    title: "Memo Counter",
    path: "/memos/memo-counter",
    desc: "Optimiza renders con memo useMemo evita re calcular tareas pesadas como el bucle for, guardando su resultado en memoria. Solo vuelve a ejecutarse cuando cambia counter, mejorando el rendimiento y evitando cálculos innecesarios.",
    img: "./imgs/projects/memo-counter.png",
  },
  {
    title: "Instagrom App",
    path: "/optimistic/instagrom",
    desc: "UI optimista tipo Instagram",
    img: "./imgs/projects/instagrom-optimistic.png",
  },
  {
    title: "Client Suspense",
    path: "/suspense/client",
    desc: "Carga diferida con Suspense",
    img: "./imgs/projects/client-suspense.png",
  },
];

export const ProjectsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-8 text-center">
        Proyectos de Aprendizaje
      </h1>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map(({ title, path, desc, img }) => (
          <Link
            key={path}
            to={path}
            className="group block rounded-2xl bg-gray-800/70 p-6 shadow-lg hover:shadow-xl hover:bg-gray-700/80 transition-all border border-gray-700 hover:border-indigo-500"
          >
            <img
              className="w-full h-80 rounded-xl mb-4 object-fill"
              src={
                img ||
                "https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=560&q=80"
              }
              alt={title}
            />
            <h2 className="text-xl font-semibold mb-2 group-hover:text-indigo-400 transition-colors">
              {title}
            </h2>
            <p className="text-sm text-gray-400 mb-4">{desc}</p>
            <span className="inline-block text-sm text-indigo-400 group-hover:underline">
              Ver ejemplo →
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};
