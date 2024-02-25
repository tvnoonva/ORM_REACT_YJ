import { useCallback, useEffect, useRef, useState } from "react";
import React from "react";

const Todolist = () => {
  const [todo, setTodo] = useState({
    title: "",
    contents: "",
    orderby: 0,
  });
  const [todolist, setTodolist] = useState([]);

  useEffect(() => {}, []);

  const onTodoChange = (e) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const onAdd = () => {
    setTodolist([...todolist, todo]);
  };

  return (
    <div>
      <h1>Todolist 관리자</h1>
      할일:
      <input name="title" value={todo.title} onChange={onTodoChange}></input>
      <br />
      내용:
      <input
        name="contents"
        value={todo.contents}
        onChange={onTodoChange}
      ></input>
      <br />
      우선순위:
      <input
        name="orderby"
        value={todo.orderby}
        onChange={onTodoChange}
      ></input>
      <br />
      <button onClick={onAdd}>추가</button>
      <hr></hr>
      <ul>
        {todolist.map((item, index) => (
          <li key={index}>{item.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default Todolist;
