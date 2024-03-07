//step1: 해당 액션과 관련된 액션타입을 참조합니다.
import { USER_LOGIN } from "../../constants/actionTypes";

//step2: 액션 함수 정의
export const userLogin = (token, loginUser) => ({
  type: USER_LOGIN,
  payload: { token, loginUser },
});
