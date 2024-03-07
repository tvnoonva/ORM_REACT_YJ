import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const Profile = () => {
  //store 전역 데이터
  const user = useSelector((state) => state.Auth.loginUser);
  const token = useSelector((state) => state.Auth.token);

  //Restful 백엔드로 가져온 데이터
  const [userBack, setUserBack] = useState({});

  useEffect(() => {
    axios
      .get("http://localhost:3005/api/member/profile", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        console.log("결과값:", res.data);
        setUserBack(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>프로필 페이지</h1>
      <div>
        <h2>redux기반</h2>
        <img src={user.profile_img_path}></img>
        <br></br>
        <h4>{user.name}님</h4>
        <h4>메일주소:{user.email}</h4>
      </div>
      <hr></hr>
      <div>
        <h2>백엔드기반</h2>
        <img src={userBack.profile_img_path}></img>
        <br></br>
        <h4>{userBack.name}님</h4>
        <h4>메일주소:{userBack.email}</h4>
      </div>
    </div>
  );
};

export default Profile;
