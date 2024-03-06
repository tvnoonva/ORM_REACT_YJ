//layout 액션파일에서는 채팅앱내의 모든 레이아웃 전역설정정보를 관리한다

import { CHAT_USER } from "../../constants/actionTypes";

//액션함수 정의
//전역데이터 공간에서 제공해주는 모든 채팅대상자 목록을 조회
export const setActiveTab = () => ({
  type: CHAT_USER,
});
