//리듀서함수는 일반적으로 여러 컴포넌트에서 공유하기에
//해당 컴포넌트 외부에 정의하거나 별도 모듈로 만들어서 참조한다.
function counterReducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return state + 1;
    case "DECREASE":
      return state - 1;
    case "INIT":
      return 0;
    default:
      return state;
  }
}

export default counterReducer;
