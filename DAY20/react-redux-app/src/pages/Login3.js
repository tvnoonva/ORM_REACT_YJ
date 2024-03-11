import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";

//redux connect 함수 사용
//connect 함수는 전역 데이터를 사용하려는 특정 컴토넌트와 전역 데이터 관리기능을 연결해주는 함수
//전역데이터값을 해당 컴포넌트의 props 하위 속성으로 제공하며 손쉽게 컴포넌트내에서 전역데이터에 접근할 수 있게 하거나
//액션 함수를 호출하는데 dispatch훅을 사용하지 않고도 connect로 액션 함수 자체를 해당 컴포넌트 props 하위 속성으로
//등록할 수 있어 빠르고 쉽고 직관적으로 전역데이터를 업데이트 가능
import { connect } from "react-redux";

//redux 전역공간에 데이터를 반영하려면 액션 함수 필요
//리덕스 폴더안에 액션통합모듈을 참조, 관련 액션함수(userLogin참조
import { loginUser, apiError } from "../redux/actions";

const Login3 = (props) => {
  const navigate = useNavigate();
  //   const globalDispatch = useDispatch();

  const [login, setLogin] = useState({ email: "", password: "" });

  const onChangeLogin = (ev) => {
    setLogin({ ...login, [ev.target.name]: ev.target.value });
  };

  const onLogin = (e) => {
    //saga 미들웨어 기반 로그인처리 기능 적용
    console.log("saga미들웨어 호출", login.email, login.password);
    props.loginUser(login.email, login.password, navigate);

    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onLogin}>
        메일주소:{" "}
        <input name="email" value={user.email} onChange={onChangeLogin}></input>
        <br></br>
        비밀번호:{" "}
        <input
          type="password"
          name="password"
          value={user.password}
          onChange={onChangeLogin}
        ></input>
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

//전역데이터 속성과 값을 해당 컴포넌트에 props하위 속성에 연결해주는 함수
const mapStateToProps = (state) => {
  const { token, loginUser } = state.Auth;
  return { token, loginUser };
};

//export default Login3

//redux connect()함수를 호출하고 (컴포넌트명) 지정해주면 전역데이터 공간과 해당 컴포넌트를 연결할수 있다.
//connect(*전역데이터를 해당 컴포넌트에 props속성으로 바인딩해주는 합수 정의, 각종 액션함수를 지정해주면 해당 액션함수가 prop에 하위함수로 제공)
export default connect(mapStateToProps, { loginUser, apiError })(Login3);
