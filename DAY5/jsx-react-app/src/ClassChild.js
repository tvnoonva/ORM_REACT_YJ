import React, { Component } from "react";

//클래스형 컴포넌트는 기본적으로 react 패키지의 Component라는 클래스를 상속받아서 구현
//javascript에서 특정 클래스를 상속받을 때는 extends 예약어를 사용해 상속받아 새로운 클래스를 정의
class ClassChild extends Component {
  //코딩 가능 영역

  render() {
    //코딩 가능 영역
    return (
      <div>
        <h1>부서소개</h1>
        <h2>{this.props.children}</h2>
        부서명:{this.props.deptName}
        <br></br>
        부서역할:{this.props.deptRole}
        <br></br>
        부서원수:{this.props.employeee}
        <br></br>
        샘플데이터:{this.props.sampleData}
      </div>
    );
  }
}

export default ClassChild;
