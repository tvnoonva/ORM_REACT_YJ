import React, { useState } from "react";

const TodoRegist = ({ onInsert }) => {
  //데이터 구조 정의, 초기화
  const [todo, setTodo] = useState({ text: "", desc: "" });
  //속성값 변경 이벤트 처리 함수
  const onTodoChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    //app.js 컴포넌트에서 props로 전달된 onInsert()이벤트 처리함수를 호출해 TodoList에 데이터를 반환한다.
    onInsert(todo.text, todo.desc);
    setTodo({ text: "", desc: "" });

    //자바스크립트에서 UI요소 이벤트 파생을 취소시키는 함수
    //현재 발생한 e(submit)이벤트를 더이상 진행되지 않게 차단함
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        할 일:
        <input name="text" value={todo.text} onChange={onTodoChange} />
        내용:
        <input name="desc" value={todo.desc} onChange={onTodoChange} />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default TodoRegist;
