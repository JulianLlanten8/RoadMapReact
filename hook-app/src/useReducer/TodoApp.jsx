import { TodoList, TodoAdd } from "../components";
import { useAppTodo } from "../hooks/";

export const TodoApp = () => {
  const {
    todos,
    handleNewTodo,
    handleDeleteTodo,
    onToggleTodo,
    counterTodos,
    counterNotDoneTodos,
  } = useAppTodo();
  return (
    <>
      <h1>
        TodoApp : {counterTodos},{" "}
        <small>pendientes: {counterNotDoneTodos}</small>
      </h1>
      <hr />
      <main className="row">
        <div className="col-7">
          <TodoList
            todos={todos}
            onDeleteTodo={(id) => handleDeleteTodo(id)}
            onToggleTodo={onToggleTodo}
          />
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
