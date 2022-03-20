import { FAIL, GET_ANNONCE, LOAD, LOG_OUT, SIGN_IN, SIGN_UP } from "../actions types/User";

const initialState = {
    user: [],
    annonceList: {},
    load: false,
    errors: [],
    isAuthuser: false,
  };
  const userReducer = (state = initialState, { type, payload }) => {
    switch (type) {
      case LOAD:
        return { ...state, load: true };
      case SIGN_IN:
        localStorage.setItem("token", payload.token);
        return { ...state, load: false, user: payload.user, isAuthuser: true };
      case SIGN_UP:
        localStorage.setItem("token", payload.token);
        return { ...state, load: false, user: payload.user, isAuthuser: true };
        case GET_ANNONCE:
          return { ...state, load: false, user: payload.user  };
      case LOG_OUT:
        localStorage.removeItem("token");
        return {
          user: [],
          annonceList: {},
          load: false,
          errors: [],
          isAuthuser: false,
        };
      case FAIL:
        return { ...state, load: false, errors: payload };
  
      default:
        return state;
    }
  };
  export default userReducer;
  