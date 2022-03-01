import authReducer from "./authReducer";
import errorReducer from "./errorReducer";
import sitesReducer from "./sitesReducer";

import { combineReducers } from "redux";
const rootReducer = combineReducers({
  auth: authReducer,
  error: errorReducer,
  sites: sitesReducer,
});
export default rootReducer;
