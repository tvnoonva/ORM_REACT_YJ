import {
  SET_ACTIVE_TAB,
  OPEN_USER_PROFILE_SIDEBAR,
  SET_LAYOUT_MODE,
} from "../../constants/actionTypes";

export const setActiveTab = (tabId) => ({
  type: SET_ACTIVE_TAB,
  payload: tabId,
});

//전역데이터를 Boolean형 타입으로 관리하기 때문에 값을 전달할 필요 없음
//클릭 이벤트 발생시 boolean값을 반대로 변경하면 ok
export const openUserSidebar = () => ({ type: OPEN_USER_PROFILE_SIDEBAR });

export const changeLayoutMode = (layoutMode) => ({
  type: SET_LAYOUT_MODE,
  payload: layoutMode,
});
