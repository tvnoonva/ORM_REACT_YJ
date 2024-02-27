import React from "react";
import { Link } from "react-router-dom";

const ArticleList = (articles) => {
  console.log(articles);

  return (
    <div class="container">
      <div class="row">
        <main>
          <br></br>
          <h2>게시판</h2>
          <div class="table-responsive small">
            <table class="table table-striped table-sm">
              <thead>
                <tr>
                  <th className="col-1">번호</th>
                  <th className="col">제목</th>
                  <th className="col-2">작성자</th>
                  <th className="col-1">조회수</th>
                  <th className="col-2">작성일</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>
                    <Link to="/article/1">article</Link>
                  </td>
                  <td>data</td>
                  <td>0</td>
                  <td>2024.02.27</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>placeholder</td>
                  <td>irrelevant</td>
                  <td>0</td>
                  <td>2024.02.27</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>data</td>
                  <td>rich</td>
                  <td>0</td>
                  <td>2024.02.27</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>information</td>
                  <td>placeholder</td>
                  <td>0</td>
                  <td>2024.02.27</td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>text</td>
                  <td>random</td>
                  <td>0</td>
                  <td>2024.02.27</td>
                </tr>
                <tr>
                  <td>5</td>
                  <td>dashboard</td>
                  <td>irrelevant</td>
                  <td>0</td>
                  <td>2024.02.27</td>
                </tr>
                {/* {articles.map((article) => (
                  <></>
                  // <ArticleItem key={article.id} article={article}></ArticleItem>
                ))} */}
              </tbody>
            </table>
            <Link to="/article/create">
              <button className="btn btn-info rounded-pill px-3">신규</button>
            </Link>
          </div>
        </main>
      </div>
    </div>
  );
};

export default ArticleList;
