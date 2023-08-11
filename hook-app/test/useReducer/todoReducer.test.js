import { todoReducer } from "../../src/useReducer/todoReducer";

describe("Pruebas en todoReducer", () => {
  const initialState = [{ id: 1, description: "Demo todo", done: false }];

  test("Debe de regresar el estado inicial", () => {
    const newState = todoReducer(initialState, {});

    expect(newState).toBe(initialState);
  });

  test("Debe de agreagar un todo", () => {
    const action = {
      type: "[TODO] Add TODO",
      payload: { id: 2, description: "Nuevo todo", done: false },
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(2);
    expect(newState).toContain(action.payload);
  });

  test("Debe eliminar un todo", () => {
    const action = {
      type: "[TODO] Remove TODO",
      payload: 1,
    };
    const newState = todoReducer(initialState, action);
    expect(newState.length).toBe(0);
    expect(newState).not.toContain(action.payload);
  });

  test("Debe de realizar el toggle de un todo", () => {
    const action = {
      type: "[TODO] Toggle TODO",
      payload: 1,
    };

    // Alternar el TODO que se le da la accion de clic a echo o no echo
    const newState = todoReducer(initialState, action);
    expect(newState.find((todo) => todo.id === action.payload).done).toBe(true);
    const State2 = todoReducer(newState, action);
    expect(State2.find((todo) => todo.id === action.payload).done).toBe(false);
  });
});
