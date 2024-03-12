import {
  SET_ACTIVE_TAB,
  OPEN_USER_PROFILE_SIDEBAR,
  SET_LAYOUT_MODE,
} from "../../constants/actionTypes";

const INIT_STATE = {
  activeTab: "chat",
  userSidebar: false,
  layoutMode: "light",
};

//리듀서 함수 정의
const Layout = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return { ...state, activeTab: action.payload };
    case OPEN_USER_PROFILE_SIDEBAR:
      return { ...state, userSidebar: true };
    case SET_LAYOUT_MODE:
      return { ...state, layoutMode: action.payload };
    default:
      return state;
  }
};

export default Layout;
