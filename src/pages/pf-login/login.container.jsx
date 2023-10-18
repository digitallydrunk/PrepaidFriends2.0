import React from "react";
import { Link } from "react-router-dom";
import logo_icon_64 from "../../assets/images/logo-icon-64.png";
import { useFormik } from "formik";
import PFInput from "../../component/input";
import styles from "./login.container.module.css";

const LoginPage = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Required";
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
      console.log(values);
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
                    <div className="flex items-center mb-0">
                      <input
                        className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                        type="checkbox"
                        value=""
                        id="RememberMe"
                      />
                      <label
                        className="form-checkbox-label text-slate-400"
                        htmlFor="RememberMe"
                      >
                        Remember me
                      </label>
                    </div>
                    <p className="text-slate-400 mb-0">
                      <Link to="/auth-re-password" className="text-slate-400">
                        Forgot password ?
                      </Link>
                    </p>
                  </div>

                  <div className="mb-4">
                    <input
                      type="submit"
                      className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                      value="Login / Sign in"
                    />
                  </div>

                  <div className="text-center">
                    <span className="text-slate-400 me-2">
                      Don't have an account ?
                    </span>{" "}
                    <Link
                      to="/auth-signup"
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
