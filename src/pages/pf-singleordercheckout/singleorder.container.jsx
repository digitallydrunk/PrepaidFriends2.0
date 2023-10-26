import React from "react";
import EcommerceNavbar from "../../component/Navbar/ecommerceNavbar";
import styles from "./singleorder.module.css";

function SingleOrderCheckout() {
  return (
    <>
      <EcommerceNavbar />
       <section className="relative md:py-24 py-16">
        <div className="container">
          <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 gap-[30px]">
            <div className="lg:col-span-8">
              <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                <h2 className="text-xl leading-normal font-semibold">
                  Order Deatils
                </h2>
                <hr/>
                <div className="lg:col-span-6">
                   <img src="https://prepaidfriends.com/static/media/Visacartpage.09617a67e50bb7c4004c.png"/>
                </div>
                  <div>
                    <div className="lg:col-span-6 font font-semibold" >
                      <p>Email Address</p>  
                      <br/>
                      <p>riturajsingh5454@gmail.com</p>
                    </div>

                    <div className="lg:col-span-4">
                     <p>Payment Mode</p><br/>
                     <p>Bitcoin</p>
                  </div>
                    <div className="lg:col-span-6">
                     <p>Envice ID</p>
                     <br/>
                     <p>231200</p>
                    </div>
                  </div>
                  <hr/>
                  <div className=" grid lg:col-span-2 md:grid-cols-2 ">
                   <div className= " md:col-span-2 " >
                    <img src="https://prepaidfriends.com/static/media/Visacartpage.09617a67e50bb7c4004c.png"/>
                   </div>
                   <div className="md:col-span-2" >
                    <h4>Prepaid Card <br/>1.56</h4>
                   </div>
                   <div className="md:col-span-2">
                    <h5>0.655690BTC</h5>
                   </div>
                  </div>
                  <hr/>
             <h3 className="text-xl leading-normal font-semibold mt-6">
                  Prepaid card exchange fee 1*$1.98
                </h3>
                <h3 className="text-xl leading-normal font-semibold mt-6">
                  BTC Exchange Fee $0.98
                </h3>
              </div>
              <div className="container grid grid-cols-3">
              <h3 className="text-xl leading-normal font-semibold mt-6">
                  TOTAL
                </h3>  
                <div className="lg:col-span-3">
                 <p>$5.52</p>
                </div>
                 <div className="lg:col-span-3">
                 <p>0.00153965BTC</p>
                </div>

              </div>
            </div>

            <div className="lg:col-span-4">
              <div className="p-6 rounded-md shadow dark:shadow-gray-800">
                <div className="flex justify-between items-center">
                  <h5 className="text-lg font-semibold">Pay with Bitcoin</h5>
                   </div>

                <div>
                  <div>
                    <div className="text-center">
                      <img src="data:image/png;base64,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"/>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p className="font-semibold">Payment Detail</p>
                      <p className="text-sm text-slate-400">
                        Brief description
                      </p>
                    </div>
                    </div>
                  <div>
                    <div>
                      <p className="font-semibold">Payment Unique Address</p>
                      <p className="text-sm text-slate-400">
                        Brief description
                      </p>
                    </div> 
                   </div>
                  <div>
                    <div>
                      <p className="font-semibold">Amount TO Be Pay</p>
                      <p className="text-sm text-green-600">
                        $60
                      </p>
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