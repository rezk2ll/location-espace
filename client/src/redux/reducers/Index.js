import { combineReducers } from "redux";
import userReducer from "./User";
import adminReducer from "./Admin";
import announcementReducer from "./announcement";

const rootReducer = combineReducers({
  adminReducer,
  userReducer,
  announcementReducer,
});
export default rootReducer
