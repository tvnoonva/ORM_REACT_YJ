import Link from "next/link";
import React, { useEffect, useState } from "react";

//next.js에서 지원해주는 SSR, SSG 지원타입 참조하기
import type { InferGetServerSidePropsType, GetServerSideProps } from "next";

//타입지정
type ApiResult = {
  code: string;
  data: Article[];
  result: string;
};

type Article = {
  article_id?: number;
  board_type_code?: number;
  article_type_code?: number;
  title: string;
  contents: string | null; //여러 타입을 동시지원
  view_count?: number;
  ip_address?: string;
  is_display_code: number;
  reg_date?: string;
  reg_member_id?: number;
  edit_date?: string | null;
  edit_member_id?: number | null;
};

export default function List({
  result,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  //CSR
  const [article, setArticle] = useState<Article>({
    title: "",
    contents: "",
    is_display_code: 1,
  });

  //서버에서 데이터를 포함한 화면이 최초로 랜더링될때(CSR)를 감지해서
  //단일 게시글 정보를 가져와 바인딩한다.
  useEffect(() => {
    const getSingleBlog = async () => {
      const res = await fetch("http://localhost:3005/api/articles", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const result = await res.json();
      console.log("처리결과Data:", result);
      if (result.code == "200") {
        setArticle(result.data);
      }
    };
  }, []);

  return (
    <div>
      <h1>블로그 목록</h1>
      <div>
        대시보드 페이지
        <table className="table-auto">
          <thead>
            <tr>
              <th>글제목</th>
              <th>조회수</th>
              <th>작성일시</th>
            </tr>
          </thead>
          <tbody>
            {result.data.map((article, index) => (
              <tr key={index}>
                <td>{article.title}</td>
                <td>{article.view_count}</td>
                <td>{article.reg_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

//해당 client component에서 ssr을 처리해주는 비동기함수(next.js)
export const getServerSideProps = (async () => {
  const res = await fetch("http://localhost:3005/api/articles");
  const result: ApiResult = await res.json();
  console.log("getServerSideProps====>", result);
  return { props: { result } };
}) satisfies GetServerSideProps<{ result: ApiResult }>;
