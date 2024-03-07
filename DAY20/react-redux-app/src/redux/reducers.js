//redux/reducers.js 파일의 목적은 업무별 폴더에 있는 각종 reducer.js 파일을 통합해주는 역할제공
//각종 리듀서 파일에서 노출되는 리듀서함수를 통합해주는 기능제공

//redux 패키지의 리듀서 파일에서 제공하는 리듀서 함수 통합기능 combineReducers
import { combineReducers } from "redux";

//각종 업무별 리듀서 파일에서 제공하는 리듀서함수를 참조
import Todo from "./todo/reducer";
import Auth from "./auth/reducer";

//combineReducers를 통해 export
export default combineReducers({ Todo, Auth });
