import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FiThumbsUp } from "../../assets/icons/icons";
import styles from "./order-confirmation.module.css";

function OrderConfirmation() {
  const nav = useNavigate();
  const [isRedirecting, setIsRedirecting] = useState(true);
  const [countdown, setCountdown] = useState(20);

  useEffect(() => {
    if (isRedirecting) {
      const redirectionTimeout = setTimeout(() => {
        nav("/");
      }, 20000);

      const countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => prevCountdown - 1);
      }, 1000);

      return () => {
        clearTimeout(redirectionTimeout);
        clearInterval(countdownInterval);
      };
    }
  }, [isRedirecting, nav]);
  return (
    <>
      <section
        className={`${styles.background} flex items-center justify-center  bg-gray-50 dark:bg-slate-800`}
      >
        <div className="container relative">
          <div className="grid grid-cols-1 gap-5">
            <div className="title-heading text-center my-auto">
              <div className="w-24 h-24 bg-indigo-600/5 text-indigo-600 rounded-full text-5xl flex align-middle justify-center items-center shadow-sm dark:shadow-gray-800 mx-auto">
                <FiThumbsUp className="w-11 h-11" />
              </div>
              <h1 className="mt-6 mb-8 md:text-5xl text-3xl font-bold">
                Order Successful 🎉
              </h1>
              <div className="flex flex-col font-bold border-y py-6">
                <div className="w-2/4 mx-auto text-start">
                  <h6 className="font-bold">
                    Order Number:{" "}
                    <span className="text-slate-400 font-semibold">
                      #37843784800
                    </span>
                  </h6>
                  <h6 className="font-bold">
                    Email Address:{" "}
                    <span className="text-slate-400 font-semibold">
                      johndoe@email.com
                    </span>
                  </h6>
                  <h6 className="font-bold">
                    Order Total:{" "}
                    <span className="text-slate-400 font-semibold">
                      $100 USD
                    </span>
                  </h6>
                  <h6 className="font-bold">
                    Payment Method:{" "}
                    <span className="text-sm font-bold text-green-600">
                      BTC
                    </span>
                  </h6>
                </div>
              </div>
              <p className="text-slate-400 max-w-xl mx-auto mt-4">
                You will receive a confirmation of your order on your provided
                email address.
              </p>
              You will Redirect to home page in {countdown} seconds
              <div className="mt-6">
                <Link
                  to="/"
                  className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle transition duration-500 ease-in-out text-base text-center bg-indigo-600/5 hover:bg-indigo-600 border-indigo-600/10 hover:border-indigo-600 text-indigo-600 hover:text-white rounded-md"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export { OrderConfirmation };
