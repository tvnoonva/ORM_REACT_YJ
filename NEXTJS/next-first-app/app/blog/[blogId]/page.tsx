"use client";

import React, { useEffect, useState } from "react";

//swr 훅 참조
//useSWR 훅은 백엔드 API fetcher를 통해 가져온 데이터를 클라이언트에서 자동으로 캐시처리해주는 훅기능 제공
//mutate는 한번 가져온 데이터를 다시 가지고 오고 싶을때 호출하는 기능제공
//화면이 재로딩되거나 부모 컴포넌트가 변경되어 해당 화면이 재랜더링 될 때 실행
//SWR을 사용하는 주된이유: 백엔드 API 호출, 특히 클라이언트 컴포넌트에서 웸브라우저측에 데이터 호출시 적극사용
//캐싱기능(백엔드에서 가져온 데이터를 프론트엔드에 저장해두고 사용하는 기능)
//재호출기능, 포커스 추적기능, 인터벌 기능(주기적으로 API를 호출한다), SUSPENS API 로딩 UI 처리기능
import useSWR, { mutate } from "swr";

//게시글 등록후 페이지 이동을 위한 navigate참조
import { useRouter } from "next/navigation";

import { Article } from "@/app/types/definitions";

//fetcher함수 정의 : 실질적으로 프론트엔드에서 백엔드 api를 호출해주는 함수
//useSWR훅은 기본적으로 훅에서 지정한 전용 fetcher 함수를 통해 백엔드에서 데이터 처리
//fetcher는 웹브라우저에 탑재된 기본 fetch를 사용해도 되고 axios와 같은 전용 라이브러리를 사용해도 됨

//get 방식으로 지정된 url을 통해 데이터를 가져오는 fetcher 함수
const fetcher = (url: string) => fetch(url).then((res) => res.json);

export default function BlogCreate(props: any) {
  const articleId = props.params.blogid;
  const router = useRouter();

  //타입스크립트 방식으로 useState 정의하기
  const [article, setArticle] = useState<Article>({
    title: "",
    contents: "",
    is_display_code: 1,
  });

  //useEffect를 사용하지 않고 useSWR를 이용해 데이터를 가져와 클라이언트 환경에 캐시한다
  //useSWR(키값=api주소, fetcher=백엔드 api호출하고 데이터를 제공하는 실제함수)
  const { data, error, isLoading } = useSWR(
    `http://localhost:3005/api/articles/${articleId}`,
    fetcher
  );

  useEffect(() => {
    if (data !== undefined) {
      setArticle(data.data);
    }
  }, [data]);

  if (error) return <div>백엔드 호출 에러 발생</div>;

  if (isLoading) return <div>now loading. . . </div>;

  //any타입으로 지정하면 타입 에러를 발생시키지 않음
  //타입을 지정하기 애매한 경우 any타입을 지정해주면 됨
  const onBlogChange = (e: any) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const onBlogSubmit = (e: any) => {
    const fetchData = async () => {
      const response = await fetch(
        `http://localhost:3005/api/articles/${articleId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(article),
        }
      );
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      //api 호출결과
      const result = await response.json();
      console.log("처리결과 데이터:", result);

      if (result.code == "200") {
        //페이지 이동
        router.push("/blog/list");
      }
    };

    fetchData().catch((e) => {
      // handle the error as needed
      console.error("An error occurred while fetching the data: ", e);
    });

    e.preventDefault();
  };

  //swr 기반 데이터 리로드 함수
  const onDataReload = (e: any) => {
    mutate(`http://localhost:3005/api/articles/${articleId}`);
    console.log("swr mutate를 통해 reload: ", data);
  };

  return (
    <form onSubmit={onBlogSubmit}>
      <div className="space-y-12">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            게시글 작성
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            게시글을 작성해주세요.
          </p>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-4">
              <label
                htmlFor="username"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                글제목
              </label>
              <div className="mt-2">
                <input
                  type="text"
                  name="title"
                  value={article.title}
                  onChange={onBlogChange}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div className="col-span-full">
              <label
                htmlFor="about"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                글내용
              </label>
              <div className="mt-2">
                <textarea
                  name="contents"
                  value={article.contents}
                  onChange={onBlogChange}
                  rows={3}
                  className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex items-center justify-end gap-x-6">
        <button
          type="button"
          className="text-sm font-semibold leading-6 text-gray-900"
          onClick={() => router.push("/blog/list")}
        >
          목록
        </button>
        <button
          type="submit"
          className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          저장
        </button>

        <button onClick={onDataReload}>재로딩하기</button>
      </div>
    </form>
  );
}
