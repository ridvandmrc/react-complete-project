import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { DefaultTheme, History } from "@utils";
import { Route } from "@routes";
import { ThemeProvider } from "@mui/material";
import { Provider } from "react-redux";
import { store } from "@store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <History>
      <ThemeProvider theme={DefaultTheme}>
        <Provider store={store}>
          <Route />
        </Provider>
      </ThemeProvider>
    </History>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
