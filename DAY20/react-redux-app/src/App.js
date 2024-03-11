import "./App.css";
import React, { Suspense } from "react";
import TodoList from "./components/TodoList";
import Counter from "./components/Counter";
import GNB from "./components/GNB";

import { Routes, Route } from "react-router-dom";

const LoginPage = React.lazy(() => import("./pages/Login"));
const Login2Page = React.lazy(() => import("./pages/Login2"));
const Login3Page = React.lazy(() => import("./pages/Login3"));
const EntryPage = React.lazy(() => import("./pages/Register"));
const ProfilePage = React.lazy(() => import("./pages/Profile"));
const Profile2Page = React.lazy(() => import("./pages/Profile2"));
const ProfileEditPage = React.lazy(() => import("./pages/ProfileEdit"));
const MainPage = React.lazy(() => import("./pages/Main"));

function App() {
  return (
    <div className="App">
      {/* <Counter></Counter>
      <TodoList></TodoList> */}
      <GNB></GNB>

      <Suspense fallback={<div>로딩중...</div>}>
        <Routes>
          <Route path="/" Component={MainPage}></Route>
          <Route path="/login" Component={LoginPage}></Route>
          <Route path="/login2" Component={Login2Page}></Route>
          <Route path="/login3" Component={Login3Page}></Route>
          <Route path="/entry" Component={EntryPage}></Route>
          <Route path="/profile" Component={ProfilePage}></Route>
          <Route path="/profile2" Component={Profile2Page}></Route>
          <Route path="/profile/edit" Component={ProfileEditPage}></Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
