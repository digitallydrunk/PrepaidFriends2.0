import React from 'react';
import { Link } from 'react-router-dom';
import Logo_icon_64 from '../../assets/images/logo-icon-64.png';
import { useFormik } from 'formik';
import {PFInput} from '../../component/input/input.container';
import style from './signup.container.module.css';

const Signuppage = () => {
  const formik = useFormik({
    initialValues: {
      RegisterFirstName: '',
      RegisterLastName: '',
      LoginEmail: '',
      BusinessName: '',
      AcceptTandC: false,
    },
    validate: (values) => {
      const errors = {};

      if (!values.RegisterFirstName.trim()) {
        errors.RegisterFirstName = 'Required*';
      }
      if (!values.RegisterLastName.trim()) {
        errors.RegisterLastName = 'Required*';
      }
      if (!values.LoginEmail.trim()) {
        errors.LoginEmail = 'Required*';
      } else if (!isValidEmail(values.LoginEmail)) {
        errors.LoginEmail = 'Invalid email format';
      }
      if (!values.BusinessName.trim()) {
        errors.BusinessName = 'Required*';
      }
      if (!values.AcceptTandC) {
        errors.AcceptTandC = 'You must accept the Terms and Conditions';
      }

      return errors;
    },
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <>
      <section className="md:h-screen py-36 flex items-center bg-[url('../../assets/images/cta.jpg')] bg-no-repeat bg-center bg-cover">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black"></div>
        <div className="container relative">
          <div className="flex justify-center">
            <div className="max-w-[400px] w-full m-auto p-6 bg-white dark:bg-slate-900 shadow-md dark:shadow-gray-800 rounded-md">
              <Link to="/index">
                <img src={Logo_icon_64} className="mx-auto" alt="" />
              </Link>
              <h5 className="my-6 text-xl font-semibold">Signup</h5>
              <form onSubmit={formik.handleSubmit} className="text-start">
                <div className="grid grid-cols-1 gap-4">
                  <div>
                    <PFInput
                      label="Enter First Name"
                      id="RegisterFirstName"
                      name="RegisterFirstName"
                      type="text"
                      placeholder="Enter your first name"
                      value={formik.values.RegisterFirstName}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.RegisterFirstName && formik.errors.RegisterFirstName && (
                      <p className={style.red}>{formik.errors.RegisterFirstName}</p>
                    )}
                  </div>
                  <div>
                    <PFInput
                      label="Enter Last Name"
                      id="RegisterLastName"
                      name="RegisterLastName"
                      type="text"
                      placeholder="Enter your last name"
                      value={formik.values.RegisterLastName}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.RegisterLastName && formik.errors.RegisterLastName && (
                      <p className={style.red}>{formik.errors.RegisterLastName}</p>
                    )}
                  </div>
                  <div>
                    <PFInput
                      label="Email Address"
                      id="LoginEmail"
                      name="LoginEmail"
                      type="text"
                      placeholder="name@example.com"
                      value={formik.values.LoginEmail}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.LoginEmail && formik.errors.LoginEmail && (
                      <p className={style.red}>{formik.errors.LoginEmail}</p>
                    )}
                  </div>
                  <div>
                    <PFInput
                      label="Business Name"
                      id="BusinessName"
                      name="BusinessName"
                      type="text"
                      placeholder="Enter your business name"
                      value={formik.values.BusinessName}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.BusinessName && formik.errors.BusinessName && (
                      <p className={style.red}>{formik.errors.BusinessName}</p>
                    )}
                  </div>
                  <div>
                    <div className="flex items-center mb-0">
                      <input
                        className="form-checkbox rounded border-gray-200 dark:border-gray-800 text-indigo-600 focus:border-indigo-300 focus:ring focus:ring-offset-0 focus:ring-indigo-200 focus:ring-opacity-50 me-2"
                        type="checkbox"
                        id="AcceptTandC"
                        name="AcceptTandC"
                        checked={formik.values.AcceptTandC}
                        onChange={formik.handleChange}
                      />
                      <label className="form-check-label text-slate-400" htmlFor="AcceptTandC">
                        I Accept <Link className="text-indigo-600">Terms And Condition</Link>
                      </label>
                    </div>
                    {formik.touched.AcceptTandC && formik.errors.AcceptTandC && (
                      <p className={style.red}>{formik.errors.AcceptTandC}</p>
                    )}
                  </div>
                  <div>
                    <input
                      type="submit"
                      className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                      value="Register"
                    />
                  </div>
                  <div className="text-center">
                    <span className="text-slate-400 me-2">Already have an account ? </span>
                    <Link to="/auth-login" className="text-black dark:text-white font-bold inline-block">
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

export { Signuppage };