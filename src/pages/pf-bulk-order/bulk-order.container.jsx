import React, { useState } from "react";
import { useFormik } from "formik";
import PFInput from "../../component/input/index";
import PFCheckbox from "../../component/checkbox/index";
import PFSelect from "../../component/select/index";
import styles from "./bulk-order.module.css";
import { emailValidation, requiredValidation } from "../../utils/validation";
import PFButton from "../../component/pf-button";
import { Radio } from "../../component/pf-radio/radio.container";
import { useNavigate } from "react-router-dom";
import { URLs } from "../../routes/urls";
import { Link } from "react-router-dom"
import { MdKeyboardArrowRight } from "../../assets/icons/icons"

const paymentMethods = {
  btc: "BTC",
  wireTransfer: "wireTransfer",
};

const PFBulkOrder = () => {
  const nav = useNavigate();

  const countries = [
    {
      value: "USA",
      label: "America",
    },
    {
      value: "IND",
      label: "India",
    },
    {
      value: "ENG",
      label: "England",
    },
  ];

  const states = [
    {
      value: "NY",
      label: "New York",
    },
    {
      value: "DEL",
      label: "Delhi",
    },
    {
      value: "LON",
      label: "London",
    },
  ];

  const cardTypes = [
    {
      value: "master/visa",
      label: "Master Card/Visa",
    },
    {
      value: "master",
      label: "Master Card Only",
    },
    {
      value: "visa",
      label: "Visa Card Only",
    },
  ];
  const [total, setTotal] = useState(60);
  const [isAllowInternationalPurchases, setIsAllowedInternationalPurchases] =
    useState(false);
  const [selectedCountry, setSelectedCountry] = useState("USA");
  const [selectedState, setSelectedState] = useState("NY");
  const [selectedCardType, setSelectedCardType] = useState("master/visa");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    paymentMethods?.wireTransfer
  );

  const handleSelectedPaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };
  const handleInternationalPurchasePermChange = (event) => {
    setIsAllowedInternationalPurchases(event.target.checked);
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = requiredValidation?.error;
    } else if (emailValidation?.regEx?.test(values.email)) {
      errors.email = emailValidation?.error;
    }
    if (!values.cardQuantity) {
      errors.cardQuantity = requiredValidation?.error;
    }
    if (!values.loadAmount) {
      errors.loadAmount = requiredValidation?.error;
    }
    if (!values.firstName) {
      errors.firstName = requiredValidation?.error;
    }
    if (!values.lastName) {
      errors.lastName = requiredValidation?.error;
    }
    if (!values.address) {
      errors.address = requiredValidation?.error;
    }
    if (!values.phone) {
      errors.phone = requiredValidation?.error;
    }
    if (!values.zip) {
      errors.zip = requiredValidation?.error;
    }
    if (!values.city) {
      errors.city = requiredValidation?.error;
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      cardQuantity: 1,
      loadAmount: "",
      firstName: "",
      brokerId: "",
      lastName: "",
      businessName: "",
      city: "",
      zip: "",
      address: "",
      phone: "",
    },
    validate,
    onSubmit: (values) => {
      // handle form submit here
      console.log(values);
    },
  });

  const handleAddToInvoice = () => {
    nav(URLs.ORDER_INVOICE);
  };

  return (
    <>
          <section className="relative table w-full py-36 bg-[url('../../assets/images/company/aboutus.jpg')] bg-center bg-no-repeat bg-cover">
        <div className="absolute inset-0 bg-black opacity-75"></div>
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center mt-10">
            <h3 className="md:text-4xl text-3xl md:leading-normal tracking-wide leading-normal font-medium text-white">
              Order In Bulk
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
              Bulk Order
            </li>
          </ul>
        </div>
      </section>
      <section className="relative pt-8 mb-2 flex justify-center">
        <div className={`${styles.maxWidth}`}>
          <form onSubmit={formik.handleSubmit}>
            <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 align-bottom gap-[30px]">
              <div className="lg:col-span-7 col-span-8">
                <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                  <h3 className="text-xl leading-normal font-semibold">
                    Contact Information
                  </h3>

                  <div className="mb-2">
                    <PFInput
                      placeholder="Email Address"
                      id="email"
                      name="email"
                      type="email"
                      value={formik.values.email}
                      onChange={formik.handleChange}
                    />
                    {formik.touched.email && formik.errors.email ? (
                      <div>
                        <p className={styles.required}>{formik.errors.email}</p>
                      </div>
                    ) : null}
                  </div>
                  <br />
                  <h3 className="text-xl leading-normal font-semibold">
                    Card Information
                  </h3>

                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                    <PFSelect
                      options={cardTypes}
                      value={selectedCardType}
                      onChange={setSelectedCardType}
                    />

                    <div>
                      <PFInput
                        placeholder="Card Quantity*"
                        id="cardQuantity"
                        name="cardQuantity"
                        type="number"
                        value={formik.values.cardQuantity}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.cardQuantity &&
                      formik.errors.cardQuantity ? (
                        <div>
                          <p className={styles.required}>
                            {formik.errors.cardQuantity}
                          </p>
                        </div>
                      ) : null}
                    </div>

                    <div>
                      <PFInput
                        placeholder="Load Amount*"
                        name="loadAmount"
                        id="loadAmount"
                        value={formik.values.loadAmount}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.loadAmount && formik.errors.loadAmount ? (
                        <div>
                          <p className={styles.required}>
                            {formik.errors.loadAmount}
                          </p>
                        </div>
                      ) : null}
                    </div>

                    <PFInput placeholder="Broker ID" />
                    <PFSelect placeholder="BIN" />

                    <PFCheckbox
                      label="Allow International Purchases?"
                      checked={isAllowInternationalPurchases}
                      onChange={handleInternationalPurchasePermChange}
                    />
                  </div>

                  <div>
                    <h3 className="text-xl leading-normal font-semibold mt-6 mb-2">
                      Select Payment Method
                    </h3>
                    <Radio
                      label="Wire Transfer"
                      value={paymentMethods?.wireTransfer}
                      checked={
                        selectedPaymentMethod === paymentMethods?.wireTransfer
                      }
                      onChange={handleSelectedPaymentMethodChange}
                      labelClass={"mr-4"}
                    />

                    <Radio
                      label="BTC"
                      value={paymentMethods?.btc}
                      checked={selectedPaymentMethod === paymentMethods?.btc}
                      onChange={handleSelectedPaymentMethodChange}
                      disabled={formik.values.loadAmount > 500}
                    />
                  </div>

                  <h3 className="text-xl leading-normal font-semibold mt-6">
                    Business Information
                  </h3>

                  <div className="grid lg:grid-cols-12 grid-cols-1 mt-3 gap-5">
                    <div className="lg:col-span-6">
                      <PFInput
                        id="firstName"
                        name="firstName"
                        placeholder="First Name*"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.firstName && formik.errors.firstName ? (
                        <div>
                          <p className={styles.required}>
                            {formik.errors.firstName}
                          </p>
                        </div>
                      ) : null}
                    </div>

                    <div className="lg:col-span-6">
                      <PFInput
                        placeholder="Last Name*"
                        id="lastName"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.lastName && formik.errors.lastName ? (
                        <div>
                          <p className={styles.required}>
                            {formik.errors.lastName}
                          </p>
                        </div>
                      ) : null}
                    </div>

                    <div className="lg:col-span-6">
                      <PFInput
                        placeholder="Business Name"
                        id="businessName"
                        name="businessName"
                        value={formik.values.businessName}
                        onChange={formik.handleChange}
                      />
                    </div>

                    <div className="lg:col-span-6">
                      <PFSelect
                        placeholder="Country"
                        options={countries}
                        value={selectedCountry}
                        onChange={setSelectedCountry}
                      />
                    </div>

                    <div className="lg:col-span-12">
                      <PFInput
                        placeholder="House Number or Street Number*"
                        id="address"
                        name="address"
                        value={formik.values.address}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.address && formik.errors.address ? (
                        <div>
                          <p className={styles.required}>
                            {formik.errors.address}
                          </p>
                        </div>
                      ) : null}
                    </div>

                    <div className="lg:col-span-4">
                      <PFInput
                        placeholder="City"
                        id="city"
                        name="city"
                        value={formik.values.city}
                        onChange={formik.handleChange}
                      />
                    </div>

                    <div className="lg:col-span-4">
                      <PFSelect
                        placeholder="State"
                        options={states}
                        value={selectedState}
                        onChange={setSelectedState}
                      />
                    </div>

                    <div className="lg:col-span-4">
                      <PFInput
                        placeholder="ZIP Code*"
                        id="zip"
                        name="zip"
                        value={formik.values.zip}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.zip && formik.errors.zip ? (
                        <div>
                          <p className={styles.required}>{formik.errors.zip}</p>
                        </div>
                      ) : null}
                    </div>
                    <div className="lg:col-span-12">
                      <PFInput
                        placeholder="Phone Number"
                        id="phone"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                      />
                      {formik.touched.phone && formik.errors.phone ? (
                        <div>
                          <p className={styles.required}>
                            {formik.errors.phone}
                          </p>
                        </div>
                      ) : null}
                    </div>

                    <textarea
                      style={{ resize: "none" }}
                      className="lg:col-span-12 form-input mt-3 w-full py-2 px-3 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 "
                      rows="6"
                      placeholder="Other Notes"
                    />
                  </div>

                  <div className="mt-4">
                    <PFButton
                      type="submit"
                      buttonText="Add to Invoice"
                      className="w-full"
                      onClick={handleAddToInvoice}
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5 col-span-4 ">
                <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                  <div className="flex justify-between items-center">
                    <h5 className="text-lg font-semibold">Your Cart</h5>

                    <p className="bg-indigo-600 flex justify-center items-center text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full h-5">
                      {formik.values.cardQuantity}
                    </p>
                  </div>

                  <div className="mt-4 rounded-md shadow dark:shadow-gray-800">
                    <div className="p-3 flex justify-between items-center">
                      <div>
                        <h5 className="font-semibold">Cost per Card</h5>
                      </div>

                      <p className="text-slate-400 font-semibold">$ 12</p>
                    </div>
                    <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                      <div>
                        <h5 className="font-semibold">Value Per Card:</h5>
                      </div>

                      <p className="text-slate-400 font-semibold">$ 20</p>
                    </div>
                    {selectedPaymentMethod === paymentMethods?.wireTransfer && (
                      <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                        <div>
                          <h5 className="font-semibold">Wire Transfer Fee:</h5>
                        </div>

                        <p className="text-slate-400 font-semibold">$ 20</p>
                      </div>
                    )}
                    {selectedPaymentMethod === paymentMethods?.btc && (
                      <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                        <div>
                          <h5 className="font-semibold">BTC Exchange Fee:</h5>
                        </div>

                        <p className="text-slate-400 font-semibold">$ 20</p>
                      </div>
                    )}
                    {selectedPaymentMethod === paymentMethods?.wireTransfer && (
                      <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                        <div>
                          <h5 className="font-semibold">
                            Invoice Identifier Fee:
                          </h5>
                          {/* <p className="text-sm text-slate-400">
                          Brief description
                        </p> */}
                        </div>

                        <p className="text-slate-400 font-semibold">$ 20</p>
                      </div>
                    )}

                    <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                      <div>
                        <h5 className={styles.cartdescp}>
                          International Transaction Fee :
                        </h5>
                        {/* <p className="text-sm text-slate-400">
                          Brief description
                        </p> */}
                      </div>

                      {isAllowInternationalPurchases === true ? (
                        <p className="text-slate-400 font-semibold">$ 20</p>
                      ) : (
                        <p className="text-slate-400 font-semibold">$0</p>
                      )}
                    </div>
                    <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                      <div>
                        <h5 className="font-semibold">Total (USD)</h5>
                      </div>

                      <p className="font-semibold">$ {total}</p>
                    </div>
                    {selectedPaymentMethod === paymentMethods?.btc && (
                      <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                        <div>
                          <h5 className="font-semibold">Total (BTC)</h5>
                        </div>

                        <p className="font-semibold">0.122323</p>
                      </div>
                    )}
                    <div className="p-3">
                      <PFCheckbox label="Agree terms & Conditions" />
                    </div>
                  </div>
                  <div className="py-3">
                    <PFButton
                      className={"w-full"}
                      type="submit"
                      buttonText={"Add to Invoice"}
                      onClick={handleAddToInvoice}
                    ></PFButton>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export { PFBulkOrder };
