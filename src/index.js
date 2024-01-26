import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import reportWebVitals from "./reportWebVitals";
import Meeting from "./meeting";

let payload = {
  meetingNumber: "740 7136 8793",
  role: 0,
  sdkKey: "PV6K6l9IREmKmrqCy_rqfw",
  sdkSecret: "wz5E6nM6g0OCkbTVXdqc2Hwws6rLsNZl",
  passWord: "V4KsXh",
  userName: "Testing",
  UserEmail: "",
  leaveUrl: "https://localhost:3000",
};
const root = ReactDOM.createRoot(document.getElementById("root"));
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/meeting",
    element: <Meeting payload={payload} />,
  },
]);

root.render(<RouterProvider router={router}></RouterProvider>);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
