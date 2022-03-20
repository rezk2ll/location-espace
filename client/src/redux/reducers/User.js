import {
  SET_ERROR,
  SET_USER,
  LOGIN,
  LOG_OUT,
  SET_USERS,
  SET_LOADING,
} from '../types/User';

const initialState = {
  userList: [],
  user: {},
  load: false,
  errors: [],
  isAuthenticated: false,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return { ...state, load: payload };

    case LOGIN:
      localStorage.setItem('token', payload.token);

      return { ...state, load: true, user: payload.user, isAuthenticated: true };

    case SET_USER:
      localStorage.setItem('token', payload.token);

      console.log(payload);

      return { ...state, load: true, user: payload, isAuthenticated: true };

    case SET_USERS:
      return { ...state, load: true, userList: payload };

    case LOG_OUT:
      localStorage.removeItem('token');
      return {
        user: [],
        annonceList: {},
        load: false,
        errors: [],
        isAuthenticated: false,
      };
    case SET_ERROR:
      return { ...state, load: false, errors: payload };

    default:
      return state;
  }
};
export default userReducer;
