import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import employeeSlice from "./features/employeeSlice";

export const store = configureStore({
  reducer: { employeeSlice },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
  devTool: true,
});
