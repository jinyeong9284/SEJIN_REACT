import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* 페이지 간의 이동 및 네비게이션을 사용하기 위한 사전 설정 */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
