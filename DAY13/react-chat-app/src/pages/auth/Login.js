import React, { useCallback, useEffect, useState } from "react";

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

//컴포넌트와 리덕스를 연결해주는 connect함수 참조
import { connect, useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

//formik은 리액트에서 form을 다루는 코드들을 쉽게 작성할 수 있도록 도와주는 패키지
import { useFormik } from "formik";

//폼의 유효성을 검사하는 yup 패키지 참조
import * as Yup from "yup";

//Import Images
import logodark from "../../assets/images/logo-dark.png";
import logolight from "../../assets/images/logo-light.png";

//could not find react-redux context value;오류
import { Provider } from "react-redux";
import axios from "axios";

const Login = (props) => {
  //전역 데이터공간 리듀서를 호출하기 위핸 액션함수를 디스패치로 호출하기위해 디스패치 상수를 정의합니다.

  //
  const navigate = useNavigate();

  //modal 제어
  const [modal, setModal] = useState(false);
  const [validationText, setValidationText] = useState("");
  const toggleModal = () => {
    setModal(!modal);
  };

  //유효성검사 및 데이터 처리
  const formik = useFormik({
    initialValues: {
      email: "admin@test.co.kr",
      password: "123456",
    },
    validationSchema: Yup.object({
      email: Yup.string().required("Please Enter Your Username"),
      password: Yup.string().required("Please Enter Your Password"),
    }),
    onSubmit: (values) => {
      //props.loginUser(values.email, values.password, props.router.navigate);

      var loginData = {
        email: values.email,
        password: values.password,
      };

      //axois 기반 백엔드와 연동처리
      axios
        .post("http://localhost:3005/api/member/login", loginData)
        .then((res) => {
          console.log("로그인 처리 결과 반환값:", res.data);

          //로그인한 사용자 토큰정보를 리덕스 전역상태영역에 갱신하여 저장한다
          if (res.data.code == "200") {
            //사용자 웹브라우저의 저장공간인 localStorage공간에 서버에서 보내준 사용자 인증 jwt토큰값을 영구보관한다
            window.localStorage.setItem("jwttoken", res.data.data.token);

            //tip: 사용자 웹브라우저 localStorage 공간에 저장된 데이터 불러오기
            const storageToken = window.localStorage.getItem("jwttoken");
            console.log("사용자 웹브라우저에 저장된 jwt토큰값:", storageToken);
          }

          navigate("/dashboard");
        })
        .catch((err) => {
          console.log("에러발생:", err);
        });
    },
  });

  //비동기 데이터 처리 함수
  const login = async (loginData) => {
    try {
      const res = await axios.post(
        "http://localhost:3005/api/member/login",
        loginData
      );
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
                  {props.error && <Alert color="danger">{props.error}</Alert>}
                  <div className="p-3">
                    <Form onSubmit={formik.handleSubmit}>
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
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                            invalid={
                              formik.touched.email && formik.errors.email
                                ? true
                                : false
                            }
                          />
                          {formik.touched.email && formik.errors.email ? (
                            <FormFeedback type="invalid">
                              {formik.errors.email}
                            </FormFeedback>
                          ) : null}
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
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                            invalid={
                              formik.touched.password && formik.errors.password
                                ? true
                                : false
                            }
                          />
                          {formik.touched.password && formik.errors.password ? (
                            <FormFeedback type="invalid">
                              {formik.errors.password}
                            </FormFeedback>
                          ) : null}
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
    </React.Fragment>
  );
};

export default Login;
