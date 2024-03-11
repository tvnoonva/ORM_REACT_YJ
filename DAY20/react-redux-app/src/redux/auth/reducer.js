//step1: 관련된 액션 타입 참조
import { USER_LOGIN, LOGIN_USER } from "../../constants/actionTypes";

//step2: 전역데이터 저장소(store)에 생성할 기본 전역데이터 구조를 정의하고 초기값 정의
const INIT_STATE = {
  token: "",
  loginUser: {},
};

//step3: 리듀서 함수를 정의해서 액션타입별로 전역데이터 공간에 데이터를 반영한다.
const Auth = (state = INIT_STATE, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        token: action.payload.token,
        loginUser: action.payload.loginUser,
      };
    default:
      return { ...state };
  }
};

//step4: export
export default Auth;
