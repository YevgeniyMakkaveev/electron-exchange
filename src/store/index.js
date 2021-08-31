import { configureStore } from "@reduxjs/toolkit";
import curSlice from "./currencyList";

export default configureStore({
  reducer: { table: curSlice },
});
