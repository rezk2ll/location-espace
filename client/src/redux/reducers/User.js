import { FAIL, LOAD, LOG_OUT, SIGN_IN, SIGN_UP } from "../actions types/User";

const initialState = {
    user: {},
    load: false,
    errors: [],
    isAuth: false,
  };
  const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOAD:
        return { ...state, load: true };
      case SIGN_IN:
        localStorage.setItem("token", payload.token);
        return { ...state, load: false, user: payload.user, isAuth: true };
      case SIGN_UP:
        localStorage.setItem("token", payload.token);
        return { ...state, load: false, user: payload.user, isAuth: true };
      case LOG_OUT:
        localStorage.removeItem("token");
        return {
          user: {},
          load: false,
          errors: [],
          isAuth: false,
        };
      case FAIL:
        return { ...state, load: false, errors: payload };
  
      default:
        return state;
    }
  };
  export default userReducer;
  