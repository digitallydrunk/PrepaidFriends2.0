import React, { useContext, useEffect, useState } from "react";
import styles from "./singleorder.container.module.css";
import { PFInput } from "../../component/input/input.container.jsx";
import PFButton from "../../component/pf-button";
import PFTag from "../../component/pf-tag";
import { useFormik } from "formik";
import { requiredValidation, validateEmail } from "../../utils/validation";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "../../assets/icons/icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { AuthContext } from "../../context/auth-context";
import axios from "axios";
import { usdToBTC } from "../../utils/helper";
import { useCookies } from "react-cookie";
import { message } from "antd";
import { useNavigate } from "react-router-dom";
import { Skeleton } from "antd";
export default function SingleOrder() {
  const navigate = useNavigate();
  const [cookies] = useCookies(["pfAuthToken"]);
  const [selectedAmount, setSelectedAmount] = useState("");
  const [additionalCharges, setAdditionalCharges] = useState(null);
  const [btcRate, setBtcRate] = useState(0);
  const { user } = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(false);
  const [reCalculatingCharges, setRecalculatingCharges] = useState(false);
  const handleManualAmountInput = async (e) => {
    const inputValue =
      e.target.value !== "" ? parseFloat(e.target.value) : e.target.value;

    if (!isNaN(inputValue) && inputValue >= 0) {
      setSelectedAmount(inputValue);
      if (inputValue) {
        getItemCalculation(inputValue);
      }
    }
  };

  const getItemCalculation = (price) => {
    setRecalculatingCharges(true);
    axios
      ?.post("/api/order-calculation-api", {
        order_type: "preOwned",
        payment_method: "btc",
        items: [
          {
            quantity: 1,
            price,
          },
        ],
      })
      ?.then((res) => {
        setAdditionalCharges(res?.data);
        setRecalculatingCharges(false);
      })
      ?.catch((err) => console.error(err));
  };

  const getBtcRate = async () => {
    try {
      const response = await axios.post("/api/rate-api");
      const btcPrice = response.data.value;
      setBtcRate(btcPrice);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const formik = useFormik({
    initialValues: {
      email: "",
      selectedAmount: "",
    },
    validate: (values) => {
      const errors = {};
      const check_email = validateEmail(values?.email);
      if (check_email && check_email != undefined && !(user && user?.email)) {
        errors.email = check_email;
      }
      if (!values.selectedAmount && !selectedAmount) {
        errors.selectedAmount = requiredValidation?.error;
      }

      return errors;
    },
    onSubmit: (values) => {
      if (user && user?.email) {
        handlePreorderSubmit(user.email, parseInt(selectedAmount), false);
      } else {
        handlePreorderSubmit(values.email, parseInt(selectedAmount), true);
      }
    },
  });

  function handlePreorderSubmit(email, price, guest) {
    setIsLoading(true);
    axios
      ?.post(
        `/api/preowned-order`,
        {
          email: email,
          payment_method: "btc",
          guest: guest,
          items: [
            {
              quantity: 1,
              price: price,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${cookies?.pfAuthToken}`,
          },
        }
      )
      .then((res) =>
        navigate(`/payment`, {
          state: { email: email, data: res?.data },
        })
      )
      .catch((err) =>
        message.error(
          err?.response?.data?.error || err?.response?.data?.message
        )
      )
      ?.finally(() => {
        setIsLoading(false);
      });
  }

  useEffect(() => {
    window.scrollTo(0, 0);

    getBtcRate();
    setIsLoading(false);
  }, []);

  return (
    <>
      <section className="relative table w-full py-36 bg-[url('../../assets/images/company/aboutus.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">
              Individual Order
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
              SingleOrder
            </li>
          </ul>
        </div>
      </section>
      <span className="fixed blur-[200px] w-[600px] h-[600px] rounded-full top-1/2 -translate-y-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 bg-indigo-600/20"></span>
      <section className="relative overflow-hidden pt-12 md:pt-6 md:pb-24 pb-16">
        <div className="container relative">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center mt-8 gap-[30px] relative">
            <div className="md:me-6">
              <ul className="list-none mb-0 text-amber-400 text-xl space-x-1">
                <li className="inline">
                  <i className="mdi mdi-star"></i>
                </li>
                <li className="inline">
                  <i className="mdi mdi-star"></i>
                </li>
                <li className="inline">
                  <i className="mdi mdi-star"></i>
                </li>
                <li className="inline">
                  <i className="mdi mdi-star"></i>
                </li>
                <li className="inline">
                  <i className="mdi mdi-star"></i>
                </li>
              </ul>
              <h4 className="font-bold lg:leading-normal leading-normal text-4xl lg:text-5xl mb-5 text-black dark:text-white">
                Two{" "}
                <span className="after:absolute after:end-0 after:start-0 after:bottom-3 after:-rotate-6 after:h-2 after:w-auto after:rounded-md after:bg-indigo-600/20 relative text-indigo-600">
                  Steps
                </span>{" "}
                to Convenience
              </h4>
              <p className="text-slate-400 text-lg max-w-xl">
                With zero hidden fees and enhanced security features, you
                control your spending without compromise. Experience a seamless
                blend of crypto functionality and everyday usability today!
              </p>
            </div>
            <div className="relative py-16 bg-gradient-to-br from-sky-50 to-gray-200">
              <div className="relative container mx-auto px-6 text-gray-500 md:px-12 xl:px-40">
                <div className="mx-auto md:w-8/12 lg:w-6/12 xl:w-6/12">
                  <div className="rounded-xl bg-white shadow-xl">
                    <div className="p-4 py-8 sm:p-16">
                      <div>
                        <PFInput
                          label="Enter Prepaid Card Amount"
                          placeholder="$0.00"
                          type="number"
                          min="0"
                          addOnAfter={
                            <p className={styles["add-on-after-input"]}>USD</p>
                          }
                          value={selectedAmount}
                          onChange={handleManualAmountInput}
                          onBlur={formik.handleBlur}
                        />
                        {formik.touched.selectedAmount &&
                        formik.errors.selectedAmount &&
                        !selectedAmount ? (
                          <div className={`${styles["error-message"]}`}>
                            {formik.errors.selectedAmount}
                          </div>
                        ) : null}
                      </div>
                      <div className="mt-3">
                        <span className="py-3 mr-2">Popular Amounts</span>
                        {[25, 50, 75, 100, 200].map((amount) => (
                          <PFTag
                            label={`$${amount}`}
                            variant={
                              selectedAmount === amount ? "primary" : "default"
                            }
                            className={styles.tags}
                            onClick={() => {
                              setSelectedAmount(amount);
                              getItemCalculation(amount);
                            }}
                          />
                        ))}
                      </div>
                      <div className={`mt-3 `}>
                        <div
                          className={`${styles.email_wrapper} border-gray-200`}
                        >
                          <FontAwesomeIcon
                            icon={faEnvelope}
                            style={{
                              color: "#000000",
                              height: "16px",
                              position: "absolute",
                              top: "24px",
                              left: "10px",
                            }}
                          />

                          <PFInput
                            placeholder="Enter Email Address"
                            type="email"
                            name="email"
                            value={
                              user && user?.email
                                ? user?.email
                                : formik.values.email
                            }
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            disabled={user && user?.email ? true : false}
                            className={styles.input_value}
                            autocomplete="off"
                          />
                        </div>
                        {formik.touched.email && formik.errors.email ? (
                          <p className={`${styles["error-message"]}`}>
                            {formik.errors.email}
                          </p>
                        ) : null}
                      </div>
                      <PFButton
                        type="submit"
                        id="orderButton"
                        name="orderButton"
                        buttonText={
                          isLoading ? "Processing your Request" : "Order Now"
                        }
                        className={"w-full mt-3"}
                        onClick={formik.handleSubmit}
                      />
                      <div className="mt-3 px-1 text-sm">
                        {selectedAmount ? (
                          <>
                            <div className="py-2">
                              <div
                                className={`flex justify-space-between items-center`}
                              >
                                <span
                                  className={
                                    styles["additional-transaction-label"]
                                  }
                                >
                                  BTC Exchange Fee:
                                </span>
                                <span
                                  className={
                                    styles["additional-transaction-value"]
                                  }
                                >
                                  {reCalculatingCharges ? (
                                    <Skeleton.Button
                                      size="small"
                                      shape="square"
                                      active
                                      style={{
                                        // marginBottom: "0.8rem",
                                        marginLeft: "0.2rem",
                                      }}
                                    />
                                  ) : (
                                    additionalCharges?.transaction_fee || 0
                                  )}{" "}
                                  USD
                                </span>
                              </div>
                            </div>
                            <hr />
                            <div className="py-2">
                              <div
                                className={`flex justify-space-between items-center`}
                              >
                                <span
                                  className={
                                    styles["additional-transaction-label"]
                                  }
                                >
                                  Prepaid Card Purchase Price:
                                </span>
                                <span
                                  className={
                                    styles["additional-transaction-value"]
                                  }
                                >
                                  {" "}
                                  {reCalculatingCharges ? (
                                    <Skeleton.Button
                                      size="small"
                                      shape="square"
                                      active
                                      style={{
                                        // marginBottom: "0.8rem",
                                        marginLeft: "0.2rem",
                                      }}
                                    />
                                  ) : additionalCharges?.items &&
                                    additionalCharges?.items?.length > 0 ? (
                                    additionalCharges?.items?.[0]?.cost
                                  ) : (
                                    0
                                  )}{" "}
                                  USD
                                </span>
                              </div>
                            </div>
                            <hr />
                            <div className="py-2">
                              <div
                                className={`flex justify-space-between items-center`}
                              >
                                <span
                                  className={
                                    styles["additional-transaction-label"]
                                  }
                                >
                                  Total (Amount in USD):
                                </span>
                                <span
                                  className={
                                    styles["additional-transaction-value"]
                                  }
                                >
                                  {" "}
                                  {reCalculatingCharges ? (
                                    <Skeleton.Button
                                      size="small"
                                      shape="square"
                                      active
                                      style={{
                                        // marginBottom: "0.8rem",
                                        marginLeft: "0.2rem",
                                      }}
                                    />
                                  ) : (
                                    additionalCharges?.order_total || 0
                                  )}{" "}
                                  USD
                                </span>
                              </div>
                            </div>
                            <hr />
                            <div className="py-2">
                              <div
                                className={`flex justify-space-between items-center`}
                              >
                                <span
                                  className={
                                    styles["additional-transaction-label"]
                                  }
                                >
                                  Total (Amount in BTC):
                                </span>
                                <span
                                  className={
                                    styles["additional-transaction-value"]
                                  }
                                >
                                  {" "}
                                  {reCalculatingCharges ? (
                                    <Skeleton.Button
                                      size="small"
                                      shape="square"
                                      active
                                      style={{
                                        // marginBottom: "0.8rem",
                                        marginLeft: "0.2rem",
                                      }}
                                    />
                                  ) : (
                                    usdToBTC(
                                      additionalCharges?.order_total,
                                      btcRate
                                    ) || 0
                                  )}{" "}
                                  BTC
                                </span>
                              </div>
                            </div>
                          </>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
