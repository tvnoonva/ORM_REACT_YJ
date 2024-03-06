//react chat app 모든 화면 컴포넌트의 라우팅 규칙을 정의한다
import React from "react";
import { Navigate } from "react-router-dom";

//React.lazy(import(해당화면-페이지컴포넌트 지정))

//페이지 컴포넌트 참조
//auth필요
const StarterPage = React.lazy(() => import("../pages/starter/index"));
const Dashboard = React.lazy(() => import("../pages/dashboard/index"));

//auth불필요
const Login = React.lazy(() => import("../pages/auth/LoginAsync"));
const Register = React.lazy(() => import("../pages/auth/Register"));

//인증 필요한 라우팅 목록
const authProtectedRoutes = [
  { path: "/starter", component: <StarterPage /> },
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/", exact: true, component: <Navigate to="/dashboard" /> },
];

//인증 불필요 라우팅 목록
const publicRoutes = [
  { path: "/login", component: <Login /> },
  { path: "/register", component: <Register /> },
];

export { authProtectedRoutes, publicRoutes };
