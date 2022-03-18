import { combineReducers } from "redux";
import userReducer from "./User";
import adminReducer from "./Admin";

const rootReducer = combineReducers({
  adminReducer,
  userReducer,
});
export default rootReducer
