import React, { Component } from "react";

class CounterClassComponent extends Component {
  //클래스 생성자
  //리액트에서 클래스 컴포넌트 생성자 함수는 props를 반드시 전달
  //전달된 props는 생성되는 객체의 디폴트 props 값으로 전달된다
  constructor(props) {
    super(props);

    //클래스형 컴포넌트는 state 객체를 통해 모든 데이터 속성을 정의
    //클래스형 컴포넌트는 state의 구조화 초기화를 반드시 정의해야 한다.
    this.state = {
      count: 200,
      userName: "홍길동",
      goods: [],
    };
  }

  //   증가버튼 이벤트 핸들러 함수
  handleIncrease = () => {
    console.log("증가 버튼 클릭");
    this.setState({ count: this.state.count + 1 });
  };

  //   감소버튼 이벤트 핸들러 함수
  handleDecrease = () => {
    console.log("감소 버튼 클릭");
    this.setState({ count: this.state.count - 1 });
  };

  render() {
    return (
      <div>
        <h1>카운터 상태값 표시:{this.state.count}</h1>
        <button onClick={this.handleIncrease}>1증가</button>
        <button onClick={this.handleDecrease}>1감소</button>
      </div>
    );
  }
}

export default CounterClassComponent;
