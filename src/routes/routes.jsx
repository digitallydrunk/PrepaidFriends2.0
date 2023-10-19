import React from "react";
import { createBrowserRouter } from "react-router-dom";
import "../assets/libs/@mdi/font/css/materialdesignicons.min.css";
import Homepage from "../pages/pf-home";
import Sample from "../pages/sample";
import Layout from "../component/layout";
import { URLs } from "./urls";
import LoginPage from "../pages/pf-login";
import Contact from "../pages/pf-contact";

const router = createBrowserRouter([
  {
    path: URLs.BASE,
    element: <Layout />,
    children: [
      {
        path: URLs.BASE,
        element: <Homepage />,
      },
      {
        path: URLs.LOGIN,
        element: <LoginPage />,
      },
      {
        path: URLs.CONTACT,
        element: <Contact />,
      },
      {
        path: URLs.SAMPLE,
        element: <Sample />,
      },
    ],
  },
]);

export default router;
