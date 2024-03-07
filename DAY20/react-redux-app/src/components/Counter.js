import React from "react";

//리덕스 스토어의 전역데이터 todoCount 값을 Subscribe
import { useSelector } from "react-redux";

const Counter = () => {
  //useSelector() 훅은 store 저장소를 접근하기 위한 훅이고
  //(state는 전역저장소 공간에 있는 전체 globalState 값을 의미합니다.)
  //전역공간 특정 업무에 관련된 전역데이터 접근은 관련 리듀서함수와 리듀서함수에서 관리하는 데이터구조를 이용
  const todoCount = useSelector((state) => state.Todo.todoCount);

  return (
    <div>
      <h1>할일건수:{todoCount}건</h1>
    </div>
  );
};

export default Counter;
