//step1: 해당 액션과 관련된 액션타입을 참조합니다.
import {
  USER_LOGIN,
  API_FAILED,
  LOGIN_USER,
} from "../../constants/actionTypes";

//step2: 액션 함수 정의
export const userLogin = (token, loginUser) => ({
  type: USER_LOGIN,
  payload: { token, loginUser },
});

//실제 사용자 로그인처리 액션함수:사가(axios기능포함)함수
export const loginUser = (email, password, navigate) => ({
  type: LOGIN_USER,
  payload: { email, password, navigate },
});

//백엔드 인증통신 에러결과 처리를 위한 액션함수
export const apiError = (error) => ({
  type: API_FAILED,
  payload: error,
});
