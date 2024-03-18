import {
  CHAT_SEND_MSG,
  CHAT_RECEIVE_MSG,
  CHAT_CURRENT_CHANNEL,
} from "../../constants/actionTypes";

//현재 사용자가 입력한 신규 전송 메시지 저장
export const setSendMessage = (msg) => ({
  type: CHAT_SEND_MSG,
  payload: msg,
});

//수신 메시지 저장
export const setReceiveMessage = (msg) => ({
  type: CHAT_RECEIVE_MSG,
  payload: msg,
});

//채널 선택 정보 저장
export const setCurrentChannel = (channel) => ({
  type: CHAT_CURRENT_CHANNEL,
  payload: channel,
});
