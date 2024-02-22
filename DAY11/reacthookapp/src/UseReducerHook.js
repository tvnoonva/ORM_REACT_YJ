import React, { useReducer } from "react";
import counterReducer from "./counterReducer";

const UseReducerHook = () => {
  //리듀서 훅의 상태값 구조 정의 및 초기값을 할당하고
  //디스패치(UI요소에서 해당 리듀서 함수를 실행시켜주는 커맨드 역할)와
  //리듀서 함수(관련 상태값을 CASBY로 변경하고 로직을 구현)를 정의한다.

  const [count, dispatchCount] = useReducer(counterReducer, 0);

  return (
    <div>
      <h1>useReducer훅 사용하기</h1>

      <h3>카운터:{count}</h3>
      <button onClick={() => dispatchCount({ type: "INCREASE" })}>증가</button>
      <button onClick={() => dispatchCount({ type: "DECREASE" })}>감소</button>
      <button onClick={() => dispatchCount({ type: "INIT" })}>초기화</button>
    </div>
  );
};

export default UseReducerHook;
