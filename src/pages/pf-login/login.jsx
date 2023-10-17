import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo_icon_64 from "../../assets/images/logo-icon-64.png";
import { Formik, Form, Field } from "formik";
import { FiEye } from "react-icons/fi";
import { FiEyeOff } from "react-icons/fi";

function validateEmail(value) {
  let error;
  if (!value) {
    error = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
    error = "Invalid email address";
  }
  return error;
}

function validatePassword(value) {
  let error;
  if (!value) {
    error = "Required";
  }
  return error;
}

const LoginPage2 = () => {
  const [showPassword, setShowPassword] = useState(true);
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
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage2;
