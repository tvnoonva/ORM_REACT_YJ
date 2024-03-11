import React from "react";

//connect 함수를 이용해 전역 데이터 호출
import { connect } from "react-redux";

const Profile2 = (props) => {
  return (
    <div>
      <h1>프로필 페이지</h1>
      <div>
        <h2>스토어 전역정보 기반</h2>
        <img src={props.loginUser.profile_img_path}></img>
        <br></br>
        <h4>{props.loginUser.name}님</h4>
        <h4>메일주소:{props.loginUser.email}</h4>
      </div>
    </div>
  );
};

//전역데이터 속성과 값을 해당 컴포넌트에 props 하위  속성에 연결해주는 함수
const mapStateToProps = (state) => {
  const { token, loginUser } = state.Auth;
  return { token, loginUser };
};

export default connect(mapStateToProps)(Profile2);
