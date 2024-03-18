import React, { useState, useEffect } from "react";

//전역데이터 연결을 위한 connect 객체 참조하기
import { connect } from "react-redux";

//클라이언트 socket.io 객체 참조하기
import { socket } from "../socket";

//좌측 메뉴바 컴포넌트 참조
import LeftSidebarMenu from "./LeftSidebarMenu";
import { userLogin, setReceiveMessage } from "../redux/actions";

const AuthLayout = (props) => {
  //최초 로드시 socket 연결
  //AuthLayout 컴포넌트가 사라질때 socket 객체와 수신 이벤트들도 함께 제거
  useEffect(() => {
    socket.connect();

    //서버소켓과 연결되면 발생하는 클라이언트 소켓연결 이벤트 핸들러
    socket.on("connect", () => {
      console.log("socket 연결 완료");
    });
    socket.on("disconnect", () => {
      console.log("socket 연결 종료");
    });

    //서버소켓에서 보내주는 메시지를 수신하는 이벤트핸들러 정의
    socket.on("reactReceive", (msg) => {
      console.log("reactReceive 이벤트 수신데이터 확인:", msg);
      if (msg.channel_id > 0) {
        props.setReceiveMessage(msg);
      }
    });

    //채팅방 입장완료 메시지 처리
    socket.on("entryok", (msg) => {
      console.log("채팅방 입장완료=======>:", msg);
    });

    //소켓이 사용된 컴포넌트가 화면에서 사라지면 소켓에서 정의한 각종 이벤트 핸들러
    return () => {
      //해당 클리어 함수에서 반드시 소켓에서 정의한 이벤트 수신 핸들러 리소스를 제거
      socket.off("connect");
      socket.off("disconnect");
      socket.off("reactReceive");
      socket.off("entryok");
    };
  }, []);

  //전역데이터 속성중 sendMessage 값이 바뀌면 자동으로 실행
  useEffect(() => {
    //서버로 사용자가 전송하는 메시지를 전송

    if (props.sendMessage.channel_id > 0) {
      socket.emit("reactSend", props.sendMessage);
    }
  }, [props.sendMessage]);

  return (
    <React.Fragment>
      <div className="layout-wrapper d-lg-flex">
        {/* 최좌측 채팅 좌측 메뉴바 영역  */}
        <LeftSidebarMenu />

        {/* 각종 인증된 페이지 컴포넌트 출력영역-dashboard,start */}
        {props.children}
      </div>
    </React.Fragment>
  );
};

// export default AuthLayout;

const mapStateToProps = (state) => {
  const { sendMessage, receiveMessage } = state.Chat;
  return { sendMessage, receiveMessage };
};

// export default ChatInput;
export default connect(mapStateToProps, { setReceiveMessage })(AuthLayout);
