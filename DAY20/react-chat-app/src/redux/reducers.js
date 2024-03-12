import { combineReducers } from "redux";

//리듀서 참조
import Auth from "./auth/reducer";
import Layout from "./layout/reducer";

export default combineReducers({ Auth, Layout });
