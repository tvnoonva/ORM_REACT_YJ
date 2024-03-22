import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <>
      <Head>
        <title>SEO-기본 페이지 제목</title>

        <meta name="description" content="기본 페이지 SEO 설명문구" />
        <meta name="keywords" content="기본 페이지 SEO 키워드 문구" />
        <meta name="author" content="엠소프트웨어" />
      </Head>

      <div>
        <h1>웹사이트 방문을 환영합니다.</h1>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  // 서버에서 동적 데이터를 가져오는 로직
  //const res = await fetch('http://localhost:3005/api/articles');

  const res = await fetch("http://localhost:3005/api/articles/8");
  const data = await res.json();
  console.log("백엔드에서 전달된 데이터 확인:", data);
  return {
    props: {
      data: data,
    },
  };
}
