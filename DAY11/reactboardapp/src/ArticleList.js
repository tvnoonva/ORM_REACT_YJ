import React from "react";
import ArticleItem from "./ArticleItem";

const ArticleList = ({ articles }) => {
  return (
    <div className="articleTable">
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>제목</th>
            <th>내용</th>
            <th>작성자</th>
            <th>선택</th>
          </tr>
        </thead>
        <tbody>
          {articles &&
            articles.map((article) => (
              <ArticleItem key={article.id} article={article}></ArticleItem>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default ArticleList;
