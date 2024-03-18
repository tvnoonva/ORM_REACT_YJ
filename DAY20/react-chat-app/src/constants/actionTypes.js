//login 액션 타입
export const USER_LOGIN = "USER_LOGIN";

//layout 액션 타입
//좌측 메뉴바 컴포넌트 표시 관리 전역 데이터
export const SET_ACTIVE_TAB = "SET_ACTIVE_TAB";

//채팅화면 상단 채팅대상자 아이콘 클릭시 해당 대상자 프로필 우측 사이드바에 open
export const OPEN_USER_PROFILE_SIDEBAR = "OPEN_USER_PROFILE_SIDEBAR";

//테마설정
export const SET_LAYOUT_MODE = "SET_LAYOUT_MODE";

//--------------------------
//채팅 관련 액션 타입

//서버소켓 메시지 전송시 전역에 전송한 메시지 데이터 저장
export const CHAT_SEND_MSG = "CHAT_SEND_MSG";

//서버소켓 메시지 수신시 전역에 메시지 데이터 저장
export const CHAT_RECEIVE_MSG = "CHAT_RECEIVE_MSG";

//내 채널목록에서 해당 채팅방 채널 접속 및 최신메시지 출력
export const CHAT_CURRENT_CHANNEL = "CHAT_CURRENT_CHANNEL";
