import React, { useState } from "react";

//useNavigate 훅을 참조해서 개발자가 원하는 라우팅주소 URL을 호출해서 해당 컴포넌트를 랜더링
import { useNavigate } from "react-router-dom";

const ArticleRegist = () => {
  const [article, setArticle] = useState({ title: "", contents: "" });

  //navigate 생성하기
  const navigate = useNavigate();

  const onArticleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const onSave = () => {
    //STEP1: RESTful API를 호출해서 단일 게시글 정보를 백엔드를 통해 등록처리
    //STEP2: 데이터 처리 완료 후 특정 URL로 컨텐츠 페이지를 이동시킨다.
    //프로그래밍 방식으로 리액트 페이지를 이동시킬때 useNavigate hook 사용

    navigate("/");
  };

  return (
    <div>
      <h1>게시글 작성 웹페이지</h1>
      제목:
      <input
        name="title"
        value={article.title}
        onChange={onArticleChange}
      ></input>
      <hr></hr>
      내용:{" "}
      <textarea name="contents" onChange={onArticleChange}>
        {article.contents}
      </textarea>
      <button onClick={onSave}>저장</button>
    </div>
  );
};

export default ArticleRegist;
