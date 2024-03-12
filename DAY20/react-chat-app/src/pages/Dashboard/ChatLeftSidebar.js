import React from "react";
import { connect } from "react-redux";

import { TabContent, TabPane } from "reactstrap";

//현재 사용자의 프로필 정보 표시 컴포넌트
import Profile from "./Tabs/Profile";

//채팅영역 컴포넌트
import Chats from "./Tabs/Chats";

//그룹영역 컴포넌트
import Groups from "./Tabs/Groups";

import Contacts from "./Tabs/Contacts";

import Settings from "./Tabs/Settings";

const ChatLeftSidebar = (props) => {
  //현재 전역메뉴 선택된 탭아이디 정보조회-리덕스 전역데이터에서 호출(Layout리듀서에서)
  //채팅 탭 선택 기능을 아래 변수에 선택 적용해서 컴포넌트를 선택해 출력할수 있습니다.
  const activeTab = props.activeTab;

  return (
    <React.Fragment>
      <div className="chat-leftsidebar me-lg-1">
        <TabContent activeTab={activeTab}>
          <TabPane tabId="profile" id="pills-user">
            <Profile />
          </TabPane>

          <TabPane tabId="chat" id="pills-chat">
            <Chats recentChatList={props.recentChatList} />
          </TabPane>

          <TabPane tabId="group" id="pills-groups">
            <Groups />
          </TabPane>

          <TabPane tabId="contacts" id="pills-contacts">
            <Contacts />
          </TabPane>

          <TabPane tabId="settings" id="pills-setting">
            <Settings />
          </TabPane>
        </TabContent>
      </div>
    </React.Fragment>
  );
};

const mapStateToProps = (state) => {
  const { activeTab } = state.Layout;
  return { activeTab };
};

// export default ChatLeftSidebar;
export default connect(mapStateToProps)(ChatLeftSidebar);
