import React from "react";
import logo_icon_64 from "../../assets/images/logo-icon-64.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import PFInput from "../../component/input";
import PFCheckbox from "../../component/checkbox";
import styles from "./login.container.module.css";
import { URLs } from "../../routes/urls";
import { requiredValidation, validateEmail } from "../../utils/validation";
import PFButton from "../../component/pf-button";
import axios from "axios";
import { notification, message } from "antd";
import { useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import { useAuth } from "../../hooks/useAuth";
const LoginPage = () => {
  const nav = useNavigate();
  const [_, setCookie] = useCookies(["pfAuthToken"]);
  const { login } = useAuth();
  const [rememberMe, setRememberMe] = useState(false);
  const validate = (values) => {
    const errors = {};

    const check_email = validateEmail(values?.email);
    if (check_email && check_email != undefined) {
      errors.email = check_email;
    }

    if (!values.password) {
      errors.password = requiredValidation?.error;
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      axios
        .post("/api/login-user-api", {
          ...values,
        })
        .then((res) => {
          if (res?.data?.token) {
            setCookie("pfAuthToken", res?.data?.token, { path: "/" });
            axios({
              url: "/api/user-detail-api",
              method: "get",
              headers: {
                Authorization: `Bearer ${res?.data?.token}`,
              },
            })
              .then((response) => {
                login({
                  customerName: `${response?.data?.user?.first_name} ${response?.data?.user?.last_name}`,
                  email: response?.data?.user?.email,
                });
                notification.success({
                  message: "Success",
                  description: "Success!! Your are login Successfully",
                });
                nav("/dashboard");
              })
              .catch((err) => {
                console.log(err);
              });
          } else {
            if (res?.data?.message === "Invalid email format") {
              message.error(
                "Invalid Email. Please enter a valid email address."
              );
            } else if (res?.data?.message === "Email not found") {
              message.error(
                "Email Not Found. The provided email address was not found."
              );
            } else if (res?.data?.message === "Invalid password format") {
              message.error("Invalid Password. Please enter a valid password.");
            } else if (res?.data?.message === "Incorrect password") {
              message.error(
                "Incorrect Password. The provided password is incorrect."
              );
            } else {
              message.error(
                "Login Failed. Incorrect credentials. Please try again."
              );
            }
          }
        })
        .catch((error) => {
          message.error(error.response.data);
        });
    },
  });

  const handleRememberMeChange = () => {
    setRememberMe(!rememberMe);
  };

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
              <h5 className="my-6 text-xl font-semibold">Login</h5>
              <form onSubmit={formik.handleSubmit} className="text-start">
                <div className="grid grid-cols-1">
                  <div className="mb-4">
                    <PFInput
                      label="Email"
                      id="email"
                      name="email"
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div>
                        {" "}
                        <p className={styles.red}>{formik.errors.email}</p>{" "}
                      </div>
                    ) : null}
                  </div>

                  <div className="mb-4">
                    <PFInput
                      label="Password"
                      id="password"
                      name="password"
                      type="password"
                      value={formik.values.password}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.password && formik.errors.password ? (
                      <div>
                        <p className={styles.red}>{formik.errors.password}</p>
                      </div>
                    ) : null}
                  </div>

                  <div className="flex justify-between mb-4">
                    <PFCheckbox
                      id="RememberMe"
                      htmlFor="RememberMe"
                      label="Remember me"
                      checked={rememberMe}
                      onChange={handleRememberMeChange}
                    />
                    <p className="text-slate-400 mb-0">
                      <Link
                        to={URLs.FORGOT_PASSWORD}
                        className="text-slate-400"
                      >
                        Forgot password ?
                      </Link>
                    </p>
                  </div>

                  <div className="mb-4">
                    <PFButton
                      type="submit"
                      className={"w-full"}
                      buttonText="Login / Sign in"
                    />
                  </div>

                  <div className="text-center">
                    <span className="text-slate-400 me-2">
                      Don't have an account ?
                    </span>{" "}
                    <Link
                      to={URLs.SIGN_UP}
                      className="text-black dark:text-white font-bold inline-block"
                    >
                      Sign Up
                    </Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { LoginPage };
