import { combineReducers } from "redux";

// import Login from './auth/reducer';

import Layout from "./layout/reducer";
import Chat from "./chat/reducer";

export default combineReducers({ Layout, Chat });
