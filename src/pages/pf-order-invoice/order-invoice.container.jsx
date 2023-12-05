import React from "react";
import { Link } from "react-router-dom";
import logo_dark from "../../assets/images/logo-dark.png";
import logo_light from "../../assets/images/logo-light.png";
import dayjs from "dayjs";
import * as Icon from "react-feather";
import { URLs } from "../../routes/urls";
import styles from "./order-invoice.module.css";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useCookies } from "react-cookie";
import axios from "axios";
import { v4 } from "uuid";
import { message } from "antd";
import PFButton from "../../component/pf-button";
const OrderInvoice = () => {
  const location = useLocation();
  const state = location?.state || {};
  const nav = useNavigate();
  const [isSubmittingInvoice, setIsSubmittingInvoice] = useState(false);
  const [cookies] = useCookies(["pfAuthToken"]);

  const invoiceId = v4()?.slice(0, 8);

  function handlePrintClick() {
    window.print();
  }
  const totalamt =
    state?.charges?.items[0]?.quantity * state?.charges?.items[0]?.amount;

  const handleFinalizeInvoice = (e) => {
    e?.preventDefault();
    setIsSubmittingInvoice(true);
    const { personalInfo, selectedProviders, selectedPaymentMethod } = state;
    axios
      ?.post(
        "/api/save-bulk-order-api",
        {
          first_name: personalInfo?.firstName,
          last_name: personalInfo?.lastName,
          address: personalInfo?.address,
          city: personalInfo?.city,
          state: personalInfo?.state,
          zip: personalInfo?.zipcode,
          country: personalInfo?.country,
          phone_no: personalInfo?.phone,
          broker_id: personalInfo?.brokerId,
          bin_order: selectedProviders?.map((provider) => provider?.value),
          business_name: personalInfo?.businessName,
          email: personalInfo?.email,
          payment_method: selectedPaymentMethod,
          guest: cookies?.pfAuthToken ? false : true,
          items: [
            {
              cardType: personalInfo?.selectedCardType,
              quantity: personalInfo?.cardQuantity,
              amount: personalInfo?.loadAmount,
              additional_transactions: false,
              additional_transactions_no: 0,
              international_transaction:
                personalInfo?.isAllowInternationalPurchases,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${cookies?.pfAuthToken}`,
          },
        }
      )
      ?.then((res) =>
        message?.success("Invoice has been sent to your email address")
      )
      ?.catch((err) => message?.error(err?.response?.data?.error))
      ?.finally(() => setIsSubmittingInvoice(false));
  };

  return (
    <>
      <section className="relative my-2">
        <div className="container relative">
          <div className="md:flex justify-center">
            <div className="lg:w-4/5 w-full">
              <div className="p-6 rounded-md shadow dark:shadow-gray-800 bg-white dark:bg-slate-900">
                <div className="border-b border-gray-100 dark:border-gray-700 pb-6">
                  <div className="md:flex justify-between">
                    <div>
                      <img
                        src={logo_dark}
                        className="block dark:hidden"
                        alt=""
                      />
                      <img
                        src={logo_light}
                        className="hidden dark:block"
                        alt=""
                      />
                      <div className="flex mt-4">
                        <Link to="#" className="h-4 w-4 me-3 mt-1"></Link>
                        <Link
                          to={URLs.BASE}
                          className="text-indigo-600 dark:text-white font-medium"
                        >
                          https://www.prepaidfriends.com
                        </Link>
                      </div>
                    </div>

                    <div className="mt-6 md:mt-0 md:w-56">
                      <h5 className="text-lg font-semibold">Address:</h5>

                      <ul className="list-none">
                        <li className="flex mt-3">
                          <Icon.MapPin className="h-4 w-4 me-3 mt-1"></Icon.MapPin>
                          <Link
                            to="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d39206.002432144705!2d-95.4973981212445!3d29.709510002925988!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8640c16de81f3ca5%3A0xf43e0b60ae539ac9!2sGerald+D.+Hines+Waterwall+Park!5e0!3m2!1sen!2sin!4v1566305861440!5m2!1sen!2sin"
                            data-type="iframe"
                            className="lightbox text-slate-400"
                          >
                            {state?.personalInfo?.address},&nbsp;
                            {state?.personalInfo?.city},&nbsp;
                            {state?.personalInfo?.state},&nbsp;
                            {state?.personalInfo?.country},&nbsp;
                            {state?.personalInfo?.zip}
                          </Link>
                        </li>

                        <li className="flex mt-3">
                          <Icon.Mail className="h-4 w-4 me-3 mt-1"></Icon.Mail>
                          <Link
                            to="/mailto:contact@example.com"
                            className="text-slate-400"
                          >
                            {state?.personalInfo?.email}
                          </Link>
                        </li>

                        <li className="flex mt-3">
                          <Icon.Phone className="h-4 w-4 me-3 mt-1"></Icon.Phone>
                          <Link
                            to="/tel:+152534-468-854"
                            className="text-slate-400"
                          >
                            {state?.personalInfo?.phone}
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="md:flex justify-between">
                  <div className="mt-6">
                    <h5 className="text-lg font-semibold">Invoice Details :</h5>

                    <ul className="list-none">
                      <li className="flex mt-3">
                        <span className="w-24">Invoice No. :</span>
                        <span className="text-slate-400">#{invoiceId}</span>
                      </li>

                      <li className="flex mt-3">
                        <span className="w-24">Name :</span>
                        <span className="text-slate-400">
                          {state?.personalInfo?.firstName}{" "}
                          {state?.personalInfo?.lastName}
                        </span>
                      </li>

                      <li className="flex mt-3">
                        <span className="w-24">Address :</span>
                        <span className="text-slate-400">
                          {state?.personalInfo?.address},&nbsp;
                          {state?.personalInfo?.city},&nbsp;
                          {state?.personalInfo?.state},&nbsp;
                          {state?.personalInfo?.country},&nbsp;
                          {state?.personalInfo?.zip}
                        </span>
                      </li>

                      <li className="flex mt-3">
                        <span className="w-24">Phone :</span>
                        <span className="text-slate-400">
                          {state?.personalInfo?.phone}
                        </span>
                      </li>

                      <li className="flex mt-3">
                        <span className="w-24">Card Type :</span>
                        <span className="text-slate-400">
                          {state?.personalInfo?.selectedCardType}
                        </span>
                      </li>

                      <li className="flex mt-3">
                        <span className="w-24">Broker ID :</span>
                        <span className="text-slate-400">
                          {state?.personalInfo?.brokerId}
                        </span>
                      </li>
                      <li className="flex mt-3">
                        <span className="w-24">Bin:</span>
                        <span className="text-slate-400">
                          {state?.selectedProviders?.map(
                            (provider) => `${provider?.label}, `
                          )}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="mt-3 md:w-56 mx-4">
                    <ul className="list-none">
                      <li className="flex mt-3">
                        Date:{" "}
                        <span
                          className="text-slate-400 ml-1"
                          style={{ whiteSpace: "nowrap" }}
                        >
                          {dayjs()?.format()}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="relative overflow-x-auto shadow dark:shadow-gray-800 rounded-md mt-6">
                  <table className="w-full text-start text-slate-500 dark:text-slate-400">
                    <thead className="text-sm uppercase bg-slate-50 dark:bg-slate-800">
                      <tr>
                        <th scope="col" className="px-6 py-3 w-16">
                          No.
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Description
                        </th>
                        <th scope="col" className="px-6 py-3 w-20">
                          Qty
                        </th>
                        <th scope="col" className="px-6 py-3  w-32">
                          Unit Price
                        </th>
                        <th scope="col" className="px-6 py-3 w-20">
                          Amount
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white dark:bg-slate-900">
                        <td className="px-6 py-4">1</td>
                        <th
                          scope="row"
                          className="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap"
                        >
                          {state?.personalInfo?.selectedCardType} Card
                        </th>
                        <td className="px-6 py-4">
                          {state?.charges?.items[0]?.quantity}
                        </td>
                        <td className="px-6 py-4">
                          {" "}
                          ${state?.charges?.items[0]?.amount}
                        </td>
                        <td className="px-6 py-4">${totalamt}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className={` ms-auto p-5 ${styles.invoice_total}`}>
                  <ul className="list-none">
                    <li className="text-slate-400 flex justify-between ">
                      <span>Subtotal :</span>
                      <span>${state?.charges?.order_subtotal}</span>
                    </li>
                    <li className="text-slate-400 flex justify-between">
                      <span>Cost Per Card :</span>
                      <span>${state?.costpercardResult.toFixed(3)}</span>
                    </li>
                    <li className="text-slate-400 flex justify-between">
                      <span>International Transaction Fee :</span>
                      <span>
                        {" "}
                        ${state?.charges?.items[0]?.international_cost}
                      </span>
                    </li>

                    {state?.selectedPaymentMethod === "BTC" ? (
                      <li className="text-slate-400 flex justify-between">
                        <span>BTC Exchange Fee :</span>
                        <span> ${state?.charges?.transaction_fee}</span>
                      </li>
                    ) : (
                      <li className="text-slate-400 flex justify-between">
                        <span>Wire Transfer Fee :</span>
                        <span> ${state?.charges?.transaction_fee}</span>
                      </li>
                    )}

                    <li className="text-slate-400 flex justify-between ">
                      <span> Invoice Identifier Fee :</span>
                      <span>$1</span>
                    </li>
                    <li className="flex justify-between font-semibold mt-2">
                      <span className="font-bold">Total Amount :</span>
                      <span>${state?.charges?.order_total}</span>
                    </li>
                  </ul>
                </div>

                <div className="invoice-footer border-t border-gray-100 dark:border-gray-700 pt-6">
                  <div className="md:flex justify-between">
                    <div>
                      <div className="text-slate-400 text-center md:text-start">
                        <h6 className="mb-0">
                          Customer Services :{" "}
                          <Link
                            to="/tel:+152534-468-854"
                            className="text-amber-500"
                          >
                            (+12) 1546-456-856
                          </Link>
                        </h6>
                      </div>
                    </div>

                    <div className="mt-4 md:mt-0">
                      <div className="text-slate-400 text-center md:text-end">
                        <h6 className="mb-0">
                          <Link
                            to={URLs.TERMS_AND_CONDITIONS}
                            target="_blank"
                            className="text-indigo-600"
                          >
                            Terms & Conditions
                          </Link>
                        </h6>{" "}
                        <PFButton
                          type="submit"
                          buttonText="Print"
                          className="w-40 mt-2"
                          onClick={handlePrintClick}
                        />{" "}
                        <PFButton
                          type="submit"
                          buttonText="Edit Invoice"
                          className=" w-40 mt-2"
                          onClick={() => nav("/bulk-order", { state })}
                        />{" "}
                        <PFButton
                          type="submit"
                          buttonText="Finalize Invoice"
                          className="w-40 mt-2"
                          onClick={handleFinalizeInvoice}
                          disabled={isSubmittingInvoice}
                        />
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
};

export { OrderInvoice };
