import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/actions";

const Login = () => {
  const navigate = useNavigate();
  const globalDispatch = useDispatch();

  const [user, setUser] = useState({ email: "", password: "" });

  const onChangeLogin = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onLogin = (e) => {
    //login restful
    axios
      .post("http://localhost:3005/api/member/login", user)
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

export default Login;
