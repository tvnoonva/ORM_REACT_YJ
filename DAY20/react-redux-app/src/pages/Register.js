import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const navigate = useNavigate();

  const [entryUser, setEntryUser] = useState({
    email: "",
    password: "",
    name: "",
  });

  const onEntryChange = (e) => {
    setEntryUser({ ...entryUser, [e.target.name]: e.target.value });
  };

  const onEntry = (e) => {
    //entry restful
    //프론트엔드 data 구조와 백엔드 restful 데이터 구조, 속성명이 다를 경우
    //백엔드 수신 데이터 구조와 동일하게 json data를 정의해서 back으로 보내줘야 한다.
    axios
      .post("http://localhost:3005/api/member/entry", entryUser)
      .then((res) => {
        console.log("결과값:", res.data);
        if (res.data.code == "200") {
          alert("entry success");
          navigate("/login");
        }
      })
      .catch((err) => {
        console.log(err);
      });

    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onEntry}>
        메일주소:{" "}
        <input
          name="email"
          value={entryUser.email}
          onChange={onEntryChange}
        ></input>
        <br></br>
        이름:{" "}
        <input
          name="name"
          value={entryUser.name}
          onChange={onEntryChange}
        ></input>
        <br></br>
        비밀번호:{" "}
        <input
          type="password"
          name="password"
          value={entryUser.password}
          onChange={onEntryChange}
        ></input>
        <button type="submit">가입</button>
      </form>
    </div>
  );
};

export default Register;
