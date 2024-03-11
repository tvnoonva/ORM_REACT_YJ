import { USER_LOGIN } from "../../constants/actionTypes";

//구조 정의
const INIT_STATE = {
  token: "",
  loginUser: {},
};

//action type이 USER_LOGIN이면 로그인 정보를 RETURN
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

export default Auth;
