import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes.jsx";
import { ConfigProvider } from "antd";
import { StyleProvider } from "@ant-design/cssinjs";
import enUS from "antd/es/calendar/locale/en_US";

const token = {
  token: {
    colorPrimary: "#d74f58",
    borderRadius: 0,
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ConfigProvider theme={token} locale={enUS}>
      <StyleProvider hashPriority="high">
        <RouterProvider router={routes} />
      </StyleProvider>
    </ConfigProvider>
  </React.StrictMode>
);
