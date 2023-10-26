import React, { useState } from "react"
import CookieModal from "../../component/cookieModal"
import styles from "./singleorder.container.module.css"
import { PFInput } from "../../component/input/input.container.jsx"
import PFButton from "../../component/pf-button"

export default function SingleOrder() {
  const [selectedAmount, setSelectedAmount] = useState("")
  const [showCharges, setShowCharges] = useState(false)

  const handleManualAmountInput = (e) => {
    const inputValue = parseFloat(e.target.value)
    if (!isNaN(inputValue) && inputValue >= 0) {
      setSelectedAmount(inputValue.toString())
      setShowCharges(!!inputValue)
    }
  }

  return (
    <>
      <span className="fixed blur-[200px] w-[600px] h-[600px] rounded-full top-1/2 -translate-y-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 bg-indigo-600/20"></span>
      <section className="relative overflow-hidden md:pt-6 md:pb-24 pb-16">
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
                    <div className="px-6 py-4 sm:p-16">
                      {/* <div className={styles.form}>Buy Prepaid Cards</div> */}
                      <br />
                      <div>
                        <PFInput
                          label="Enter Prepaid Card Amount"
                          placeholder="$0.00"
                          type="number"
                          min="0"
                          addOnAfter={<p className={styles.afterprop}>USD</p>}
                          value={selectedAmount}
                          onChange={handleManualAmountInput}
                        />
                      </div>
                      <div className="mt-3">
                        <span className="py-3">Popular Amounts</span>
                        {[25, 50, 75, 100, 200].map((amount) => (
                          <div
                            key={amount}
                            className={`text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border ${
                              selectedAmount === (`${amount}`) ? 'border-blue-500' : ''} ${styles.tags}`}
                            onClick={() => {
                              setSelectedAmount(`${amount}`)
                              setShowCharges(true)
                            }}
                          >
                            ${amount}
                          </div>
                        ))}
                      </div>
                      <div className="mt-3">
                        <PFInput
                          placeholder="Enter Email Address"
                          type="email"
                        />
                      </div>
                      <PFButton
                        type="submit"
                        id="orderButton"
                        name="orderButton"
                        buttonText={"Order Now"}
                        // onClick={onClick}
                        className={styles.orderbutton}
                      />

                      <div className="mt-3 px-1 text-sm">
                        {showCharges && (
                          <>
                            <div className="py-2">
                              <div className={styles.info}>
                                <span className={styles.label}>
                                  BTC Exchange Fee:
                                </span>
                                <span className={styles.value}>0.52 USD</span>
                              </div>
                            </div>
                            <hr />
                            <div className="py-2">
                              <div className={styles.info}>
                                <span className={styles.label}>
                                  Prepaid Card Purchase Price:
                                </span>
                                <span className={styles.value}>1.95 USD</span>
                              </div>
                            </div>
                            <hr />
                            <div className="py-2">
                              <div className={styles.info}>
                                <span className={styles.label}>
                                  Total (Amount in USD):
                                </span>
                                <span className={styles.value}>52.47 USD</span>
                              </div>
                            </div>
                            <hr />
                            <div className="py-2">
                              <div className={styles.info}>
                                <span className={styles.label}>
                                  Total (Amount in BTC):
                                </span>
                                <span className={styles.value}>
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
        {/* <MobileApp /> */}
      </section>
      <CookieModal />
    </>
  )
}
