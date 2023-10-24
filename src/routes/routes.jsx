import React from "react";
import { createBrowserRouter } from "react-router-dom";
import "../assets/libs/@mdi/font/css/materialdesignicons.min.css";
import Homepage from "../pages/pf-home";
import Sample from "../pages/sample";
import Layout from "../component/layout";
import { URLs } from "./urls";
import LoginPage from "../pages/pf-login";
import Contact from "../pages/pf-contact";
import SingleOrder from "../pages/pf-single-order/singleorder.container";
import BulkOrder from "../pages/pf-bulkOrder";

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
      {
        path: URLs.SINGLE_ORDER,
        element: <SingleOrder />,
      },
      {
        path: URLs.BULK_ORDER,
        element: <BulkOrder/>,
      },
    ],
  },
]);

export default router;
