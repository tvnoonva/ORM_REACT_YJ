import { configureStore } from "@reduxjs/toolkit";

import reducers from "./reducers";

//store 구성하기
const store = configureStore({
  reducer: reducers,
  devTools: true,
});

export default store;
