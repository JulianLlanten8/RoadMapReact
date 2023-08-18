import { useEffect, useReducer } from "react";
import { todoReducer } from "../useReducer/todoReducer";

export const useAppTodo = () => {
  const initialState = [];

  /**
   *@returns La función init devuelve el valor parseado de la clave "todos" del localStorage, o
   *una matriz vacía si el valor es nulo o indefinido.
   */
  const init = () => {
    return JSON.parse(localStorage.getItem("todos")) || [];
  };

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

  const onToggleTodo = (id) => {
    const action = {
      type: "[TODO] Toggle TODO",
      payload: id,
    };
    dispatch(action);
  };

  return {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    onToggleTodo,
    counterTodos: todos.length,
    counterNotDoneTodos: todos.filter((todo) => !todo.done).length,
  };
};
