const initialState = [
  {
    id: 1,
    todo: "Recolectar las piedras del infinito",
    done: false,
  },
];

const todoReducer = (state = initialState, action = {}) => {
  if (action?.type === "add") {
    return [...state, action.payload];
  }
  return state;
};

let todos = todoReducer();

const newTodo = {
  id: 2,
  todo: "Recolectar las piedras del infinito",
  done: false,
};

const AddTodoAction = {
  type: "add",
  payload: newTodo,
};

todos = todoReducer(todos, AddTodoAction);

console.log(todos);
