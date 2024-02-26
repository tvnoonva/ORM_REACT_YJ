import React, { Suspense } from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";

//라우팅을 위한 BrowserRouter 객체참조하기
import { BrowserRouter, Route, Routes } from "react-router-dom";

//페이지 컴포넌트
//일반적인 컴포넌트 참조방식은 최초 로딩시 성능저하 그리고 컴포넌트 렌더링시 대체 효과등을 주기가 어렵다
// import Login from "./pages/auth/Login";
// import Entry from "./pages/auth/Entry";
// import ArticleList from "./pages/board/ArticleList";
// import ArticleDetail from "./pages/board/ArticleDetail";
// import ArticleRegist from "./pages/board/ArticleRegist";
// import Product from "./pages/product/Product";
// import Category from "./pages/product/Category";
// import NoneExistPage from "./NoneExistPage";
// import Main from "./pages/Main";
// import Company from "./pages/Company";
// import CompanyLocation from "./pages/CompanyLocation";

//react.lazy()메소드와 Suspens를 이용해서 코드분할 방식 적용
//최초 로딩 및 라우팅시 성능 개선
//React.lazy(import구문을 이용해 컴포넌트를 참조반환합니다.)
//Routes 객체를 반드시 Suspens로 감싸주고 대체 UI를 구현
//Suspens는 라우팅하려면 해당 컴포넌트가 완전히 렌더링 되기전(백엔드 restful호출시간까지포함)까지
//특정 대체 요소를 통해 화면에 표시해주는 환경을 제공
const Main = React.lazy(() => import("./pages/Main"));
const Login = React.lazy(() => import("./pages/auth/Login"));
const Entry = React.lazy(() => import("./pages/auth/Entry"));
const ArticleList = React.lazy(() => import("./pages/board/ArticleList"));
const ArticleDetail = React.lazy(() => import("./pages/board/ArticleDetail"));
const ArticleRegist = React.lazy(() => import("./pages/board/ArticleRegist"));
const Product = React.lazy(() => import("./pages/product/Product"));
const Category = React.lazy(() => import("./pages/product/Category"));
const NoneExistPage = React.lazy(() => import("./pages/NoneExistPage"));
const Company = React.lazy(() => import("./pages/Company"));
const CompanyLocation = React.lazy(() => import("./pages/CompanyLocation"));

function App() {
  return (
    <BrowserRouter>
      <div>
        {/* 상단 GNB 공통 레이아웃 메뉴 영역 */}
        <Header></Header>

        {/* 컨텐츠 영역에 라우트를 이용해 라우팅 주소를 정의하고 라우팅 규칙을 정의 */}
        {/* 여러개의 라우팅 규칙을 정의하기 위해 Routes로 Route를 감싸준다. */}

        <Suspense fallback={<div>로딩중...</div>}>
          <Routes>
            {/* Route path속성에 URL 주소체계를 정의하고 Component 속성에 상단 참조한 컴포넌트를 정의한다. */}
            <Route path="/" Component={Main} />
            {/* 중첩 라우팅 구현하기 */}
            <Route path="/company" Component={Company}>
              <Route path="location" Component={CompanyLocation}></Route>
            </Route>
            <Route path="/login" Component={Login} />
            <Route path="/entry" Component={Entry} />
            <Route path="/article/list" Component={ArticleList} />
            <Route path="/article/regist" Component={ArticleRegist} />
            <Route path="/article/detail" Component={ArticleDetail} />
            <Route path="/product/detail" Component={Product} />
            <Route path="/product/category/:idx" Component={Category} />

            {/* 404 Error 처리 */}
            <Route path="*" Component={NoneExistPage} />
          </Routes>
        </Suspense>
        {/* 하단 풋터 레이아웃 공통 영역 */}
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
