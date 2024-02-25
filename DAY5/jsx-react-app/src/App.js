import React, { useState } from "react";
import "./App.css";

//자식컴포넌트 참조하기

//함수형 자식 컴포넌트 참조
import FChild from "./FunctionChild";

//클래스형 자식 컴포넌트 참조
import CChild from "./ClassChild";

//내프로필 컴포넌트 참조하기
import Myprofile from "./Profile";

import CounterFunction from "./CounterFunctionComponent";
import Counterclass from "./CounterClassComponent";

//함수형 컴포넌트 생성하기
//리액트 UI컴포넌트는 반환값으로 JSX UI요소정보를 반환하여 최종 웹브라우저에 UI를 표현합니다.
//JSX UI요소를 제어하기 위해 함수내에 기능구현 영역에서 필요한 데이터와 이벤트를 처리합니다.
function App() {
  //기능구현코드
  //해당 컴포넌트의 state(로컬데이터)값과 jsx영역내 ui요소간 데이터 바인딩을 통해
  //데이터 바인딩 기법(MVVM패턴기반)으로 UI요소와 데이터를 편리하게 관리한다

  //샘플용 로컬 문자열 테스트 데이터(state) 정의 및 초기값 할당하기
  const [sample, setSample] = useState("샘플데이터");

  //사용자정보 JSON 데이터 상태값 정의 및 할당
  const [user, setUser] = useState({
    userid: "gabriel",
    name: "가브리엘",
    email: "eddy@msoftware.co.kr",
    telephone: "010-1111-1111",
    address: "경기도 성남시",
  });

  return (
    <div className="App">
      <h1>안녕하세요. 엠소프트웨어 방문을 환영합니다{sample}</h1>
      {/* 각종 UI컴포넌트의 반환결과값은 jsx요소
      참조한 UI는 결국 부모 컴포넌트 jsx영역에서 사용 */}

      {/* 함수형 자식 컴포넌트 결과물(jsx요소)표시하기 */}
      <FChild
        companyName="엠소프트웨어"
        telephone="010-1112-1231"
        address="서울시 테헤란로"
        sampleData={sample}
      >
        우리회사소개
      </FChild>

      {/* 클래스형 자식 컴포넌트 결과물(jsx요소)표시하기 */}
      <CChild
        deptName="개발1팀"
        deptRole="협업툴솔루션개발"
        employeee={10}
        sampleData={sample}
      >
        개발팀소개
      </CChild>

      {/* 내프로필 자식 컴포넌트 표시하기 */}
      <Myprofile
        userid="eddy"
        name="강창훈"
        email="dey@test.co.kr"
        telephone="010-1231-1231"
        age="30"
      >
        내 소개 페이지
      </Myprofile>

      {/* 내프로필 자식 컴포넌트 표시하기 */}
      <Myprofile
        userid={user.userid}
        name={user.name}
        email={user.email}
        telephone={user.telephone}
        age="마흔"
      >
        스테이기반 내 소개 페이지
      </Myprofile>

      <CounterFunction></CounterFunction>
      <Counterclass></Counterclass>
    </div>
  );
}

export default App;
