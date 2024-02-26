import React from "react";

// Outlet안 중첩라우팅의 자식요소 컴포넌트를 부모 컴포넌트 어디에 위치시킬지 지정하는 요소를 참조한다
import { Outlet } from "react-router-dom";

const Company = () => {
  return (
    <div>
      <h1>회사 소개 페이지</h1>
      <p>엠소프트웨어~~~~</p>

      {/* 중첩라우팅 요소에서 지정한 자식 컴포넌트가 아래 위치에 출력됨 
      자식요소를 추출하려면 중첩라우팅 주소를 호출해야한다 */}
      <Outlet></Outlet>
    </div>
  );
};

export default Company;
