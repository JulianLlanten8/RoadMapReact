export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add TODO":
      return [...initialState, action.payload];

    case "[TODO] Remove TODO":
      return initialState.filter((todo) => todo.id !== action.payload);

    case "[TODO] Toggle TODO":
      return initialState.map((todo) =>
        todo.id === action.payload ? { ...todo, done: !todo.done } : todo
      );

    default:
      return initialState;
  }
  //lo siguiente es menos codigo sin el switch case
  /* if (action.type === "[TODO] Add TODO")
    return [...initialState, action.payload];

  if (action.type === "[TODO] Remove TODO")
    return initialState.filter((todo) => todo.id !== action.payload);

  if (action.type === "[TODO] Toggle TODO") {
    return initialState.map((todo) =>
      todo.id === action.payload ? { ...todo, done: !todo.done } : todo
    );
  }
  return initialState; */
};
