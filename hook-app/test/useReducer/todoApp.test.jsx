import { render, screen } from "@testing-library/react";
import { TodoApp } from "../../src/useReducer/TodoApp";
import { useAppTodo } from "../../src/hooks/useAppTodo";

jest.mock("../../src/hooks/useAppTodo");

describe("Pruebas en el componente <TodoApp />", () => {
  useAppTodo.mockReturnValue({
    todos: [
      {
        id: 1,
        desc: "Aprender",
        done: true,
      },
      {
        id: 2,
        desc: "Aprendera",
        done: false,
      },
    ],
    counterTodos: 1,
    counterNotDoneTodos: 1,
    onToggleTodo: jest.fn(),
    handleNewTodo: jest.fn(),
    handleDeleteTodo: jest.fn(),
  });

  test("Debe de mostrarse correctamente", () => {
    render(<TodoApp />);
    screen.debug();
    expect(screen.getByText("Aprender").toBeTruthy());
    expect(screen.getByText("Aprendera").toBeTruthy());
  });
});
