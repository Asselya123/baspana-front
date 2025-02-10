"use strict";

import { StyleProvider } from "@ant-design/cssinjs";
import { App, ConfigProvider } from "antd";
import ErrorBoundary from "antd/es/alert/ErrorBoundary";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "@/index.css";
import { RouterProvider } from "./Routes";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <BrowserRouter>
        <StyleProvider hashPriority="high">
          <ConfigProvider theme={{ token: { colorPrimary: "#008F91" } }}>
            <App>
              <RouterProvider />
            </App>
          </ConfigProvider>
        </StyleProvider>
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
