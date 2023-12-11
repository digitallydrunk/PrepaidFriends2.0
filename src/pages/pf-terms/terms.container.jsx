import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { MdKeyboardArrowRight, FaArrowRight } from "../../assets/icons/icons";

const PageTerms = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const toggleAccordion = (index) => {
    if (activeIndex === index) {
      setActiveIndex(0);
    } else {
      setActiveIndex(index);
    }
  };
  const accordionData = [
    {
      title:
        "What is the minimum age requirement to use Prepaid Friends services ?",
      content: "To use our services, you must be at least 18 years old.",
    },
    {
      title:
        "How does the exchange process work for Bitcoin to prepaid Visa/Mastercard cards ?",
      content:
        "Prepaid Friends facilitates the exchange of Bitcoin for prepaid Visa and Mastercard cards, with the exchange rate determined based on real-time market conditions at the time of the transaction.",
    },
    {
      title:
        "What responsibilities do users have regarding the confidentiality of their account information ?",
      content:
        "Users are responsible for maintaining the confidentiality of their account and login credentials. Any activity on the account is the user's responsibility.",
    },
    {
      title:
        "In what situations can Prepaid Friends terminate or suspend a user's account ?",
      content:
        "Prepaid Friends reserves the right to terminate or suspend any user's account at its discretion. Users also have the option to terminate their accounts by contacting customer support.",
    },
  ];

  return (
    <>
      <section className="relative table w-full py-32 lg:py-40 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1 text-center mt-10">
            <h3 className="text-3xl leading-normal font-semibold">
              Terms of Services
            </h3>
          </div>
        </div>
        <div className="absolute text-center z-10 bottom-5 start-0 end-0 mx-3">
          <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600">
              <Link to="/index">PrepaidFriends</Link>
            </li>
            <li className="inline-block text-base mx-0.5 ltr:rotate-0 rtl:rotate-180">
              <MdKeyboardArrowRight className="text-xl" />
            </li>
            <li
              className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600"
              aria-current="page"
            >
              Terms
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
          <div className="md:flex justify-center">
            <div className="md:w-3/4">
              <div className="p-6 bg-white dark:bg-slate-900 shadow dark:shadow-gray-800 rounded-md">
                <h5 className="text-xl font-semibold mb-4">Introduction :</h5>
                <p className="text-slate-400">
                  Welcome to Prepaid Friends! To ensure a clear understanding of
                  our services, please read and agree to the following Terms and
                  Conditions. By using our services, you acknowledge that you
                  have read, understood, and agreed to abide by these terms. If
                  you have any questions or concerns, please contact our
                  customer support at{" "}
                  <a
                    href="mailto:support@prepaidfriends.com"
                    style={{ color: "#4F46E5" }}
                  >
                    support@prepaidfriends.com
                  </a>
                  .
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">
                  User Agreements :
                </h5>
                <p className="text-m font-semibold mb-4 mt-8">
                  By using Prepaid Friends' services, you agree to the following
                  terms:
                </p>
                <p className="text-slate-400 mt-3">
                  User responsibilities include maintaining the confidentiality
                  of account and login credentials. Users are also prohibited
                  from using the services for{" "}
                  <b className="text-red-600">
                    illegal activities, fraud, or money laundering.
                  </b>{" "}
                  Prepaid Friends may charge fees for its services, and these
                  fees will be clearly communicated before the transaction.
                  Users are additionally responsible for any fees charged by{" "}
                  <b className="text-red-600">
                    third-party payment processors.
                  </b>{" "}
                  The prepaid Visa/Mastercard cards obtained through the service
                  can be used wherever Visa/Mastercard is accepted. Each card
                  comes with its terms and conditions, and users must abide by
                  them.
                </p>
                <p className="text-slate-400 mt-3">
                  Prepaid Friends is not liable for any{" "}
                  <b className="text-red-600">
                    loss of Bitcoin during the exchange process
                  </b>{" "}
                  and is not responsible for any damages resulting from the use
                  of the prepaid cards. The platform reserves the right to{" "}
                  <b className="text-red-600">terminate or suspend</b> any
                  user's account at its discretion. Users also have the option
                  to terminate their accounts by contacting customer support.
                  The terms and conditions may be{" "}
                  <b className="text-red-600">updated or modified </b>from time
                  to time. Users will be notified of significant changes, and
                  the continued use of the services constitutes acceptance of
                  the updated terms.
                </p>

                <h5 className="text-xl font-semibold mb-4 mt-8">
                  Restrictions :
                </h5>
                <p className="text-slate-400">
                  As a user or visitor, you are expressly prohibited from
                  engaging in the following activities:
                </p>
                <ul className="list-none space-x-1 text-slate-400 mt-3">
                  <li className="flex items-center mt-2">
                    <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2" />
                    <b>Unauthorized Use</b>: Prohibited access or use of our
                    digital marketing solutions.
                  </li>
                  <li className="flex items-center mt-2">
                    <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2" />
                    <b>Misuse of Content</b>: No reproduction, duplication, or
                    redistribution of any brand-related content.
                  </li>
                  <li className="flex items-center mt-2">
                    <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2" />
                    <b>Impersonation</b>: Strict prohibition on attempting to
                    impersonate our marketing agency.
                  </li>
                  <li className="flex items-center mt-2">
                    <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2" />
                    <b>Modification of Brand Elements</b>: No altering or
                    imitating brand elements without explicit permission.
                  </li>
                  <li className="flex items-center mt-2">
                    <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2" />
                    <b>Unlawful Activities</b>: Strictly prohibited engagement
                    in illegal or unethical activities using our solutions.
                  </li>
                  <li className="flex items-center mt-2">
                    <FaArrowRight className="ms-2 text-[10px] text-indigo-600  align-middle me-2" />
                    <b>Violation of Terms</b>: Not allowed; adherence to
                    outlined terms and conditions is mandatory.{" "}
                  </li>
                </ul>

                <h5 className="text-xl font-semibold mt-8">
                  Users Question & Answer :
                </h5>

                <div
                  id="accordion-collapse"
                  data-accordion="collapse"
                  className="mt-6"
                >
                  {accordionData.map((item, index) => (
                    <div
                      key={index}
                      className="relative shadow dark:shadow-gray-800 rounded-md overflow-hidden mt-4"
                    >
                      <h2
                        className="text-base font-semibold"
                        id="accordion-collapse-heading-1"
                      >
                        <button
                          type="button"
                          onClick={() => toggleAccordion(index)}
                          className={`flex justify-between items-center p-5 w-full font-medium text-start ${
                            activeIndex === index
                              ? "bg-gray-50 dark:bg-slate-800 text-indigo-600"
                              : ""
                          }`}
                          data-accordion-target="#accordion-collapse-body-1"
                          aria-expanded="true"
                          aria-controls="accordion-collapse-body-1"
                        >
                          <span>{item.title}</span>
                          <svg
                            data-accordion-icon
                            className={`${
                              activeIndex === index
                                ? "rotate-180"
                                : "rotate-270"
                            } w-4 h-4 shrink-01`}
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd"
                            ></path>
                          </svg>
                        </button>
                      </h2>
                      {activeIndex === index && (
                        <div>
                          <div className="p-5">
                            <p className="text-slate-400 dark:text-gray-400">
                              {item.content}
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md">
                    Accept
                  </Link>
                  <Link className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-transparent hover:bg-indigo-600 border-indigo-600 text-indigo-600 hover:text-white rounded-md ms-2">
                    Decline
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { PageTerms };
