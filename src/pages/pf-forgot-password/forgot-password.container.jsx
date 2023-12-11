import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import logo_icon_64 from "../../assets/images/logo-icon-64.png";
import style from "./forgot-password.module.css";
import { validateEmail } from "../../utils/validation";
import { URLs } from "../../routes/urls";
import PFButton from "../../component/pf-button";
import axios from "axios";
import { notification, message } from "antd";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const nav = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const formik = useFormik({
    initialValues: {
      email: "",
    },
    validate: (values) => {
      const errors = {};
      const check_email = validateEmail(values?.email);
      if (check_email && check_email != undefined) {
        errors.email = check_email;
      }
      return errors;
    },
    onSubmit: (values) => {
      axios
        .post("/api/forgot-password-api", {
          ...values,
        })
        .then((res) => {
          if (res.data.status === "success") {
            notification.success({
              message: "Success",
              description: "Password reset link sent to your email",
            });
            nav("/login");
          } else {
            const errorMessage = res.data.message || "Something went wrong!";
            notification.error({
              message: "Error",
              description: errorMessage,
            });
          }
        })
        .catch((error) => {
          message.error(error.response.data.error);
        });
    },
  });

  return (
    <>
      <section className="md:h-screen py-36 flex items-center bg-[url('../../assets/images/cta.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="container relative">
          <div className="flex justify-center">
            <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
              <Link to="/index">
                <img src={logo_icon_64} className="mx-auto" alt="" />
              </Link>
              <h5 className="mt-6 mb-2 text-xl font-semibold">
                Forgot Your Password?
              </h5>
              <div className="grid grid-cols-1">
                <p className="text-slate-400 mb-6">
                  Please enter your email address. You will receive a link to
                  create a new password via email.
                </p>
                <form onSubmit={formik.handleSubmit} className="text-start">
                  <div className="grid grid-cols-1">
                    <div className="mb-4">
                      <label className="font-semibold" htmlFor="email">
                        Email Address:
                      </label>
                      <input
                        id="email"
                        type="text"
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        className="form-input mt-3 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                        placeholder="name@example.com"
                      />
                      {formik.touched.email && formik.errors.email ? (
                        <div className={style.red}>{formik.errors.email}</div>
                      ) : null}
                    </div>

                    <div className="mb-4">
                      <PFButton
                        type="submit"
                        className={"w-full"}
                        buttonText="Send"
                      />
                    </div>

                    <div className="text-center">
                      <span className="text-slate-400 me-2">
                        Remember your password ?{" "}
                      </span>
                      <Link
                        to={URLs?.LOGIN}
                        className="text-black dark:text-white font-bold inline-block"
                      >
                        Sign in
                      </Link>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { ForgotPassword };
