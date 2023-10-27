import { faqData } from "../../data/faq";
import PFAccordion from "../../component/pf-accordion";

const Homepage = () => {
  return (
    <>
      <div className="container relative md:mt-24 mt-16">
        <div className="grid grid-cols-1 pb-8 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Frequently Asked Questions
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            Some of the commonly asked questions about PrepaidFriends.
          </p>
        </div>

        <div className="relative grid md:grid-cols-12 grid-cols-1 items-center mt-8 gap-[30px]">
          <div className="md:col-span-6">
            <div className="relative">
              <div className="relative rounded-xl overflow-hidden shadow-md dark:shadow-gray-800">
                <div
                  className="w-full py-72 bg-slate-400 bg-[url('../../assets/images/saas/cta.jpg')] bg-no-repeat bg-top bg-cover jarallax"
                  data-jarallax
                  data-speed="0.5"
                ></div>
              </div>
            </div>
          </div>

          <div className="md:col-span-6">
            <PFAccordion data={faqData} />
          </div>
        </div>
      </div>
    </>
  );
};

export { Homepage };
