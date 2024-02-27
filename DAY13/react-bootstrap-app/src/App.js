import React, { useState } from "react";
import "./App.css";

//bootstrap css파일 참조
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

//router 참조
import { BrowserRouter, Route, Routes } from "react-router-dom";
import GNB from "./component/GNB";
import Footer from "./component/Footer";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Main from "./pages/Main";

import ArticleList from "./pages/article/ArticleList";
import ArticleRegist from "./pages/article/ArticleRegist";
import ArticleDetail from "./pages/article/ArticleDetail";

function App() {
  const [articles, setArticles] = useState([
    {
      id: 0, //자동채번
      title: "",
      writer: "",
      contents: "",
      viewcount: "",
      registdate: "",
    },
    {
      id: 0, //자동채번
      title: "",
      writer: "",
      contents: "",
      viewcount: "",
      registdate: "",
    },
  ]);

  const [articleId, setArticleId] = useState(5);

  const [article, setArticle] = useState({});

  //article data 관련 처리는 create/detail에서

  //create/detail 페이지에 메소드 넘겨서 추가처리
  const addarticlelist = (article) => {
    setArticles([...articles, { ...article, id: articleId }]);
    setArticleId(articleId + 1);
  };
  const deletearticlelist = (id) => {
    setArticles(articles.filter((article) => article.id !== id));
  };

  //update => delete 후 그 delete한 Id 값으로 다시 create
  const updatearticlelist = (article, id) => {};
  return (
    <BrowserRouter>
      <div>
        {/* 최상위 컴포넌트에 전체 레이아웃 구성 */}
        <GNB></GNB>
        <div className="auth-wrapper">
          <Routes>
            <Route path="/" Component={Main} />
            <Route path="/signin" Component={Login} />
            <Route path="/signup" Component={Register} />
            <Route
              path="/article/list"
              Component={() => <ArticleList articles={articles}></ArticleList>}
            />
            <Route path="/article/create" Component={ArticleRegist} />
            <Route path="/article/:idx" Component={ArticleDetail} />
          </Routes>
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
