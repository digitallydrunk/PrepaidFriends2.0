import React, { useState } from "react"
import styles from "./singleorder.container.module.css"
import { PFInput } from "../../component/input/input.container.jsx"
import PFButton from "../../component/pf-button"
import PFTag from "../../component/pf-tag"
import { useFormik } from "formik"
import { requiredValidation, validateEmail } from "../../utils/validation"
import { Link } from "react-router-dom"
import { MdKeyboardArrowRight } from "../../assets/icons/icons"

export default function SingleOrder() {
  const [selectedAmount, setSelectedAmount] = useState("")

  const handleManualAmountInput = (e) => {
    const inputValue = parseFloat(e.target.value)
    if (!isNaN(inputValue) && inputValue >= 0) {
      setSelectedAmount(inputValue.toString())
    }
  }

  const formik = useFormik({
    initialValues: {
      email: "",
      selectedAmount: "",
    },
    validate: (values) => {
      const errors = {}
      errors.email = validateEmail(values?.email)
      if (!values.selectedAmount) {
        errors.selectedAmount = requiredValidation?.error
      }
      return errors
    },
    onSubmit: (values) => {
      console.log("Form submitted with values:", values)
    },
  })

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
                              setSelectedAmount(amount)
                            }}
                          />
                        ))}
                      </div>
                      <div className="mt-3">
                        <PFInput
                          placeholder="Enter Email Address"
                          type="email"
                          name="email"
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                        />
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
                        buttonText={"Order Now"}
                        className={"w-full mt-3"}
                        onClick={formik.handleSubmit}
                      />
                      <div className="mt-3 px-1 text-sm">
                        {selectedAmount && (
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
                                  $0.52 USD
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
                                  $1.95 USD
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
                                  $52.47 USD
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
                                  0.008145 BTC
                                </span>
                              </div>
                            </div>
                          </>
                        )}
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
  )
}
