import "./App.css";

import React, { useState } from "react";
import ArticleList from "./ArticleList";
import ArticleManager from "./ArticleManager";
import BoardTemplate from "./BoardTemplate";

function App() {
  //데이터 init
  const [articles, setArticles] = useState([
    {
      id: 1,
      title: "게시글1",
      contents: "게시글 내용",
      writer: "사용자1",
    },
    {
      id: 2,
      title: "게시글2",
      contents: "게시글을 작성해봅시다",
      writer: "user1",
    },
  ]);
  const [nextId, setNextId] = useState(3);

  //CRUD 이벤트 처리함수
  const addInList = (article) => {
    setArticles([...articles, { ...article, id: nextId }]);
    setNextId(nextId + 1);
    console.log("list", articles);
  };

  const deleteInList = (id) => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  const updateList = (article, id) => {
    //article을 list에서 delete 후
    deleteInList(id);
    //같은 id로 재생성
    setArticles(...articles, { ...article, id: id });
  };

  return (
    <div className="App">
      <h1>게시판</h1>
      <BoardTemplate>
        <ArticleManager
          addInList={addInList}
          deleteInList={deleteInList}
          updateList={updateList}
        ></ArticleManager>
        <ArticleList
          articles={articles}
          addInList={addInList}
          deleteInList={deleteInList}
          updateList={updateList}
        ></ArticleList>
      </BoardTemplate>
    </div>
  );
}

export default App;
