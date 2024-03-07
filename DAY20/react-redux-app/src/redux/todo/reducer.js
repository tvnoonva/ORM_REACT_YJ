//step1: 관련된 액션 타입 참조
import { TODO_COUNT } from "../../constants/actionTypes";

//step2: 전역데이터 저장소(store)에 생성할 기본 전역데이터 구조를 정의하고 초기값 정의
const INIT_STATE = {
  todoCount: 0,
};

//step3: 리듀서 함수를 정의해서 액션타입별로 전역데이터 공간에 데이터를 반영한다.
//리듀서함수는 해당 업무와 관련된 다양한 관리 기능을 액션 타입별로 제공
//리듀서함수의 입력 파라메타로 action 타입 객체가 전달되고
//action 타입 객체 안에는 화면 컴포넌트에서 전달된 데이터가 포함되어 있음
//해당 업무 전용 리듀서 함수는 다양한 업무 액션타입별로 데이터를 case by case로 관리할 수 있다.
//state는 store에 저장된 전체 globalstate
const Todo = (state = INIT_STATE, action) => {
  switch (action.type) {
    case TODO_COUNT:
      return { ...state, todoCount: action.payload.todoCount };
    default:
      return { ...state };
  }
};

//step4: export
export default Todo;
