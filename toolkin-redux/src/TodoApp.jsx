import { useState } from "react";
import { useGetTodoQuery, useGetTodosQuery } from "./store/apis";

export const TodoApp = () => {
  const { data: todos = [], error, isLoading } = useGetTodosQuery();
  const [todoId, setTodoId] = useState(1);
  const { data: todo } = useGetTodoQuery(todoId);

  const handlePrevTodo = () => {
    if (todoId > 1) return setTodoId((prevTodoId) => prevTodoId - 1);
    return setTodoId(1);
  };

  const handleNextTodo = () => {
    setTodoId((prevTodoId) => prevTodoId + 1);
  };

  return (
    <>
      <h1>Todos - RTK-QUERY</h1>

      <pre>{JSON.stringify(todo)}</pre>
      <button onClick={handlePrevTodo}>Prev todo</button>
      <button onClick={handleNextTodo}>Nex todo</button>

      <h4>{isLoading ? "Loading..." : "Loaded"}</h4>
      <ul>
        {error ? (
          <h4>{error}</h4>
        ) : (
          todos.map((todo) => <li key={todo.id}>{todo.title}</li>)
        )}
      </ul>
    </>
  );
};
