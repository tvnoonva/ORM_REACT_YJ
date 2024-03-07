import React, { useState } from "react";

//redux 전역데이터 공간에 데이터를 반영하기위해 useDispatch라는 훅을 참조
import { useDispatch } from "react-redux";

//redux store에 데이터를 반영하기 위한 액션함수 참조
import { addTodoCount } from "../redux/actions";

const TodoList = () => {
  //useDispatch 훅 변수 생성
  const globalDispatch = useDispatch();

  const [todo, setTodo] = useState({ title: "", orderby: 0 });
  const [todolist, setTodolist] = useState([]);

  const handleTodo = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const handleAddTodo = () => {
    setTodolist([...todolist, { ...todo }]);

    //전역 데이터 공간에 반영하기
    //globalDispatch(액션함수 호출)
    globalDispatch(addTodoCount(todolist.length + 1));
  };

  return (
    <div>
      할일:<input name="title" value={todo.title} onChange={handleTodo}></input>
      <br />
      우선순위:{" "}
      <input name="orderby" value={todo.orderby} onChange={handleTodo}></input>
      <br />
      <button onClick={handleAddTodo}>추가</button>
      <hr></hr>
      <ul>
        {todolist.map((item, index) => (
          <li key={index}>
            {item.orderby} : {item.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
