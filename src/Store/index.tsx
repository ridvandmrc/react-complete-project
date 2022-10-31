import { configureStore } from "@reduxjs/toolkit";
import { loaderReducer } from "./loader-slice";
import { notificationSliceReducer } from "./notification-slice";
export * from "./loader-slice";

export const store = configureStore({
  reducer: {
    loader: loaderReducer,
    notificationSlice: notificationSliceReducer,
  },
});
