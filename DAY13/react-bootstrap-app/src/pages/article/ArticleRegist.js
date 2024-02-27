import React from "react";
import { Link } from "react-router-dom";

const ArticleRegist = () => {
  return (
    <div class="container">
      <br></br>
      <h2>게시글 작성</h2>
      <div>
        제목: <input name="title"></input>
        작성자: <input name="writer"></input>
        <br></br>
        <textarea></textarea>
        <br></br>
        <button className="btn btn-success rounded-pill px-3">저장</button>
        <button className="btn btn-danger rounded-pill px-3">삭제</button>
        <Link to="/article/list">
          <button className="btn btn-info rounded-pill px-3">목록</button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleRegist;
