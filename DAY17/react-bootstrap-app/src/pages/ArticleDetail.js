import React, { useState, useEffect, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import axios from "axios";

const ArticleDetail = () => {
  const [article, setArticle] = useState({ title: "", contents: "" });

  //모달 팝업 오픈제어 상태값정의
  const [modal, setModal] = useState(false);

  //모달 팝업 메시지
  const [validationText, setValidationText] = useState("");

  const { aid } = useParams();
  console.log("파라메터 변수 값: ", aid);

  // 초기 페이지 랜더링시 마우스 포커스 처리를 위한 useRef
  const refTitle = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    // console.log("최초 화면 컴포넌트 랜더링중 -1");

    //단일 게시글 정보 조회 바인딩하기
    //Axios는 백엔드 RESTful과 통신시 기본 비동기 통신을 합니다.
    //백엔드 호출후 결과값이 전달되면 than콜백함수에서 처리하며
    //Axios호출이후 프로세스가 있다면  이후 프로세스가 먼저실행됩니다.

    axios
      .get(`http://localhost:3005/api/articles/${aid}`)
      .then((res) => {
        // console.log("백엔드 데이터 조회결과 반환 -2");
        console.log("게시글 조회정보 출력:", res);
        if (res.data.code == "200") {
          //단일 게시글 정보 바인딩 처리

          //Axios 비동기 통신 시 로직 처리 구현 주의사항
          //Axios 사용시 호출결과가 반환되고 반환된 결과 기반에서 추가 로직을 구현해야하는경우는
          //반드시 than 콜백함수 안에서 로직을 구현해야하고  axios블럭 밖에서 구현하면
          //axios가 기본 비동기 통신기반으로 작동하기 떄문에 axios결과가 반환되지 않았는데도 밖에 로직이 실행됩니다.
          setArticle(res.data.data);
          refTitle.current.focus();
        } else {
          console.log("백엔드 호출 에러", res.data.result);
        }
      })
      .catch((err) => {
        console.log(err);
      });

    // console.log("추가 로직 호출 -3");
  }, []);

  const onArticleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  //저장버튼 클릭시 저장
  const onArticleSubmit = (e) => {
    if (article.title == "") {
      setValidationText("제목을 입력해주세요.");
      setModal(true);
      //   alert("제목을 입력해주세요.");
      refTitle.current.focus();
      e.preventDefault();
      return false;
    }

    //백엔드 데이터 수정처리
    // axios
    //   .post(`http://localhost:3005/api/articles/${aid}`, article)
    //   .then((res) => {
    //     console.log("데이터 처리 결과값:", res.data);

    //     if (res.data.code == "200") {
    //       alert("저장 완료");
    //       navigate("/articles");
    //     } else {
    //       alert("저장 실패");
    //     }
    //   })
    //   .catch((err) => {});

    updateArticle();
    //Submit이벤트가 전파되어 폼을 재로딩하는것을 방지처리합니다.
    e.preventDefault();
  };

  const onRemove = () => {
    if (window.confirm("정말 삭제하시겠습니까?")) {
      //   axios
      //     .delete(`http://localhost:3005/api/articles/${aid}`)
      //     .then((res) => {
      //       console.log("삭제처리 결과:", res);

      //       if (res.data.code == "200") {
      //         alert("삭제 완료");
      //         navigate("/articles");
      //       }
      //     })
      //     .catch((err) => {});

      removeArticle();
    }
  };

  //update 처리 함수
  const updateArticle = async () => {
    try {
      const res = await axios.post(
        `http://localhost:3005/api/articles/${aid}`,
        article
      );
      navigate("/articles");
    } catch (err) {
      console.log(err);
    }
  };

  //delete 처리 함수
  const removeArticle = async () => {
    try {
      const res = await axios.delete(
        `http://localhost:3005/api/articles/${aid}`,
        article
      );

      navigate("articles");
    } catch (err) {
      console.log(err);
    }
  };

  //모달 팝업 제어 핸들러
  const toggleModal = () => {
    setModal(!modal);
  };

  return (
    <div className="article-wrapper">
      <div className="row mb-2">
        <div className="col">
          <h4>게시글 작성</h4>
        </div>
      </div>
      <form onSubmit={onArticleSubmit}>
        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">제목</label>
          <div className="col-sm-10">
            <input
              type="text"
              name="title"
              ref={refTitle}
              className="form-control"
              value={article.title}
              onChange={onArticleChange}
            />
          </div>
        </div>

        <div className="row mb-3">
          <label className="col-sm-2 col-form-label">내용</label>
          <div className="col-sm-10">
            <textarea
              name="contents"
              className="form-control"
              rows="10"
              value={article.contents}
              onChange={onArticleChange}
            />
          </div>
        </div>
        <div className="row text-center">
          <div className="col">
            <button type="submit" className="btn btn-primary">
              등록
            </button>
            <button type="submit" className="btn btn-danger" onClick={onRemove}>
              삭제
            </button>
            <button
              type="submit"
              className="btn btn-info"
              onClick={() => navigate("/articles")}
            >
              목록
            </button>
          </div>
        </div>
      </form>

      <Modal isOpen={modal}>
        <ModalHeader>유효성 검사</ModalHeader>
        <ModalBody>{validationText}</ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggleModal}>
            확인
          </Button>
          <Button color="secondary" onClick={toggleModal}>
            취소
          </Button>
        </ModalFooter>
      </Modal>
    </div>
  );
};

export default ArticleDetail;
