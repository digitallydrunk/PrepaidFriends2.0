import React, { useState } from "react";
import { Link } from "react-router-dom";
import contact from "../../assets/images/contact.svg";
import { useFormik } from "formik";
import { requiredValidation, validateEmail } from "../../utils/validation";
import {
  MdKeyboardArrowRight,
  FiPhone,
  FaRegEnvelope,
  RiMapPinLine,
} from "../../assets/icons/icons";
import * as Icon from "react-feather";
import axios from "axios";
import { notification } from "antd";
import styles from "./contact.module.css";

const Contact = () => {
  const contactData = [
    {
      icon: FiPhone,
      title: "Phone",
      desc: "Call for Immediate Assistance",
      contact: "+1-000-111-0000",
    },
    {
      icon: FaRegEnvelope,
      title: "Email",
      desc: "Email Us for Quick Response",
      contact: "support@prepaidfriends.com",
    },
    {
      icon: RiMapPinLine,
      title: "Location",
      desc: "Find Us Here",
      contact: "View on Google map",
    },
  ];

  const [isLoading, setIsLoading] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      comment: "",
    },

    validate: (values) => {
      const errors = {};

      if (!values.name) {
        errors.name = requiredValidation?.error;
      }

      const check_email = validateEmail(values?.email);
      if (check_email && check_email != undefined) {
        errors.email = check_email;
      }

      return errors;
    },
    onSubmit: (values) => {
      setIsLoading(true);
      axios
        .post("/api/contact-us-api", {
          ...values,
        })
        .then((res) => {
          if (res.data.status === "success") {
            notification.success({
              message: "Success",
              description: "Email sent successfully!",
            });
            formik.resetForm();
          } else {
            notification.error({
              message: "Error",
              description: "Email not sent",
            });
          }
        })
        .catch((error) => {
          notification.error({
            message: "Error",
            description: "An error occurred. Please try again later.",
          });
        })
        .finally(() => {
          setIsLoading(false);
        });
    },
  });

  return (
    <>
      <section className="relative table w-full py-36 bg-[url('../../assets/images/company/aboutus.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">
              Contact Us
            </h3>
          </div>
        </div>

        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white/50 hover:text-white">
              <Link to="/">Prepaid Friends</Link>
            </li>
            <li className="inline-block text-base text-white/50 mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight className="text-xl" />
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-white"
              aria-current="page"
            >
              Contact Us
            </li>
          </ul>
        </div>
      </section>
      <div className="relative">
        <div className="shape absolute sm:-bottom-px -bottom-[2px] start-0 end-0 overflow-hidden z-1 text-white dark:text-slate-900">
          <svg
            className="w-full h-auto scale-[2.0] origin-top"
            viewBox="0 0 2880 48"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 48H1437.5H2880V0H2160C1442.5 52 720 0 720 0H0V48Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>

      <section className="relative md:py-24 py-16">
        <div className="container relative">
          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-[30px]">
            {contactData.map((item, index) => {
              let Icons = item.icon;
              return (
                <div key={index} className="text-center px-6 mt-6">
                  <div className="w-20 h-20 bg-indigo-600/5 text-indigo-600 rounded-xl text-3xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                    <Icons className="w-7 h-7" />
                  </div>

                  <div className="content mt-7">
                    <h5 className="title h5 text-xl font-medium">
                      {item.title}
                    </h5>
                    <p className="text-slate-400 mt-3">{item.desc}</p>

                    <div className="mt-5">
                      <p
                        to="/tel:++1-000-111-0000"
                        className="relative inline-block font-semibold tracking-wide align-middle text-base text-center border-none after:content-[''] after:absolute after:h-px after:w-0 hover:after:w-full after:end-0 hover:after:end-auto after:bottom-0 after:start-0 after:duration-500 text-indigo-600 hover:text-indigo-600 after:bg-indigo-600 duration-500"
                      >
                        {item.contact}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="container relative md:mt-24 mt-16">
          <div className="grid md:grid-cols-12 grid-cols-1 items-center gap-[30px]">
            <div className="lg:col-span-7 md:col-span-6">
              <img src={contact} alt="" />
            </div>

            <div className="lg:col-span-5 md:col-span-6">
              <div className="lg:ms-5">
                <div className="bg-white dark:bg-slate-900 rounded-md shadow dark:shadow-gray-800 p-6">
                  <h3 className="mb-6 text-2xl leading-normal font-medium">
                    Get in touch !
                  </h3>

                  <form onSubmit={formik.handleSubmit}>
                    <div className="grid lg:grid-cols-12 lg:gap-6">
                      <div className="lg:col-span-6 mb-5">
                        <div className="text-start">
                          <label htmlFor="name" className="font-semibold">
                            Your Name:
                          </label>
                          <div className="form-icon relative mt-2">
                            <Icon.User className="w-4 h-4 absolute top-3 start-4"></Icon.User>
                            <input
                              name="name"
                              id="name"
                              type="text"
                              className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                              placeholder="Name :"
                              value={formik.values.name}
                              onChange={formik.handleChange}
                            />
                            {formik.touched.name && formik.errors.name && (
                              <p style={{ color: "red" }}>
                                {formik.errors.name}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="lg:col-span-6 mb-5">
                        <div className="text-start">
                          <label htmlFor="email" className="font-semibold">
                            Your Email:
                          </label>
                          <div className="form-icon relative mt-2">
                            <Icon.Mail className="w-4 h-4 absolute top-3 start-4"></Icon.Mail>
                            <input
                              name="email"
                              id="email"
                              type="email"
                              className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                              placeholder="Email :"
                              value={formik.values.email}
                              onChange={formik.handleChange}
                            />{" "}
                            {formik.touched.email && formik.errors.email && (
                              <p style={{ color: "red" }}>
                                {formik.errors.email}
                              </p>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1">
                      <div className="mb-5">
                        <div className="text-start">
                          <label htmlFor="subject" className="font-semibold">
                            Your Question:
                          </label>
                          <div className="form-icon relative mt-2">
                            <Icon.Book className="w-4 h-4 absolute top-3 start-4"></Icon.Book>
                            <input
                              name="subject"
                              id="subject"
                              className="form-input ps-11 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                              placeholder="Subject :"
                              value={formik.values.subject}
                              onChange={formik.handleChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="mb-5">
                        <div className="text-start">
                          <label htmlFor="comments" className="font-semibold">
                            Your Comment:
                          </label>
                          <div className="form-icon relative mt-2">
                            <Icon.MessageCircle className="w-4 h-4 absolute top-3 start-4"></Icon.MessageCircle>
                            <textarea
                              name="comment"
                              id="comments"
                              className="form-input ps-11 w-full py-2 px-3 h-28 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0"
                              placeholder="Message :"
                              value={formik.values.comment}
                              onChange={formik.handleChange}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      id="submit"
                      name="send"
                      className="py-2 px-5 font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md justify-center flex items-center  w-44"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className={`flex ${styles.loader_container}`}>
                          <div className={styles.loader}></div>
                          <span>Sending</span>
                        </div>
                      ) : (
                        "Send Message"
                      )}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="container-fluid relative">
        <div className="grid grid-cols-1">
          <div className="w-full leading-[0] border-0">
            <iframe
              title="google"
              src="https://maps.google.com/maps?q=university%20of%20san%20francisco&amp;t=&amp;z=9&amp;ie=UTF8&amp;iwloc=&amp;output=embed"
              style={{ border: 0 }}
              className="w-full h-[500px]"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </>
  );
};

export { Contact };
