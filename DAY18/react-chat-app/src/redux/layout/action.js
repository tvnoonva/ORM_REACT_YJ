//layout 액션파일에서는 채팅앱내의 모든 레이아웃 전역설정정보를 관리한다

import { SET_ACTIVE_TAB } from "../../constants/actionTypes";

//액션함수 정의
export const setActiveTab = (tabId) => ({
  type: SET_ACTIVE_TAB,
  payload: tabId,
});
