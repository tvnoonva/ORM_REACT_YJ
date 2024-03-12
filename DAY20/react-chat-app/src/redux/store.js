//saga 미사용 store 구성 --------------------------------------
import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducers";

const store = configureStore({
  reducer: reducers,
  devTools: true,
});

export default store;
