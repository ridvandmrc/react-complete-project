import { configureStore } from "@reduxjs/toolkit";
import { loaderReducer } from "./loader-slice";
export * from "./loader-slice";

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
  },
});
