"use strict";

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
        <RouterProvider />
      </BrowserRouter>
    </ErrorBoundary>
  </React.StrictMode>,
);
