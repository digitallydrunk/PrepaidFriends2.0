import { Link } from "react-router-dom";
import { useFormik } from "formik";
import PFInput from "../../component/input/index";
import PFCheckbox from "../../component/checkbox/index";
const BulkOrder = () => {
  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
    ) {
      errors.email = "Invalid email address";
    }
    if (!values.cardQuantity) {
      errors.cardQuantity = "Required";
    }
    if (!values.loadAmount) {
      errors.loadAmount = "Required";
    }

    return errors;
  };

  const formik = useFormik({
    initialValues: {
      email: "",
      cardQuantity: 1,
      loadAmount: "",
    },
    validate,
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <>
      <section className="relative md:py-24 py-16 flex justify-center">
        <div className="container">
          <form onSubmit={formik.handleSubmit}>
            <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-[30px]">
              <div className="lg:col-span-8">
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
                        <p>{formik.errors.email}</p>
                      </div>
                    ) : null}
                  </div>
                  {/* </form> */}

                  <h3 className="text-xl leading-normal font-semibold">
                    Card Information
                  </h3>

                  {/* <form onSubmit={formik.handleSubmit}> */}
                  <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
                    <PFInput />
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
                          <p>{formik.errors.cardQuantity}</p>
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
                          <p>{formik.errors.loadAmount}</p>
                        </div>
                      ) : null}
                    </div>

                    <PFInput placeholder="Broker ID" />
                    <PFInput placeholder="Select Provider" />
                    <PFCheckbox label="Allow International Purchase?" />
                  </div>
                  {/* </form> */}

                  <h3 className="text-xl leading-normal font-semibold mt-6">
                    Buissness Information
                  </h3>
                  {/* <form> */}
                  <div className="grid lg:grid-cols-12 grid-cols-1 mt-6 gap-5">
                    <div className="lg:col-span-6">
                      <PFInput placeholder="First Name*" />
                    </div>

                    <div className="lg:col-span-6">
                      <PFInput placeholder="Last Name*" />
                    </div>

                    <div className="lg:col-span-6">
                      <PFInput placeholder="Buissness Name" />
                    </div>

                    <div className="lg:col-span-6">
                      <PFInput placeholder="Select a Country" />
                    </div>

                    <div className="lg:col-span-12">
                      <PFInput placeholder="House Number or Street Number*" />
                    </div>

                    <div className="lg:col-span-4">
                      <label className="font-semibold">Country:</label>
                      <select className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                        <option value="USA">USA</option>
                        <option value="CAD">Canada</option>
                        <option value="CHINA">China</option>
                      </select>
                    </div>

                    <div className="lg:col-span-4">
                      <label className="font-semibold">State:</label>
                      <select className="form-select form-input mt-2 w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                        <option value="CAL">California</option>
                        <option value="TEX">Texas</option>
                        <option value="FLOR">Florida</option>
                      </select>
                    </div>

                    <div className="lg:col-span-4">
                      <label className="form-label font-semibold">
                        Zip Code : <span className="text-red-600">*</span>
                      </label>
                      <input
                        type="number"
                        className="form-input w-full py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                        placeholder="Zip:"
                        id="zipcode"
                        name="number"
                        required=""
                      />
                    </div>
                    <div className="lg:col-span-12">
                      <PFInput placeholder="Phone Number" />
                    </div>
                  </div>
                  {/* </form> */}

                  <div className="mt-4">
                    <input
                      type="submit"
                      className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                      value="Continue to checkout"
                    />
                  </div>
                </div>
              </div>

              <div className="lg:col-span-4">
                <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                  <div className="flex justify-between items-center">
                    <h5 className="text-lg font-semibold">Your Cart</h5>

                    <Link className="bg-indigo-600 flex justify-center items-center text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full h-5">
                      3
                    </Link>
                  </div>

                  <div className="mt-4 rounded-md shadow dark:shadow-gray-800">
                    <div className="p-3 flex justify-between items-center">
                      <div>
                        <h5 className="font-semibold">Cost per Card</h5>
                        {/* <p className="text-sm text-slate-400">
                          Brief description
                        </p> */}
                      </div>

                      <p className="text-slate-400 font-semibold">$ 12</p>
                    </div>
                    <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                      <div>
                        <h5 className="font-semibold">Value per Card</h5>
                        {/* <p className="text-sm text-slate-400">
                          Brief description
                        </p> */}
                      </div>

                      <p className="text-slate-400 font-semibold">$ 18</p>
                    </div>
                    <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                      <div>
                        <h5 className="font-semibold">Wire Transfer Fees:</h5>
                        {/* <p className="text-sm text-slate-400">
                          Brief description
                        </p> */}
                      </div>

                      <p className="text-slate-400 font-semibold">$ 20</p>
                    </div>
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

                    <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                      <div>
                        <h5 className="font-semibold">
                          International Transaction Fee :
                        </h5>
                        {/* <p className="text-sm text-slate-400">
                          Brief description
                        </p> */}
                      </div>

                      <p className="text-slate-400 font-semibold">$ 20</p>
                    </div>
                    <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                      <div>
                        <h5 className="font-semibold">Total (USD)</h5>
                      </div>

                      <p className="font-semibold">$ 30</p>
                    </div>
                    <div className="p-3">
                      <PFCheckbox label="Agree terms & Conditions" />
                    </div>
                  </div>
                  <div className="py-3">
                    <button
                      className="py-2 px-5 inline-block font-semibold tracking-wide border align-middle duration-500 text-base text-center bg-indigo-600 hover:bg-indigo-700 border-indigo-600 hover:border-indigo-700 text-white rounded-md w-full"
                      type="submit"
                    >
                      Add to Invoice
                    </button>
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

export { BulkOrder };
