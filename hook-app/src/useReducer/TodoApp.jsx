import { useReducer } from "react";
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

export const TodoApp = () => {
  const [todos, dispatch] = useReducer(todoReducer, initialState);

  const handleNewTodo = (todo) => {
    const action = {
      type: "[TODO] Add TODO",
      payload: todo,
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
          <TodoList todos={todos} />
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
