import { SET_ANNOUNCEMENTS, LIST_ANNOUNCEMENTS} from '../types/announcement';

const initialState = {
    annoucementList: {},
    loaded: false,
    errors: []
}

const announcementReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_ANNOUNCEMENTS:
      return {
        ...state,
        annoucementList: payload,
        loaded: true
      };

    case LIST_ANNOUNCEMENTS:
      return { ...state };

    default:
      return state;
  }
}

export default announcementReducer;
