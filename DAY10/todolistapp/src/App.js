import React, { useState } from "react";
import "./App.css";

import TodoTemplate from "./TodoTemplate";
import TodoList from "./TodoList";
import TodoRegist from "./TodoRegist";

function App() {
  //할일 목록 데이터 구조 정의 및 초기값 설정
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "백엔드 기술 습득하기",
      desc: "node.js,express,mvc",
      checked: false,
    },
    {
      id: 2,
      text: "클라우드 기술 습득하기",
      desc: "devops,iaas,paas,faas,caas,aws...",
      checked: false,
    },
    {
      id: 3,
      text: "프론트엔드 기술 습득하기",
      desc: "html,css,react cra,next js...",
      checked: false,
    },
  ]);

  //할일 고유번호 데이터 정의 및 초기값 할당(원시타입)
  const [nextId, setNextId] = useState(4);

  //할일등록 이벤트 처리함수 정의
  //처리해야할 데이터가 존재하는 컨포넌트에서 이벤트 처리함수를 정의하고 자식요소로 props를 통해 전달할 수 있다.
  //자식요소에서는 전달된 이벤트 함수를 실행시킬수 있고 해당함수는 부모 컴포넌트의 데이터를 변경시킨다.
  const onInsert = (text, desc) => {
    // setTodos(...todos,{id:0,text,desc,checked:false})
    setTodos(todos.concat({ id: nextId, text, desc, checked: false }));

    //다음 채번번호 증가처리
    setNextId(nextId + 1);
  };

  const onRemove = (id) => {
    //id가 일치하는 값을 제외한 todos 조회
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  //체크박스 클릭시 상태 변경(체크/체크해제)
  const onSelect = (id) => {
    //단일 아이템 상태 변경이기 때문에 setTodos()호출 후 특정 아이템을 검색, 속성값을 변경한다.
    //todo목록데이터의 map()메소드를 호출해서 배열복사본을 만들고 배열복사본을 반복해서
    //동일한 id값이 있는 객체를 찾은 후 해당 객체 데이터 deepcopy해서 신규 객체를 배열에 반환하고
    //그렇지 않은 객체는 기존 shallow copy본을 반환한다.
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <div className="App">
      <h1>총 할일 건수:{todos.length} 건</h1>
      <TodoTemplate>
        <TodoRegist onInsert={onInsert}></TodoRegist>
        <TodoList
          todos={todos}
          onRemove={onRemove}
          onSelect={onSelect}
        ></TodoList>
      </TodoTemplate>
    </div>
  );
}

export default App;
