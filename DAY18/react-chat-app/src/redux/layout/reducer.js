import { SET_ACTIVE_TAB } from "../../constants/actionTypes";

//레이아웃 전역상태값 구조 정의 및 초기값 세팅
//sidemenubar에서 props로 접근 가능
const INIT_STATE = {
  activeTab: "chat", //좌측 매뉴얼 선택정보
  userSidebar: false, //우측 채팅대상자의 프로필정보 표시여부
  conversationName: "Doris Brown", //기본 채팅대상ㅈ자 이름
  layoutMode: "light", //밤낮 레이아웃 테마 적용
};

//layout 전역데이터 처리 리듀서 함수
const Layout = (state = INIT_STATE, action) => {
  switch (action.type) {
    case SET_ACTIVE_TAB:
      return {
        ...state,
        activeTab: action.payload,
      };
    default:
      return state;
  }
};

export default Layout;
