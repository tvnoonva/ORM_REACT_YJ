import React, { Fragment } from "react";

//리액트에서는 이미지를 반드시 경로로 참조해서 사용한다.
import logo from "./logo.svg";

//스타일 파일을 직접 만들어서 외부에서 참조 가능
import "./App.css";

function App() {
  //JSX영역 요소에 대한 기능 로직을 구현하는 영역
  //자바스크립트로 기능 구현하는 영역

  const userName = "강창훈1";
  let userRole = "개발자";

  //해당 컴포넌트에서만 사용하는 공통스타일 정의 -엠베디드 스타일 적용방식
  //JSX에 대한 임베디드 스타일은 객체정의 방식으로 스타일 속성과 값을 정의한다
  const myStyle = {
    backgroundColor: "blue",
    color: "white",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16,
  };

  return (
    //화면요소를 JSX문법으로 표현하는 영역
    <>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"></img>

          {/* jsx요소에 직접 인라이트 스타일을 적용하려면 {{}} 구조안에 명시해야함 */}
          <p style={{ backgroundColor: "blue", color: "red" }}>
            {userRole} {userName}님 방문을 환영합니다.
          </p>

          {/* jsx요소는 반드시 홑태그라도 닫는 태그가 필요하다 */}
          <br></br>

          {userName === "강창훈" ? (
            <h4>{userName}님 반갑습니다.</h4>
          ) : (
            <h4>게스트님 반갑습니다.</h4>
          )}

          <br />

          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

          {/* 개발자정의 클래스 적용하기 className이란 속성으로 클래스명 할당 적용 */}
          <p className="Sample">클래스 적용 샘플</p>
        </header>
      </div>

      {/* 임베디드 스타일 방식 객체로 정의된 스타일 적용할때 */}
      <div style={myStyle}>안녕하세요.</div>
    </>
  );
}

export default App;
