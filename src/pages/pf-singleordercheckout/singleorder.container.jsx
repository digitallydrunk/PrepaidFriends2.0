import React from "react";
import { Link } from "react-router-dom";
import EcommerceNavbar from "../../component/Navbar/ecommerceNavbar";
import ShopFooter from "../../component/Footer/shopFooter";

import { MdKeyboardArrowRight, PiAtBold } from "../../assets/icons/icons";
import MobileApp from "../../component/mobileApp";

function SingleOrderCheckout() {
  return (
    <>
      <EcommerceNavbar />
      {/* 
            <section className="relative table w-full py-20 lg:py-24 bg-gray-50 dark:bg-slate-800">
                <div className="container relative">
                    <div className="grid grid-cols-1 mt-14">
                        <h3 className="text-3xl leading-normal font-semibold">Checkout</h3>
                    </div>

                    <div className="relative mt-3">
                        <ul className="tracking-[0.5px] mb-0 inline-flex space-x-1">
                            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out hover:text-indigo-600"><Link to="/index-shop">Techwind</Link></li>
                            <li className="inline-block text-base text-slate-950 dark:text-white mx-0.5"><MdKeyboardArrowRight className="text-xl"/></li>
                            <li className="inline-block uppercase text-[13px] font-bold duration-500 ease-in-out text-indigo-600"aria-current="page">Checkout</li>
                        </ul>
                    </div>
                </div>
            </section> */}
      <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-7">
              <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                <h2 className="text-xl leading-normal font-semibold">
                  Order Deatils
                </h2>
                <div className="lg:col-span-6">
                   <img src="https://prepaidfriends.com/static/media/Visacartpage.09617a67e50bb7c4004c.png"/>
                </div>
                  <div>
                    <div className="lg:col-span-6">
                      <label className="form-label font-semibold">
                         Email Address: <span className="text-red-600">*</span>
                      </label><br/>
                      <input
                        type="email"
                        className="form-input py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                        placeholder="Email"
                        name="email"
                        required=""
                      />
                    </div>

                    <div className="lg:col-span-4">
                      <label className="font-semibold">Payement Mode:</label>
                      <br/>
                      <input
                        type="text"
                        className="form-input py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                        placeholder="Bitcoin"
                        name="payment mode"
                        required=""
                      />
                      {/* <select className="form-select form-input mt-2 py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0">
                        <option value="BITCOIN">Bitcoin</option>
                        <option value="CARD">Card</option>
                        <option value="VISA">Visa</option>
                      </select> */}
                    </div>
                    <div className="lg:col-span-6">
                      <label className="form-label font-semibold">
                        Invice ID : <span className="text-red-600">*</span>
                      </label>
                      <br/>
                      <input
                        type="text"
                        className="form-input  py-2 px-3 h-10 bg-transparent dark:bg-slate-900 dark:text-slate-200 rounded outline-none border border-gray-200 focus:border-indigo-600 dark:border-gray-800 dark:focus:border-indigo-600 focus:ring-0 mt-2"
                        placeholder="Envice id"
                        name="Envice"
                        required=""
                      />
                    </div>
                  </div>
                  <hr/>
                  <div className="lg:col-span-6">
                   <div className="lg:col-span-2" >
                    <img src="https://prepaidfriends.com/static/media/Visacartpage.09617a67e50bb7c4004c.png"/>
                   </div>
                   <div className="lg:col-span-2">
                    <h4>Prepaid Card <br/>1.56</h4>
                   </div>
                   <div className="lg:col-span-2">
                    <h5>0.655690BTC</h5>
                   </div>
                  </div>
             <h3 className="text-xl leading-normal font-semibold mt-6">
                  Prepaid card exchange fee 1*$1.98
                </h3>
                <h3 className="text-xl leading-normal font-semibold mt-6">
                  BTC Exchange Fee $0.98
                </h3>
              </div>
              <div className="lg:col-span-6">
              <h3 className="text-xl leading-normal font-semibold mt-6">
                  TOTAL
                </h3>  
                

              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                <div className="flex justify-between items-center">
                  <h5 className="text-lg font-semibold">Pay with Bitcoin</h5>
                   </div>

                <div className="mt-4 rounded-md shadow dark:shadow-gray-800">
                  <div className="p-3 flex justify-between items-center">
                    <div>
                      <h3>bar code here</h3>
                    </div>
                  </div>
                  <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                    <div>
                      <h5 className="font-semibold">Payment Detail</h5>
                      <p className="text-sm text-slate-400">
                        Brief description
                      </p>
                    </div>
                    </div>
                  <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800">
                    <div>
                      <h5 className="font-semibold">Payment Unique Address</h5>
                      <p className="text-sm text-slate-400">
                        Brief description
                      </p>
                    </div> 
                   </div>
                  <div className="p-3 flex justify-between items-center border border-gray-100 dark:border-gray-800 bg-gray-50 dark:bg-slate-800 text-green-600">
                    <div>
                      <h5 className="font-semibold">Amount TO Be Pay</h5>
                      <p className="text-sm text-green-600"></p>
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
export { SingleOrderCheckout };
