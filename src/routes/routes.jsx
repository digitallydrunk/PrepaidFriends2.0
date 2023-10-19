import React from "react";
import { createBrowserRouter } from "react-router-dom";
import "../assets/libs/@mdi/font/css/materialdesignicons.min.css";
import ContactOne from "../pages/contact/contactOne";
import Homepage from "../pages/pf-home";
import Sample from "../pages/sample";
import Layout from "../component/layout";
import { URLs } from "./urls";
import LoginPage from "../pages/pf-login";

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
        element: <ContactOne />,
      },
      {
        path: URLs.SAMPLE,
        element: <Sample />,
      },
    ],
  },
]);

export default router;
