import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/auth-context";
import { useLocation, useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import visa from "../../assets/images/payments/visa.png";
import mastercard from "../../assets/images/payments/master-card.png";
import { usdToBTC } from "../../utils/helper";
import axios from "axios";
import styles from "./paymentcontainer.module.css";
import useInterval from "../../hooks/useInterval";
import { QRCode } from "antd";

function Payment() {
  const nav = useNavigate();
  const { user } = useContext(AuthContext);
  const location = useLocation();
  const { email, orderType, data } = location?.state || {};
  const isBulkOrder = orderType === "bulk-order";
  const [btcRate, setBtcRate] = useState(1);
  const [displayTextIndex, setDisplayTextIndex] = useState(0);
  const texts = [
    "Processing your request",
    "Gathering card information ",
    "Preparing your card details",
    "Waiting for Payment Confirmation",
  ];

  useEffect(() => {
    getBtcRate();
  }, []);
  const getBtcRate = async () => {
    try {
      const response = await axios.post("/api/rate-api");
      const btcPrice = response.data.value;
      setBtcRate(btcPrice);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const totalCartItemsCount = data?.objectDataReturn?.items?.reduce(
    (accumulator, object) => {
      return accumulator + Number(object.quantity);
    },
    0
  );

  useInterval(() => {
    if (data?.payment_method !== "wire") {
      axios?.get(`/api/btc-check-status/${data?.order_number}`)?.then((res) => {
        if (res?.data?.status === "Payment not Confirmed Yet.") {
          nav("/thank-you", {
            state: { orderNumber: data?.order_number, email },
          });
        } else if (res?.data?.status === "Failed") {
          nav("/payment-failed", {
            state: { orderNumber: data?.order_number, email },
          });
        }
      });
    }
  }, 3000);

  useEffect(() => {
    // Use setInterval to rotate through the texts every 10 seconds
    const intervalId = setInterval(() => {
      setDisplayTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }, 5000); // 10000 milliseconds (10 seconds)

    // Clean up the interval when the component unmounts or when you no longer need it
    return () => clearInterval(intervalId);
  }, []);
  const currentText = texts[displayTextIndex];
  return (
    <section className="container">
      <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-[30px]">
        <div className="lg:col-span-5">
          <div className="p-6 rounded-md shadow dark:shadow-gray-800">
            <h1 className="text-xl font-bold border-b border-solid border-slate-50">
              Order Details
            </h1>

            <div className={`lg:col-span-6 ${styles.image_container}`}>
              {/* Replace with correct card details */}{" "}
              <div className={styles.loader}>
                <p className={styles.payment_confirmation}>{currentText}</p>
              </div>
              <img src="https://prepaidfriends.com/static/media/Visacartpage.09617a67e50bb7c4004c.png" />
            </div>
            <div className="border-b border-solid border-slate-50 pb-2">
              <h6 className="font-bold">Email Address</h6>
              <p className="text-sm">{user?.email || email}</p>
              <h6 className="font-bold">Payment Method</h6>
              <p className="text-sm">
                {data?.payment_method === "wire" ? "Wire Transfer" : "Bitcoin"}
              </p>

              <h6 className="font-bold">Invoice ID</h6>
              <p className="text-sm">{data?.order_number || uuidv4()}</p>
            </div>
            {/*  */}
            {isBulkOrder ? (
              <>
                {data?.objectDataReturn?.items?.map((item) => {
                  const { quantity, amount, subtotal, cardType } = item;

                  return (
                    <div className="md:flex flex justify-between p-1 border-b border-solid border-slate-50 ">
                      <div className="md:flex flex items-center mb-2 gap-20 ">
                        <img
                          className="visacardtype-img1"
                          src={cardType === "visa" ? visa : mastercard}
                          alt="Visa"
                        />
                        <div className="mx-3">
                          <p>Prepaid Card</p>
                          <p>
                            {quantity || 0} x ${amount || 0}
                          </p>
                        </div>
                      </div>
                      <div>
                        {data?.payment_method !== "wire" && (
                          <div className="item-actions">
                            <p className="BTC">
                              {usdToBTC(subtotal, btcRate) ?? 0} BTC
                            </p>
                          </div>
                        )}
                      </div>
                    </div>
                  );
                })}
                <div className="flex justify-between ">
                  <p className="font-bold">Subtotal</p>
                  <span className="text-slate-400 font-semibold">
                    ${data?.objectDataReturn?.order_subtotal}
                  </span>
                </div>
                <div>
                  <div className="flex justify-between">
                    <p className="font-bold">
                      Number of additional transactions per card{" "}
                    </p>{" "}
                    <span className="text-slate-400 font-semibold">
                      {data?.objectDataReturn?.items[0]
                        ?.additional_transactions_no ?? 0}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-bold">International allowance fee </p>{" "}
                    <span className="text-slate-400 font-semibold">
                      {data?.objectDataReturn?.items[0]?.international_cost ??
                        0}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-bold">Prepaid card purchase price </p>{" "}
                    <span className="text-slate-400 font-semibold">
                      {data?.objectDataReturn?.items[0]?.quantity}x $
                      {data?.objectDataReturn?.items[0]?.cost}
                    </span>
                  </div>
                  {data?.payment_method === "wire" ? (
                    <>
                      {" "}
                      <div className="flex justify-between border-b border-solid border-slate-50 ">
                        <p className="font-bold">Wire Transfer Fee </p>
                        <span className="text-slate-400 font-semibold">
                          $ {data?.objectDataReturn?.transaction_fee ?? 0}
                        </span>
                      </div>{" "}
                      <div className="flex justify-between">
                        <p className="font-bold">Invoice Identifier Fee </p>
                        <span className="text-slate-400 font-semibold">
                          ${" "}
                          {data?.objectDataReturn?.invoice_identifier_fee ?? 0}
                        </span>
                      </div>
                    </>
                  ) : (
                    <div className="flex justify-between border-b border-solid border-slate-50 ">
                      <p className="font-bold">BTC exchange fee </p>
                      <span className="text-slate-400 font-semibold">
                        $ {data?.objectDataReturn?.transaction_fee ?? 0}
                      </span>
                    </div>
                  )}
                </div>{" "}
                <div className="flex justify-between  mt-2">
                  <div>
                    <p className="font-bold">Total (USD)</p>
                    <p className="font-bold">
                      ${data?.objectDataReturn?.order_total}
                    </p>
                  </div>
                  <span className="font-bold">
                    {data?.payment_method !== "wire" && (
                      <p className="BTC-total">{data?.btc_amount} BTC</p>
                    )}
                  </span>
                </div>
              </>
            ) : (
              <>
                {data?.objectDataReturn &&
                  data?.objectDataReturn?.items?.map((item) => (
                    <div className="custom-upper-para-pay">
                      <div className="value2">
                        {item?.type === "visa" ? (
                          <div className="md:flex flex justify-between p-1 border-b border-solid border-slate-50 ">
                            <div className="md:flex flex items-center mb-2 ">
                              <img
                                src={visa}
                                alt="Visa"
                                className="visacardtype-img1"
                              />

                              <div className="mx-3">
                                <p>Prepaid Card</p>
                                <p>{`${item?.quantity || 1} x $${
                                  item?.price
                                }`}</p>
                              </div>
                            </div>
                            <div className="final-payment">
                              <p className="BTC-simplecard">
                                {usdToBTC(item?.price, btcRate) ?? 0} BTC
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="md:flex flex justify-between p-1 border-b border-solid border-slate-50 ">
                            <div className="md:flex flex items-center mb-2 ">
                              <img
                                src={mastercard}
                                alt="MasterCard"
                                className="cardtype-img1"
                              />

                              <div className="mx-3">
                                <p>Prepaid Card</p>
                                <p>{`${item?.quantity || 1} x $${
                                  item?.price
                                }`}</p>
                              </div>
                            </div>
                            <div className="final-payment">
                              <p className="BTC-simplecard">
                                {usdToBTC(item?.price, btcRate) ?? 0} BTC
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                <div className=" border-b border-solid border-slate-50 py-3 flex flex-col gap-30 ">
                  <div className="flex justify-between">
                    <p className="font-bold">Prepaid Card Purchase Price</p>
                    <span className="text-slate-400 font-semibold">
                      {totalCartItemsCount} x $
                      {data?.objectDataReturn?.items[0]
                        ? data?.objectDataReturn?.items[0]?.cost
                        : "0"}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <p className="font-bold"> BTC Exchange Fee</p>{" "}
                    <span className="text-slate-400 font-semibold">
                      ${data?.objectDataReturn?.transaction_fee}
                    </span>
                  </div>
                </div>

                <p className="font-semibold mt-3">Total (USD)</p>
                <div className="md:flex flex items-center mb-2 justify-between">
                  <p className="font-bold">
                    ${data?.objectDataReturn?.order_total}
                  </p>

                  <p className="font-bold">{data?.btc_amount} BTC</p>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="lg:col-span-7">
          <div className="p-6 rounded-md shadow dark:shadow-gray-800">
            <h1 className="text-xl font-bold border-b border-solid border-slate-50">
              {data?.payment_method === "wire"
                ? "Pay with Wire Transfer"
                : "Pay with Bitcoin"}
            </h1>

            {data?.payment_method === "wire" ? (
              <div className="flex justify-center">
                <h6 className="font-bold">Wire Transfer</h6>
              </div>
            ) : (
              <>
                <div className="flex justify-center">
                  {/* Replace with actual QR code */}
                  <QRCode value={data?.bitcon_address} size={180} />
                </div>
                <h6 className="font-bold">Payment Details</h6>
                <h6 className="font-bold">Payment Unique Address</h6>
                <h6 className="font-bold">{data?.bitcon_address}</h6>
                <h6 className="font-bold">Amount to pay</h6>{" "}
                <p className="text-sm font-bold text-green-600">
                  {data?.btc_amount} BTC
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
export { Payment };
