import React, { useEffect, useState, useReducer } from "react";

const UseEffectHook = () => {
  console.log("UseEffectHook 컴포넌트가 호출되었습니다.");

  //*DB호출*

  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    telephone: "",
  });

  const [userList, setUserList] = useState([]);

  //useEffect는 useState 아래에

  //useEffect 사용 시나리오1: 최초로 해당 컴포넌트가 렌더링 완료되는 시점
  //보통은 화면 UI가 모두 렌더링(마운팅)이 완료되면 백엔드에서 화면에 표시할 데이터를 가져오거나
  //화면내 특정값을 변경초기화할 때 주로 핻당 이벤트를 사용한다.
  //useEffect(실행함수, 변경감지데이터, 빈배열[]값을 할당한 경우는 최초 컴포넌트 랜더링 시점을 캐치한다.)
  useEffect(() => {
    console.log("useEffectHook 컴포넌트가 최초로 랜더링 되었습니다.");
    console.log(
      "최초 화면 랜더링시 필요한 데이터가 있다면 백엔드에서 데이터를 불러오세요."
    );

    //백엔드에서 데이터를 호출해서 결과값을 상태값으로 변경함

    //cleanup 함수를 호출하면 해당 컴포넌트가 사라지기 직전에 작업을 진행할 수 있다.
    return () => {
      //해당 컴포넌트가 종료되기 직전에 수행하는 작업기능 전달
    };
  }, []);

  const onUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const onSave = (e) => {
    setUserList([...userList, { ...user }]);
  };

  return (
    <div>
      <h1>함수형 컴포넌트 생애주기관리앱 - useEffect 훅 사용하기</h1>

      <div>
        <h3>사용자 정보 입력영역</h3>
        <input value={user.name} name="name" onChange={onUser}></input>
        <input value={user.email} name="email" onChange={onUser}></input>
        <input value={user.password} name="password" onChange={onUser}></input>
        <input
          value={user.telephone}
          name="telephone"
          onChange={onUser}
        ></input>
        <br></br>
        <button onClick={onSave}>저장</button>
        <h3>사용자 입력정보 출력영역</h3>
        <div>이름:{user.name}</div>
        <div>이메일:{user.email}</div>
        <div>암호:{user.password}</div>
        <div>전화번호:{user.telephone}</div>
        <hr></hr>총 사용자 등록수:{userList.length} 명
      </div>
    </div>
  );
};

export default UseEffectHook;
