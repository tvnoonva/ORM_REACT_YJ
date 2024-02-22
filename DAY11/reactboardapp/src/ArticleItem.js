import React from "react";

const ArticleItem = ({ article }) => {
  return (
    <tr>
      <td>{article.id}</td>
      <td>{article.title}</td>
      <td>{article.contents}</td>
      <td>{article.writer}</td>
      <td>
        <button>선택</button>
      </td>
    </tr>
  );
};

export default ArticleItem;
