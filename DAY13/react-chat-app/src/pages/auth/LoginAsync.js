import React, { useState } from "react";

//reactstrap은 bootstrap을 react에서 더 쉽게 사용하기 위한 부트스트랩 지원 리액트 패키지
import {
  Container,
  Row,
  Col,
  Card,
  CardBody,
  FormGroup,
  Alert,
  Form,
  Input,
  Button,
  FormFeedback,
  Label,
  InputGroup,
} from "reactstrap";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";

//Import Images
import logodark from "../../assets/images/logo-dark.png";
import logolight from "../../assets/images/logo-light.png";

import axios from "axios";

const Login = (props) => {
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  //navigate
  const navigate = useNavigate();

  //modal 제어
  const [modal, setModal] = useState(false);
  const [validationText, setValidationText] = useState("");
  const toggleModal = () => {
    setModal(!modal);
  };

  const onDataChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    //유효성 검사
    if (loginData.email == "") {
      setValidationText("Please Enter Your Username");
      setModal(true);
      e.preventDefault();
      return false;
    }
    if (loginData.password == "") {
      setValidationText("Please Enter Your Password");
      setModal(true);
      e.preventDefault();
      return false;
    }

    login();
    e.preventDefault();
  };

  //비동기 데이터 처리 함수
  const login = async () => {
    try {
      const res = await axios.post(
        "http://localhost:3005/api/member/login",
        loginData
      );

      console.log("로그인 처리 결과 반환값:", res.data);

      if (res.data.code == "200") {
        window.localStorage.setItem("jwttoken", res.data.data.token);
      } else {
        setValidationText(res.data.result);
        setModal(true);
        return false;
      }

      navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <React.Fragment>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <div className="text-center mb-4">
                <Link to="/" className="auth-logo mb-5 d-block">
                  <img
                    src={logodark}
                    alt=""
                    height="30"
                    className="logo logo-dark"
                  />
                  <img
                    src={logolight}
                    alt=""
                    height="30"
                    className="logo logo-light"
                  />
                </Link>

                <h4>Sign in</h4>
                <p className="text-muted mb-4">
                  Sign in to continue to Chatvia.
                </p>
              </div>

              <Card>
                <CardBody className="p-4">
                  <div className="p-3">
                    <Form onSubmit={onSubmit}>
                      <div className="mb-3">
                        <Label className="form-label">Username</Label>
                        <InputGroup className="mb-3 bg-soft-light rounded-3">
                          <span
                            className="input-group-text text-muted"
                            id="basic-addon3"
                          >
                            <i className="ri-user-2-line"></i>
                          </span>
                          <Input
                            type="text"
                            id="email"
                            name="email"
                            className="form-control form-control-lg border-light bg-soft-light"
                            placeholder="Enter email"
                            onChange={onDataChange}
                            value={loginData.email}
                          />
                        </InputGroup>
                      </div>

                      <FormGroup className="mb-4">
                        <div className="float-end">
                          <Link
                            to="/forget-password"
                            className="text-muted font-size-13"
                          >
                            Forgot password?
                          </Link>
                        </div>
                        <Label className="form-label">Password</Label>
                        <InputGroup className="mb-3 bg-soft-light rounded-3">
                          <span className="input-group-text text-muted">
                            <i className="ri-lock-2-line"></i>
                          </span>
                          <Input
                            type="password"
                            id="password"
                            name="password"
                            className="form-control form-control-lg border-light bg-soft-light"
                            placeholder="Enter Password"
                            onChange={onDataChange}
                            value={loginData.password}
                          />
                        </InputGroup>
                      </FormGroup>

                      <div className="form-check mb-4">
                        <Input
                          type="checkbox"
                          className="form-check-input"
                          id="remember-check"
                        />
                        <Label
                          className="form-check-label"
                          htmlFor="remember-check"
                        >
                          Remember me?
                        </Label>
                      </div>

                      <div className="d-grid">
                        <Button
                          color="primary"
                          block
                          className=" waves-effect waves-light"
                          type="submit"
                        >
                          Sign in
                        </Button>
                      </div>
                    </Form>
                  </div>
                </CardBody>
              </Card>

              <div className="mt-5 text-center">
                <p>
                  Don't have an account?{" "}
                  <Link
                    to="/register"
                    className="font-weight-medium text-primary"
                  >
                    Signup now{" "}
                  </Link>{" "}
                </p>
                <p>
                  © {new Date().getFullYear()} Chatvia.Crafted with{" "}
                  <i className="mdi mdi-heart text-danger"></i> by Themesbrand
                </p>
              </div>
            </Col>
          </Row>
        </Container>

        <Modal isOpen={modal}>
          <ModalHeader>Access fail</ModalHeader>
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
    </React.Fragment>
  );
};

export default Login;
