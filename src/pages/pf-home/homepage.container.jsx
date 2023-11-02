import { faqData } from "../../data/faq";
import PFAccordion from "../../component/pf-accordion";
import { featuresData } from "../../data/features";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";
import PFButton from "../../component/pf-button";
import { AiFillCreditCard } from "react-icons/ai";
import { PiCardholder } from "react-icons/pi";
import Testimonials from "../../component/pf-testimonials";
import Carousel from "../../component/pf-carousel";
import { bannerData } from "../../data/home-banner.js";

const bannerCarouselSettings = {
  container: ".tiny-three-item",
  controls: false,
  nav: false,
  responsive: {
    992: {
      items: 1,
    },

    767: {
      items: 1,
    },

    320: {
      items: 1,
    },
  },
};
const Homepage = () => {
  return (
    <>
      <div>
        <Carousel settings={bannerCarouselSettings}>
          {bannerData?.map((item, index) => (
            <div className="custom-carousel-item" key={index}>
              <div
                style={{
                  backgroundImage: `url(${item.image})`,
                  height: "70vh",
                }}
                className={`bg-cover flex justify-center items-center bg-center w-full `}
              >
                <div className="px-4 w-3/4 md:w-1/2 ">
                  <h2
                    className={`font-bold text-white lg:leading-normal leading-3 text-4xl lg:text-5xl `}
                  >
                    {item.heading}
                  </h2>
                  <p className="text-white/70 text-xl max-w-xl mb-2">
                    {item.info}
                  </p>
                  <PFButton buttonText={"Know More"} />
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
      <section className="relative md:py-24 py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container relative">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              Our Features
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 mt-4 gap-[30px]">
            {featuresData.map((item, index) => {
              let Icons = item.icon;
              return (
                <div
                  key={index}
                  className="group relative lg:px-6 mt-4 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center"
                >
                  <div className="relative overflow-hidden text-transparent -m-3">
                    <Icon.Hexagon className="h-28 w-28 fill-indigo-600/5 mx-auto rotate-[30deg]"></Icon.Hexagon>
                    <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                      <Icons />
                    </div>
                  </div>

                  <div className="mt-6">
                    <Link
                      href="#"
                      className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out"
                    >
                      {item.title}
                    </Link>
                    <p className="text-slate-400 transition duration-500 ease-in-out mt-3">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Testimonials className={"mt-8"} />

      <div className="container relative md:mt-24 mt-16">
        <div className="grid grid-cols-1 text-center">
          <h3 className="mb-4 md:text-3xl md:leading-normal text-2xl leading-normal font-semibold">
            Grab your Deal Now!
          </h3>

          <p className="text-slate-400 max-w-xl mx-auto">
            Shop Now and Save Big
          </p>

          <div className="mt-6 flex justify-center">
            <PFButton
              buttonText={
                <div className="flex justify-between items-center">
                  <AiFillCreditCard className="mr-2 text-2xl" />{" "}
                  <p>Buy Single Card</p>
                </div>
              }
              className={"mr-4"}
            />
            <PFButton
              buttonText={
                <div className="flex justify-between items-center">
                  <PiCardholder className="mr-2 text-2xl" />{" "}
                  <p>Order In Bulk</p>
                </div>
              }
              className={"mr-4"}
            />
          </div>
        </div>
      </div>

      <div className="container relative mt-16">
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
