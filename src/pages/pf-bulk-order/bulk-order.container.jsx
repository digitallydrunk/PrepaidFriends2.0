import React, { useState, useEffect, useContext } from "react";
import { useFormik } from "formik";
import PFInput from "../../component/input/index";
import PFCheckbox from "../../component/checkbox/index";
import PFSelect from "../../component/select/index";
import styles from "./bulk-order.module.css";
import { emailValidation, requiredValidation } from "../../utils/validation";
import PFButton from "../../component/pf-button";
import { Radio } from "../../component/pf-radio/radio.container";
import { useNavigate, useLocation } from "react-router-dom";
import { URLs } from "../../routes/urls";
import { Link } from "react-router-dom";
import { MdKeyboardArrowRight } from "../../assets/icons/icons";
import { validateEmail } from "../../utils/validation";
import { Country, State } from "country-state-city";
import MultiSelect from "../../component/multi-select";
import axios from "axios";
import { message, Switch, Skeleton } from "antd";
import "./bulk.css";
import { AuthContext } from "../../context/auth-context";
const paymentMethods = {
  btc: "BTC",
  wireTransfer: "wireTransfer",
};

const PFBulkOrder = () => {
  const location = useLocation();
  const { user } = useContext(AuthContext);
  const { state } = location;
  const nav = useNavigate();
  const countries = Country?.getAllCountries();
  const [reCalculatingCharges, setReCalculatingCharges] = useState(null);
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
    useState(state?.personalInfo?.isAllowInternationalPurchases || false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCardType, setSelectedCardType] = useState("master/visa");
  const [stateOfCountry, setStateOfCountry] = useState([]);
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(
    state?.selectedPaymentMethod || ""
  );
  const [calculatedCharges, setCalculatedCharges] = useState(null);
  const [bins, setBins] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedProviders, setSelectedProviders] = useState([]);
  const [orderNotes, setOrderNotes] = useState("");
  const [brokerId, setBrokerId] = useState("");
  const [termsCheck, setTermsCheck] = useState(false);
  const [emailDisabled, setEmailDisabled] = useState(false);

  useEffect(() => {
    const stateOfCountry = State?.getStatesOfCountry(selectedCountry)?.map(
      (state) => ({ value: state?.isoCode, label: state?.name })
    );
    setStateOfCountry(stateOfCountry);
  }, [selectedCountry]);

  const handleBrokerIdChange = (e) => {
    const value = e.target.value.toLowerCase();
    setBrokerId(value);
    if (["knox", "fionna", "bobby"].includes(value)) {
      setShowDropdown(true);
      axios
        ?.post("/api/get-bins-for-broker", {
          broker_id: value?.toLowerCase(),
        })
        ?.then((res) => setBins(res?.data));
    } else {
      setShowDropdown(false);
    }
  };

  const handleBrokerIdState = (value) => {
    setBrokerId(value);
    if (["knox", "fionna", "bobby"].includes(value)) {
      setShowDropdown(true);
      axios
        ?.post("/api/get-bins-for-broker", {
          broker_id: value?.toLowerCase(),
        })
        ?.then((res) => setBins(res?.data));
    } else {
      setShowDropdown(false);
    }
  };
  const handleSelectedPaymentMethodChange = (e) => {
    setSelectedPaymentMethod(e.target.value);
  };
  const handleInternationalPurchasePermChange = (event) => {
    setIsAllowedInternationalPurchases(event.target.checked);
  };

  const handleCalculateCharges = () => {
    const quantity = formik.values.cardQuantity || 0;
    const loadAmount = formik.values.loadAmount || 0;
    const additionalPurchaseQt = 0;
    const isUsedForInternationalTransaction = isAllowInternationalPurchases;

    const cardType = selectedCardType;

    setReCalculatingCharges(true);
    axios
      .post("/api/order-calculation-api", {
        order_type: "bulk",
        payment_method: selectedPaymentMethod,
        items: [
          {
            cardType,
            quantity,
            amount: loadAmount,
            additional_transactions: additionalPurchaseQt > 0,
            additional_transactions_no: additionalPurchaseQt,
            international_transaction: isUsedForInternationalTransaction,
          },
        ],
      })
      ?.then((res) => setCalculatedCharges({ ...res?.data }))
      ?.catch((err) => console.error(err))
      ?.finally(() => setReCalculatingCharges(false));
  };

  const validate = (values) => {
    const errors = {};
    const check_email = validateEmail(values?.email);
    if (check_email && check_email != undefined) {
      errors.email = check_email;
    }

    if (!values.cardQuantity) {
      errors.cardQuantity = requiredValidation?.error;
    } else if (values.cardQuantity < 1) {
      errors.cardQuantity = "value must be > 1";
    }
    if (!values.loadAmount) {
      errors.loadAmount = requiredValidation?.error;
    } else {
      if (values.loadAmount >= 500 && selectedPaymentMethod == "BTC") {
        setSelectedPaymentMethod("");
      }
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
    } else if (values.phone.length != 10) {
      errors.phone = "10 digits only";
    }
    if (!values.zip) {
      errors.zip = requiredValidation?.error;
    } else if (values.zip.length != 6) {
      errors.zip = "6 digits only";
    }
    if (!values.city) {
      errors.city = requiredValidation?.error;
    }
    if (!values.businessName) {
      errors.businessName = requiredValidation?.error;
    }
    if (values.cardQuantity === 0) {
      errors.cardQuantity = "Value must be greater than 0";
    }

    if (selectedCountry == "count") {
      errors.country = requiredValidation?.error;
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      cardQuantity: 1,
      loadAmount: "",
      firstName: "",
      lastName: "",
      businessName: "",
      city: "",
      zip: "",
      address: "",
      phone: state?.personalInfo?.phone || "",
    },
    validate,
    onSubmit: (values) => {
      if (selectedPaymentMethod == "") {
        message?.error("Please select Payment Method");
        return;
      }
      if (!termsCheck) {
        message?.error("Please check Terms and Conditions");
        return;
      }

      // handle form submit here
      nav(URLs.ORDER_INVOICE, {
        state: {
          personalInfo: {
            ...formik.values,
            brokerId: brokerId,
            country: selectedCountry,
            state: selectedState,
            selectedCardType: selectedCardType,
            isAllowInternationalPurchases: isAllowInternationalPurchases,
          },
          charges: calculatedCharges,
          selectedProviders,
          selectedPaymentMethod,
          notes: orderNotes,
          costpercardResult,
        },
      });
    },
  });

  useEffect(() => {
    if (user) {
      formik.values.email = user?.email;
      setEmailDisabled(true);
    }
  }, [user]);

  useEffect(() => {
    if (state) {
      let {
        personalInfo,
        charges,
        selectedProviders,
        selectedPaymentMethod,
        notes,
      } = state;

      setCalculatedCharges({ ...charges });
      setSelectedProviders(selectedProviders);
      handleBrokerIdState(personalInfo?.brokerId);
      setSelectedCountry(personalInfo?.country);
      setSelectedState(personalInfo?.state);
      setSelectedPaymentMethod(selectedPaymentMethod);
      setIsAllowedInternationalPurchases(
        personalInfo?.isAllowInternationalPurchases
      );
      setSelectedCardType(personalInfo?.selectedCardType);
      setOrderNotes(notes);
      if (personalInfo?.loadAmount >= 500 && selectedPaymentMethod == "BTC") {
        setSelectedPaymentMethod("");
      }
      formik.values.email = personalInfo?.email;
      formik.values.cardQuantity = personalInfo?.cardQuantity;
      formik.values.loadAmount = personalInfo?.loadAmount;
      formik.values.firstName = personalInfo?.firstName;
      formik.values.lastName = personalInfo?.lastName;
      formik.values.businessName = personalInfo?.businessName;
      formik.values.city = personalInfo?.city;
      formik.values.address = personalInfo?.address;
      formik.values.phone = personalInfo?.phone;
      formik.values.zip = personalInfo?.zip;
      setEmailDisabled(true);
    }
  }, [state]);

  useEffect(() => {
    handleCalculateCharges();
  }, [
    selectedPaymentMethod,
    formik.values.cardQuantity,
    formik.values.loadAmount,
    selectedCardType,
    isAllowInternationalPurchases,
  ]);

  const costpercardResult =
    ((calculatedCharges?.items && calculatedCharges?.items[0]?.quantity) ||
      (state?.charges?.items && state?.charges?.items[0]?.quantity) ||
      0) *
    ((calculatedCharges?.items && calculatedCharges?.items[0]?.cost) ||
      (state?.charges?.items && state?.charges?.items[0]?.cost) ||
      0);

  const ResultloadAmt =
    (formik.values.cardQuantity || 0) * (formik.values.loadAmount || 0);

  const handleNotesChange = (e) => {
    setOrderNotes(e.target.value);
  };

  const handleErrors = () => {
    if (Object.keys(formik.errors).length > 0) {
      message?.error("Form has errors. Please correct them before submitting.");
    }
  };

  function handleSwitchChange(checked) {
    setIsAllowedInternationalPurchases(checked);
  }

  const handleChange = (e) => {
    if (e.target.value >= 1 || e.target.value == "") {
      formik.handleChange(e);
    }
  };
  const handleZipChange = (e) => {
    if (!isNaN(e.target.value) && e.target.value.length <= 6) {
      formik.handleChange(e);
    }
  };
  const handlePhoneChange = (e) => {
    if (!isNaN(e.target.value) && e.target.value.length <= 10) {
      formik.handleChange(e);
    }
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
                      disabled={emailDisabled}
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
                        value={formik.values.cardQuantity}
                        onChange={handleChange}
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
                        onChange={handleChange}
                      />
                      {formik.touched.loadAmount && formik.errors.loadAmount ? (
                        <div>
                          <p className={styles.required}>
                            {formik.errors.loadAmount}
                          </p>
                        </div>
                      ) : null}
                    </div>

                    <PFInput
                      value={brokerId}
                      placeholder="Broker ID"
                      onChange={handleBrokerIdChange}
                    />
                    {showDropdown ? (
                      <MultiSelect
                        key="providers"
                        placeholder="Select Providers"
                        options={bins?.map((bin) => ({
                          value: bin,
                          label: bin,
                        }))}
                        onChange={(selected) => setSelectedProviders(selected)}
                        value={selectedProviders}
                        isSelectAll={true}
                        menuPlacement={"bottom"}
                        className="select-providers-dropdown"
                      />
                    ) : null}

                    <div className="flex items-center">
                      <Switch
                        checkedChildren="Yes"
                        unCheckedChildren="No"
                        onChange={handleSwitchChange}
                        checked={isAllowInternationalPurchases}
                        defaultChecked={isAllowInternationalPurchases}
                        style={{
                          backgroundColor: isAllowInternationalPurchases
                            ? "green"
                            : "gray",
                        }}
                      />
                      <label className="mx-1 font-bold">
                        Allow International Purchases?
                      </label>
                    </div>
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
                      disabled={formik.values.loadAmount >= 500}
                    />

                    {selectedPaymentMethod === "" ? (
                      <p className={styles.required}>required</p>
                    ) : null}
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
                      />{" "}
                      {formik.touched.businessName &&
                      formik.errors.businessName ? (
                        <div>
                          <p className={styles.required}>
                            {formik.errors.businessName}
                          </p>
                        </div>
                      ) : null}
                    </div>

                    <div className="lg:col-span-6">
                      <PFSelect
                        placeholder="Country"
                        options={countries?.map((country) => ({
                          value: country?.isoCode,
                          label: country?.name,
                        }))}
                        isSearchable={true}
                        disabledOption="Country"
                        value={selectedCountry}
                        onChange={setSelectedCountry}
                      />{" "}
                      {selectedCountry === "" ? (
                        <p className={styles.required}>required</p>
                      ) : null}
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
                      />{" "}
                      {formik.touched.city && formik.errors.city ? (
                        <div>
                          <p className={styles.required}>
                            {formik.errors.city}
                          </p>
                        </div>
                      ) : null}
                    </div>

                    <div className="lg:col-span-4">
                      <PFSelect
                        disabledOption="State"
                        placeholder="State"
                        options={stateOfCountry}
                        value={selectedState}
                        onChange={setSelectedState}
                      />

                      {selectedState === "" ? (
                        <p className={styles.required}>required</p>
                      ) : null}
                    </div>

                    <div className="lg:col-span-4">
                      <PFInput
                        placeholder="ZIP Code*"
                        id="zip"
                        name="zip"
                        maxlength="6"
                        value={formik.values.zip}
                        onChange={handleZipChange}
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
                        onChange={handlePhoneChange}
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
                      value={orderNotes || state?.notes}
                      placeholder="Other Notes"
                      onChange={handleNotesChange}
                    />
                  </div>

                  <div className="mt-4">
                    <PFButton
                      type="submit"
                      disabled={reCalculatingCharges}
                      onClick={handleErrors}
                      buttonText={
                        reCalculatingCharges ? "Processing" : "Add to Invoice"
                      }
                      className="w-full"
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
                      <div className="flex  items-center">
                        <h5 className="font-semibold">Cost per Card</h5>{" "}
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
                          <p className="text-slate-400 font-semibold mx-2">
                            {" "}
                            {(calculatedCharges?.items &&
                              calculatedCharges?.items[0]?.quantity) ||
                              state?.personalInfo?.cardQuantity ||
                              0}
                            x $
                            {(calculatedCharges?.items &&
                              calculatedCharges?.items[0]?.cost) ||
                              (state?.charges?.items &&
                                state?.charges?.items[0]?.cost) ||
                              0}
                          </p>
                        )}
                      </div>
                      <p className="text-slate-400 font-semibold mx-2">
                        ${costpercardResult.toFixed(3)}
                      </p>
                    </div>
                    <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                      <div className="flex  items-center">
                        <h5 className="font-semibold">Value Per Card:</h5>
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
                          <p className="text-slate-400 font-semibold mx-2">
                            {formik.values.cardQuantity || 0}x $
                            {formik.values.loadAmount || 0}
                          </p>
                        )}
                      </div>

                      <p className="text-slate-400 font-semibold">
                        {" "}
                        ${ResultloadAmt || 0}
                      </p>
                    </div>
                    {selectedPaymentMethod === paymentMethods?.wireTransfer && (
                      <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                        <div>
                          <h5 className="font-semibold">Wire Transfer Fee:</h5>
                        </div>
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
                          <p className="text-slate-400 font-semibold">
                            ${calculatedCharges?.transaction_fee}
                          </p>
                        )}
                      </div>
                    )}
                    {selectedPaymentMethod === paymentMethods?.btc && (
                      <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                        <div>
                          <h5 className="font-semibold">BTC Exchange Fee:</h5>
                        </div>
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
                          <p className="text-slate-400 font-semibold">
                            ${calculatedCharges?.transaction_fee}
                          </p>
                        )}
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
                          <p className="text-slate-400 font-semibold">
                            ${calculatedCharges?.invoice_identifier_fee || 1}
                          </p>
                        )}
                      </div>
                    )}

                    {isAllowInternationalPurchases === true ? (
                      <div className="p-3 flex justify-between  border border-gray-100 dark:border-gray-800">
                        <div className="flex  items-start">
                          <h5 className={styles.cartdescp}>
                            International Transaction Fee
                          </h5>{" "}
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
                            <p className="text-slate-400 font-semibold  ">
                              {formik.values.cardQuantity || 0} x 0.25
                            </p>
                          )}
                        </div>
                        <p className="text-slate-400 font-semibold">
                          {" "}
                          $
                          {(calculatedCharges?.items &&
                            calculatedCharges?.items[0]?.international_cost) ||
                            (state?.charges?.items &&
                              state?.charges?.items[0]?.international_cost) ||
                            0}
                        </p>{" "}
                      </div>
                    ) : null}

                    <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                      <div>
                        <h5 className="font-semibold">Total (USD)</h5>
                      </div>
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
                        <p className="font-semibold">
                          $
                          {calculatedCharges?.order_total ||
                            state?.charges?.order_total ||
                            0}
                        </p>
                      )}
                    </div>
                    {selectedPaymentMethod === paymentMethods?.btc && (
                      <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                        <div>
                          <h5 className="font-semibold">Total (BTC)</h5>
                        </div>
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
                          <p className="font-semibold">0.122323</p>
                        )}
                      </div>
                    )}
                    <div className="p-3">
                      <PFCheckbox
                        label="Agree terms & Conditions"
                        onClick={() => setTermsCheck(!termsCheck)}
                      />
                    </div>
                  </div>
                  <div className="py-3">
                    <PFButton
                      className={"w-full"}
                      type="submit"
                      disabled={reCalculatingCharges}
                      onClick={handleErrors}
                      buttonText={
                        reCalculatingCharges ? "Processing" : "Add to Invoice"
                      }
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
