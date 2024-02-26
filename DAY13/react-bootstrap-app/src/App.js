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

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        {/* 최상위 컴포넌트에 전체 레이아웃 구성 */}
        <GNB></GNB>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route path="/" Component={Main} />
              <Route path="/signin" Component={Login} />
              <Route path="/signup" Component={Register} />
            </Routes>
          </div>
        </div>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
