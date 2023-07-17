export const todoReducer = (initialState = [], action) => {
  switch (action.type) {
    case "[TODO] Add TODO":
      return [...initialState, action.payload];


    case "[TODO] Remove TODO":
      return initialState.filter((todo) => todo.id !== action.payload);

    default:
      return initialState;
  }
};
