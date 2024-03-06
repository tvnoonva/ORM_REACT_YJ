//인증이 필요한 컴포넌트와 아닌 컴포넌트를
//라우팅 페이지 컴포넌트와 통합해서 최종 랜더링 시키는 역할

import React, { Suspense } from "react";
import { Routes as SwitchRoute, Route, Navigate } from "react-router-dom";

import { authProtectedRoutes, publicRoutes } from "./route";

import NonAuthLayout from "../layouts/NonAuthLayout";
import AuthLayout from "../layouts/AuthLayout";

//로그인 여부 체크 후 미로그인시 로그인 페이지 redirect
const AuthProtected = (props) => {
  //인증에서 보호중인 페이지 접근 혹은 jtw 토큰 미확인시
  if (props.isAuthProtected && !localStorage.getItem("jwttoken")) {
    return (
      <Navigate to={{ pathname: "/login", state: { from: props.location } }} />
    );
  }
};

//메인 라우팅 컴포넌트
const Routes = (props) => {
  return (
    <React.Fragment>
      <Suspense fallback={<div>로딩중...</div>}>
        <SwitchRoute>
          {/* 비인증 페이지 컴포넌트 라우팅 적용하기 */}
          {publicRoutes.map((route, idx) => (
            <Route
              path={route.path}
              layout={NonAuthLayout}
              element={<NonAuthLayout>{route.component}</NonAuthLayout>}
              key={idx}
              isAuthProtected={false}
            />
          ))}

          {/* 인증이 필요한 페이지 컴포넌트 라우팅 */}
          {authProtectedRoutes.map((route, idx) => (
            <Route
              path={route.path}
              layout={AuthLayout}
              element={
                <AuthProtected isAuthProtected={true}>
                  <AuthLayout>{route.component}</AuthLayout>
                </AuthProtected>
              }
              key={idx}
              isAuthProtected={true}
            />
          ))}
        </SwitchRoute>
      </Suspense>
    </React.Fragment>
  );
};

export default Routes;
