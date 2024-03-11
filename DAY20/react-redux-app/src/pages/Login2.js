import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

//redux전역데이터 공간에 데이터를 반영하려면 useDispatch라는 훅을 참조합니다.
import { connect } from "react-redux";

//redux 전역공간에 데이터를 반영하려면 반드시 액션함수를 참조해야합니다.
//리덕스 폴더안에 액션통합모듈을 참조하고 관련 액션함수(userLogin)를 참조합니다.
import { userLogin } from "../redux/actions";

const Login2 = (props) => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({ email: "", password: "" });

  const onChangeLogin = (ev) => {
    setLogin({ ...login, [ev.target.name]: ev.target.value });
  };

  //로그인 처리 이벤트 처리함수
  const onLogin = (e) => {
    //axios로 백엔드 로그인 RESTful API 호출하기
    axios
      .post("http://localhost:3005/api/member/login", login)
      .then((res) => {
        console.log("결과값:", res.data);
        if (res.data.code == "200") {
          //웹브라우저 로컬스토리지 이용
          window.localStorage.setItem("token", res.data.data.token);

          //redux 전역 데이터 store 이용
          globalDispatch(
            userLogin(res.data.data.token, res.data.data.loginUser)
          );

          alert("login access");
          navigate("/profile");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onLogin}>
        메일주소:
        <input name="email" value={login.email} onChange={onChangeLogin} />
        <br />
        암호:
        <input
          type="password"
          name="password"
          value={login.password}
          onChange={onChangeLogin}
        />
        <br />
        <button type="submit">로그인</button>
      </form>
    </div>
  );
};

//export default Login2;

//connect(mapStateToProps, mapDispatchToProps)(Home);
//mapStateToProps함수의 용도는 리덕스 전역상태공간에 저장된 특정 전역 데이터 (Layout) 값을 가져와
//현재 컴포넌터의 props의 하위속성으로 값을 제공합니다.
//mapDispatchToProps는 전역공간의 특정 상태값을 변경해주는 액션함수를 현재 컴포넌트의 props에 하위속성으로 제공합니다.

//전역데이터를 해당 컴포넌트의 props속성으로 제공하는 기능제공
//state는 전역데이터 저장소를 의미
const mapStateToProps = (state) => {
  const { token, loginUser } = state.Auth;
  return { token, loginUser };
};

export default connect(mapStateToProps, { userLogin })(Login2);
