import React from "react";
import { Link } from "react-router-dom";
import Logo_icon_64 from "../../assets/images/logo-icon-64.png";
import { useFormik } from "formik";
import { PFInput } from "../../component/input/input.container";
import style from "./signup.module.css";
import { requiredValidation, validateEmail } from "../../utils/validation";
import { URLs } from "../../routes/urls";
import PFButton from "../../component/pf-button";

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      businessName: "",
      termsAndConditionsCheck: false,
    },

    validate: (values) => {
      const errors = {};

      if (!values.firstName) {
        errors.firstName = requiredValidation?.error;
      }
      if (!values.lastName) {
        errors.lastName = requiredValidation?.error;
      }
      errors.email = validateEmail(values?.email);

      if (!values.businessName) {
        errors.businessName = requiredValidation?.error;
      }
      if (!values.termsAndConditionsCheck) {
        errors.termsAndConditionsCheck =
          "You must accept the Terms and Conditions";
      }

      return errors;
    },
    onSubmit: (values) => {
      // Handle Form Submission
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
              <Link to={URLs?.BASE}>
                <img src={Logo_icon_64} className="mx-auto" alt="" />
              </Link>
              <h5 className="my-6 text-xl font-semibold">Sign Up</h5>
              <form onSubmit={formik.handleSubmit} className="text-start">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <PFInput
                      label="Enter First Name"
                      id="firstName"
                      name="firstName"
                      type="text"
                      placeholder="Enter your first name"
                      value={formik.values.firstName}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.firstName && formik.errors.firstName && (
                      <p className={style.red}>{formik.errors.firstName}</p>
                    )}
                  </div>
                  <div>
                    <PFInput
                      label="Enter Last Name"
                      id="lastName"
                      name="lastName"
                      type="text"
                      placeholder="Enter your last name"
                      value={formik.values.lastName}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.lastName && formik.errors.lastName && (
                      <p className={style.red}>{formik.errors.lastName}</p>
                    )}
                  </div>
                  <div>
                    <PFInput
                      label="Email Address"
                      id="email"
                      name="email"
                      type="text"
                      placeholder="name@example.com"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.email && formik.errors.email && (
                      <p className={style.red}>{formik.errors.email}</p>
                    )}
                  </div>
                  <div>
                    <PFInput
                      label="Business Name"
                      id="businessName"
                      name="businessName"
                      type="text"
                      placeholder="Enter your business name"
                      value={formik.values.businessName}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.businessName &&
                      formik.errors.businessName && (
                        <p className={style.red}>
                          {formik.errors.businessName}
                        </p>
                      )}
                  </div>
                  <div>
                    <div className="flex items-center mb-0">
                      <input
                        className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                        type="checkbox"
                        id="termsAndConditionsCheck"
                        name="termsAndConditionsCheck"
                        checked={formik.values.termsAndConditionsCheck}
                        onChange={formik.handleChange}
                      />
                      <label
                        className="form-check-label text-slate-400"
                        htmlFor="termsAndConditionsCheck"
                      >
                        I Accept{" "}
                        <Link className="text-indigo-600">
                          Terms And Condition
                        </Link>
                      </label>
                    </div>
                    {formik.touched.termsAndConditionsCheck &&
                      formik.errors.termsAndConditionsCheck && (
                        <p className={style.red}>
                          {formik.errors.termsAndConditionsCheck}
                        </p>
                      )}
                  </div>
                  <div>
                    <PFButton
                      type="submit"
                      className={"w-full"}
                      buttonText="Register"
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-slate-400 me-2">
                      Already have an account ?{" "}
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
      </section>
    </>
  );
};

export { SignUp };
