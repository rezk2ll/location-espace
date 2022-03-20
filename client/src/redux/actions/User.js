import api from '../../lib/api';
import { LOG_OUT, SET_LOADING, SET_ERROR, LOGIN, SET_USER, SET_USERS } from "../types/User";

export const login = (user) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING, payload: true });
    dispatch({ type: LOGIN, payload: user });
  }
  catch (err) {
    dispatch({ type: SET_ERROR, payload: err.response.data.msg });
  }
}

export const createUser = (newUser) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING, payload: true });
    dispatch({ type: SET_USER, payload: { ...newUser.user, token: newUser.token } });
  }
  catch (err) {
    dispatch({ type: SET_ERROR, payload: err.response.data.msg });
  }
}

export const logout = () => async (dispatch) => {
  dispatch({ type: LOG_OUT });
}

export const getCurrentUser = () => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING, payload: true });
    const res = await api.get("/api/user/current");
    dispatch({ type: SET_USER, payload: res.data });
  }
  catch (err) {
    dispatch({ type: SET_ERROR, payload: err });
  }
}

export const updatedUser = (user) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING, payload: true });
    await api.put(`/api/user/${user.id}`, user);
    dispatch(listUsers());
  }
  catch (err) {
    dispatch({ type: SET_ERROR, payload: err.response.data.msg });
  }
}

export const listUsers = () => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING, payload: true });
    const res = await api.get("/api/user/list");
    dispatch({ type: SET_USERS, payload: res.data });
    dispatch(listUsers());
  }
  catch (err) {
    dispatch({ type: SET_ERROR, payload: err.response.data.msg });
  }
}

export const deleteUser = (id) => async (dispatch) => {
  try {
    dispatch({ type: SET_LOADING, payload: true });
    await api.delete(`/api/user/${id}`);
    dispatch(listUsers());
  }
  catch (err) {
    dispatch({ type: SET_ERROR, payload: err.response.data.msg });
  }
}
