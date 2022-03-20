import { FAIL, GET_USER, LOAD, LOG_OUT, SIGN_IN } from "../types/Admin";

const initialState = {
  admin: [],
  userList: {},
  load: false,
  errors: [],
  isAuth: false,
};

const adminReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case LOAD:
      return { ...state, load: true };
    case SIGN_IN:
      localStorage.setItem("token", payload.token);
      return { ...state, load: false, admin: payload.admin, isAuth: true };
      case GET_USER:
        return { ...state, load: false, admin: payload.admin  };
    // case SIGN_UP:
    //   localStorage.setItem("token", payload.token);
    //   return { ...state, load: false, admin: payload.admin, isAuth: true };
      // case LOAD:
      // return { ...state, load: true };
    case LOG_OUT:
      localStorage.removeItem("token");
      return {
        admin: [],
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
export default adminReducer;
