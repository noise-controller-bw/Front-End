import { combineReducers } from "redux";
import loginReducer from "./loginReducer";
import postDataReducer from "./postDataReducer";
import registerReducer from "./registerReducer";

export default combineReducers({
  login: loginReducer,
  postData: postDataReducer,
  register: registerReducer
});
