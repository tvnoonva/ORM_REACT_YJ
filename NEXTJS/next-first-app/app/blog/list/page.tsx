"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";

//단일 게시글 정보 제너럴 타입 정의(개발자 정의)
// type Article = {
//   article_id: number;
//   board_type_code: number;
//   article_type_code: number;
//   title: string;
//   contents: string | null; //여러 타입을 동시지원
//   view_count: number;
//   ip_address: string;
//   is_display_code: number;
//   reg_date: string;
//   reg_member_id: number;
//   edit_date: string | null;
//   edit_member_id: number | null;
// };
import { Article } from "@/app/types/definitions";

export default function BlogList() {
  const [articles, setArticles] = useState<Article[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("http://localhost:3005/api/articles", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      //api 호출결과
      const result = await response.json();
      console.log("처리결과 데이터:", result);

      if (result.code == "200") {
        setArticles(result.data);
      }
    };

    fetchData().catch((e) => {
      // handle the error as needed
      console.error("An error occurred while fetching the data: ", e);
    });
  }, []);

  return (
    <div>
      <h3>블로그 목록</h3>
      <Link href="/blog/create">신규 게시글 작성</Link>
      <table className="table-auto text-center lg:w-full">
        <thead>
          <tr>
            <th>글제목</th>
            <th>조회수</th>
            <th>작성일자</th>
          </tr>
        </thead>
        <tbody>
          {articles.map((article, index) => (
            <tr key={index}>
              <Link href={`/blog/${article.article_id}`}>
                <td>{article.title}</td>
              </Link>
              <td>{article.view_count}</td>
              <td>{article.reg_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
