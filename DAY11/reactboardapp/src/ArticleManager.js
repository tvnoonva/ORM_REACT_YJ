import React, { useState } from "react";

const ArticleManager = ({ addInList, deleteInList, updateList }) => {
  const [article, setArticle] = useState({
    title: "",
    contents: "",
    writer: "",
  });

  const articleInit = () => {
    setArticle({ title: "", contents: "", writer: "" });
  };

  const articleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const articleAdd = (e) => {
    addInList(article);
    articleInit();
    console.log("add", article);
  };

  const articleDelete = (e) => {
    deleteInList(article.id);
    articleInit();
    console.log("delete", article.id);
  };

  const articleUpdate = (e) => {
    updateList(article, article.id);
    articleInit();
    console.log("update", article);
  };

  return (
    <div>
      제목:
      <input
        name="title"
        value={article.title}
        onChange={articleChange}
      ></input>
      <br></br>
      내용:
      <input
        name="contents"
        value={article.contents}
        onChange={articleChange}
      ></input>
      <br></br>
      등록자:
      <input
        name="writer"
        value={article.writer}
        onChange={articleChange}
      ></input>
      <br></br>
      <button onClick={articleAdd}>등록</button>
      <button onClick={articleUpdate}>수정</button>
      <button onClick={articleDelete}>삭제</button>
      <button onClick={articleInit}>초기화</button>
    </div>
  );
};

export default ArticleManager;
