import React, { useState } from "react";

const CounterFunctionComponent = () => {
  //자동 증감하는 숫자 저장용 스테이트 값 정의 및 초기값 할당
  const [count, setCount] = useState(100);

  const [username, setUserName] = useState("최유진");

  const [goods, setGoods] = useState([
    { id: 1, productName: "제품명1", price: 5000 },
    { id: 2, productName: "제품명2", price: 5000 },
  ]);

  const [isLoggined, setIsLoggined] = useState(true);

  const [user, setUser] = useState({ userId: "eddy", userName: "강창훈" });

  //   증가버튼 이벤트 핸들러 함수
  const handleIncrease = () => {
    console.log("증가 버튼 클릭");

    // setCount(count+1);
    setCount((prevCount) => prevCount + 1);
  };

  //   감소버튼 이벤트 핸들러 함수
  const handleDecrease = () => {
    console.log("감소 버튼 클릭");
    setCount(count - 1);
    // setCount((prevCount)=>prevCount -1);
  };

  return (
    <div>
      <h1>카운터 상태값 표시:{count}</h1>
      <button onClick={handleIncrease}>1증가</button>
      <button onClick={handleDecrease}>1감소</button>
    </div>
  );
};

export default CounterFunctionComponent;
