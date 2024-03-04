import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

import axios from "axios";

const Article = () => {
  const [article, setArticle] = useState({ title: "", contents: "" });

  //모달 팝업 오픈제어 상태값정의
  const [modal, setModal] = useState(false);

  //모달 팝업 메시지
  const [validationText, setValidationText] = useState("");

  // 초기 페이지 랜더링시 마우스 포커스 처리를 위한 useRef
  const refTitle = useRef();
  const navigate = useNavigate();

  //최초 로딩시 제목 입력박스에 마우스 포커스
  useEffect(() => {
    refTitle.current.focus();
  }, []);

  const onArticleChange = (e) => {
    setArticle({ ...article, [e.target.name]: e.target.value });
  };

  const onArticleSubmit = (e) => {
    if (article.title === "") {
      setValidationText("제목을 입력해주세요.");
      setModal(true);
      // alert("제목을 입력해주세요.");
      refTitle.current.focus();
      e.preventDefault();
      return false;
    }

    console.log(article);

    //게시글 백엔드 처리
    // axios
    //   .post("http://localhost:3005/api/articles", article)
    //   .then((res) => {
    //     console.log("데이터 처리 결과값:", res.data);

    //     if (res.data.code == "200") {
    //       alert("등록 완료");
    //       navigate("/articles");
    //     } else {
    //       alert("등록 실패");
    //     }
    //   })
    //   .catch((err) => {
    //     console.log(err);
    //   });

    insertArticle();
    //Submit이벤트가 전파되어 폼을 재로딩하는것을 방지처리
    e.preventDefault();
  };

  const insertArticle = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3005/api/articles",
        article
      );
      console.log("백엔드에서 전달된 데이터 값 확인 -2", res);
      navigate("/articles");
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

export default Article;
