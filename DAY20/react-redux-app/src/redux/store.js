//store 구성을 위해 @reduxjs/toolkit 패키지 이용

//@reduxjs/toolkit패키지에서 제공하는 configureStore 함수를 참조해서 손쉽게 store를 구성합니다
import { configureStore } from "@reduxjs/toolkit";

//통합된 리듀서 함수 참조
import reducers from "./reducers";

//전역데이터 저장소 store 구성
const store = configureStore({
  reducer: reducers,
  devTools: true,
});

//export
export default store;
