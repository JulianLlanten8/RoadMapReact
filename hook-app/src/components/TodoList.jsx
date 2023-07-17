import PropTypes from "prop-types";
import { TodoListItem } from "./TodoListItem";

export const TodoList = ({ todos = [], onDeleteTodo }) => {
  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <TodoListItem
          key={todo.id}
          todo={todo}
          onDeleteTodo={(id) => onDeleteTodo(id)}
        />
      ))}
    </ul>
  );
};

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  onDeleteTodo: PropTypes.func.isRequired,
};
