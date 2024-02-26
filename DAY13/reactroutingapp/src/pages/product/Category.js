import React from "react";

//useParams 훅을 이용해 파라메타 방식으로 데이터 추출
import { useParams } from "react-router-dom";

const Category = () => {
  const { idx } = useParams();

  return (
    <div>
      <h1>분류별 상품 목록 보기 페이지</h1>
      <h3>추출된 파라메터 값 idx = {idx}</h3>
    </div>
  );
};

export default Category;
