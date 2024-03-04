import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Aritlcles = () => {
  //게시글 목록 데이터 상태 구조 정의
  const [articleList, setArticleList] = useState([]);

  useEffect(() => {
    console.log("최초 화면 랜더링");
    axios
      .get("http://localhost:3005/api/articles")
      .then((res) => {
        console.log("백엔드에서 전달된 데이터 목록:", res);
        if (res.data.code == "200") {
          setArticleList(res.data.data);
          console.log("articlelist", articleList);
        } else {
          console.log("백엔드 서버 호출 에러 발생");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className="article-wrapper">
      <div className="row mb-2">
        <div className="col">
          <h4>게시글목록</h4>
        </div>
        <div className="col">
          {/* <button className="btn btn-primary float-end" onClick={()=>navigate('/article')}>글작성</button> */}
          <Link className="btn btn-primary float-end" to="/article">
            글작성
          </Link>
        </div>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">글순번</th>
            <th scope="col">제목</th>
            <th scope="col">조회수</th>
            <th scope="col">글쓴이</th>
            <th scope="col">등록일자</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>10</td>
            <td>@mdo</td>
            <td>2024.03.04</td>
          </tr>
          {articleList.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.article_id}</th>
              <td>
                <Link to={{ pathname: "/article/" + item.article_id }}>
                  {item.title}
                </Link>
              </td>
              <td>{item.view_count}</td>
              <td>{item.reg_member_id}</td>
              <td>{item.reg_date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Aritlcles;
