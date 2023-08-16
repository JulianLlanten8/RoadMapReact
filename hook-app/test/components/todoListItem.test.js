import { fireEvent, render, screen } from "@testing-library/react";
import { TodoListItem } from "../../src/components";

describe("Pruebas en el componente <TodoListItem/>", () => {
  const todo = {
    id: 1,
    description: "Demo todo",
    done: false,
  };
  const onDeleteTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("Debe de mostrar el TODO pendiente de completar", () => {
    render(
      <TodoListItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );
    const liElement = screen.getByRole("listitem");
    expect(liElement.className).toBe(
      "list-group-item d-flex justify-content-between"
    );
    const spanElement = screen.getByRole("span");
    expect(spanElement.className).toContain("align-self-center cursor-pointer");
    expect(spanElement.className).not.toContain("text-decoration-line-through");
  });

  test("Debe de mostrar el TODO completado", () => {
    todo.done = true;
    render(
      <TodoListItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );
    const spanElement = screen.getByRole("span");
    expect(spanElement.className).toContain("text-decoration-line-through");
  });

  test("Span debe de llamar el toggle TODO cuando se hace onClick", () => {
    render(
      <TodoListItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const spanElement = screen.getByRole("span");
    fireEvent.click(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });
  test("El Botton debe de llamar el onDeleteTodo", () => {
    render(
      <TodoListItem
        todo={todo}
        onDeleteTodo={onDeleteTodoMock}
        onToggleTodo={onToggleTodoMock}
      />
    );

    const buttonElement = screen.getByRole("button");
    expect(buttonElement.className).toBe("btn btn-danger");
    fireEvent.click(buttonElement);

    expect(onDeleteTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
