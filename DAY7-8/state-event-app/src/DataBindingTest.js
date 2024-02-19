import React, { useState } from "react";

const DataBindingTest = () => {
  const [message, setMessage] = useState("안녕하세요.");

  //메시지 입력UI요소의 입력값이 변경될때마다 입력 이벤트를 처리해주는 핸들러 함수
  const handleMessage = (e) => {
    console.log("입력 이벤트 발생", e.target.value);
    setMessage(e.target.value);
  };

  //데이터바인딩 기법을 통해 UI를 개발하는 MVVM 패턴에서 가장 중요한 점은
  //데이터의 구조와 데이터의 값에 따라 UI가 제어되기 때문에
  //화면에서/컴포넌트에서 사용하는 데이터의 구조를 먼저 정의하고
  //관련 UI요소에 적절한 데이터 바인딩이 이루어져야합니다.

  const handleInit = () => {
    setMessage("");
  };

  return (
    <div>
      메시지값:<p>{message}</p>
      <hr></hr>
      {/* onChange 이벤트는 입력요소의 값이 바뀔때마다 발생하는 이벤트
      텍스트박스에 입력값이 바뀔때마다 바인딩된 데이터소스(DATA State)를 변경해줘야 한다. */}
      <input
        type="text"
        name="message"
        placeholder="메시지를 입력해주세요."
        value={message}
        onChange={handleMessage}
      />
      <button onClick={handleInit}>초기화</button>
    </div>
  );
};

export default DataBindingTest;
