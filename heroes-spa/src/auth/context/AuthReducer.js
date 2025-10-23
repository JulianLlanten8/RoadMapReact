import { types } from "../types/types";

const initialState = {
  logged: false,
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.login:
      return {
        ...state,
        logged: true,
        user: action.payload,
      };
    case types.logout:
      return {
        checking: false,
      };
    case types.checkingFinish:
      return {
        ...state,
        checking: false,
      };
    case types.startChecking:
      return {
        ...state,
        checking: true,
      };
    default:
      return state;
  }
};
