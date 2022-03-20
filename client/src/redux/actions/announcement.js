import { SET_ANNOUNCEMENTS, SET_ERROR } from '../types/announcement';
import api from '../../lib/api';

export const listAnnouncements = () => async (dispatch) => {
  try {
    let result = await api.get("/api/announcement");
    dispatch({ type: SET_ANNOUNCEMENTS, payload: result.data });
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.response });
  }
}

export const addAnnouncement = (newAnnoncement) => async (dispatch) => {
  try {
    await api.post("/api/announcement", newAnnoncement);
    dispatch(listAnnouncements());
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.response });
  }
}

export const deleteAnnouncement = (id) => async (dispatch) => {
  try {
    await api.delete(`/api/announcement/${id}`);
    dispatch(listAnnouncements());
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.response });
  }
}

export const updateAnnouncement = (id, newAnnoncement) => async (dispatch) => {
  try {
    await api.put(`/api/announcement/${id}`, newAnnoncement);
    dispatch(listAnnouncements());
  } catch (error) {
    dispatch({ type: SET_ERROR, payload: error.response });
  }
}
