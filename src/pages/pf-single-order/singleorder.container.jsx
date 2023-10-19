import React, { useState } from "react"
import Navbar from "../../component/Navbar/navbar"
import CookieModal from "../../component/cookieModal"
import "../../../node_modules/react-modal-video/css/modal-video.css"
import TransparentFooter from "../../component/Footer/transparentFooter"
import "./singleorder.container.css"
import { PFInput } from "../../component/input/input.container.jsx"

export default function SingleOrder() {
  const [selectedAmount, setSelectedAmount] = useState("")
  const [showCharges, setShowCharges] = useState(false)

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount)
    setShowCharges(true)
  }

  return (
    <>
      <span className="fixed blur-[200px] w-[600px] h-[600px] rounded-full top-1/2 -translate-y-1/2 start-1/2 ltr:-translate-x-1/2 rtl:translate-x-1/2 bg-indigo-600/20"></span>
      <Navbar />
      <section className="relative overflow-hidden md:pt-44 pt-36 md:pb-24 pb-16">
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
                    <div className="p-6 sm:p-16">
                      <div className="single-form-header">
                        Buy Prepaid Cards
                      </div>
                      <br />
                      <div>
                        <PFInput
                          label="Enter Prepaid Card Amount"
                          placeholder="$0.00"
                          type="number"
                          addOnAfter={<p className="afterprop">USD</p>}
                          value={selectedAmount}
                          onChange={(e) => {
                            setSelectedAmount(e.target.value)
                            setShowCharges(!!e.target.value)
                          }}
                        />
                      </div>
                      <div className="mt-3">
                        <span className="py-3">Popular Amounts</span>
                        <div
                          className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border tags"
                          onClick={() => handleAmountSelect("$25")}
                        >
                          $25
                        </div>
                        <div
                          className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border tags"
                          onClick={() => handleAmountSelect("$50")}
                        >
                          $50
                        </div>
                        <div
                          className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border tags"
                          onClick={() => handleAmountSelect("$75")}
                        >
                          $75
                        </div>
                        <div
                          className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border tags"
                          onClick={() => handleAmountSelect("$100")}
                        >
                          $100
                        </div>
                        <div
                          className="text-xs inline-flex items-center font-bold leading-sm uppercase px-3 py-1 rounded-full bg-white text-gray-700 border tags"
                          onClick={() => handleAmountSelect("$200")}
                        >
                          $200
                        </div>
                      </div>
                      <div className="mt-3">
                        <PFInput
                          placeholder="Enter Email Address"
                          type="email"
                        />
                      </div>
                      <div className="mt-3 px-1 text-sm">
                        {showCharges && (
                          <>
                            <div className="py-2">
                              <div class="info">
                                <span class="label">BTC Exchange Fee:</span>
                                <span class="value">0.52 USD</span>
                              </div>
                            </div>
                            <hr />
                            <div className="py-2">
                              <div class="info">
                                <span class="label">
                                  Prepaid Card Purchase Price:
                                </span>
                                <span class="value">1.95 USD</span>
                              </div>
                            </div>
                            <hr />
                            <div className="py-2">
                              <div class="info">
                                <span class="label">
                                  Total (Amount in USD):
                                </span>
                                <span class="value">52.47 USD</span>
                              </div>
                            </div>
                            <hr />
                            <div className="py-2">
                              <div class="info">
                                <span class="label">
                                  Total (Amount in BTC):
                                </span>
                                <span class="value">0.008145 BTC</span>
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
            <div className="relative animate-[spin_30s_linear_infinite] -z-1">
              <span className="after:absolute after:start-0 after:bottom-1/2 after:translate-y-1/2 after:h-2 after:w-8 after:rounded-md after:bg-indigo-600/20 relative after:z-10"></span>
              <span className="after:absolute after:start-0 after:bottom-1/2 after:translate-y-1/2 after:rotate-90 after:h-2 after:w-8 after:rounded-md after:bg-indigo-600/20 relative after:z-10"></span>
            </div>
          </div>
        </div>
        {/* <MobileApp /> */}
      </section>
      <TransparentFooter />
      <CookieModal />
    </>
  )
}
