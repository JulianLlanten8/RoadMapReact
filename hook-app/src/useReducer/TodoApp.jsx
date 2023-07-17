import { useEffect, useReducer } from "react";
import { todoReducer } from "./todoReducer";
import { TodoList, TodoAdd } from "../components";

const initialState = [
  {
    id: new Date().getTime(),
    description: "Aprender React",
    done: false,
  },
  {
    id: new Date().getTime() + 1,
    description: "Aprender Mongo",
    done: false,
  },
];

/**
 *@returns La función init devuelve el valor parseado de la clave "todos" del localStorage, o
 *una matriz vacía si el valor es nulo o indefinido.
 */
const init = () => {
  return JSON.parse(localStorage.getItem("todos")) || [];
};

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState, init);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add TODO",
      payload: todo,
    };
    dispatch(action);
  };

  const handleDeleteTodo = (id) => {
    const action = {
      type: "[TODO] Remove TODO",
      payload: id,
    };
    dispatch(action);
  };

  return (
    <>
      <h1>
        TodoApp : 10, <small>pendientes: 2</small>
      </h1>
      <hr />
      <main className="row">
        <div className="col-7">
          <TodoList todos={todos} onDeleteTodo={(id) => handleDeleteTodo(id)} />
        </div>

        <div className="col-5">
          <h4>Agregar todo</h4>
          <hr />
          <TodoAdd handleNewTodo={handleNewTodo} />
        </div>
      </main>
    </>
  );
};
