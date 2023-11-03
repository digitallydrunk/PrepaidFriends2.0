import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as Icon from "react-feather";
import {
  MdAirplay,
  MdApi,
  FaRegComments,
  HiOutlineCog6Tooth,
} from "../../assets/icons/icons";

const HowItWorksPage = () => {
  return (
    <>
      <div className="py-4" >
        <div className="container">
          <div className="grid grid-cols-1 pb-8 text-center">
            <h3 className="mb-6 md:text-3xl text-2xl md:leading-normal leading-normal font-semibold">
              How It Works?
            </h3>

            <p className="text-slate-400 max-w-xl mx-auto">
              Start working with Tailwind CSS that can provide everything you
              need to generate awareness, drive traffic, connect.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 mt-8 gap-[30px]">
            <div className="group relative hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 p-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center h-fit">
              <div className="relative overflow-hidden text-transparent -m-3">
                <Icon.Hexagon className="h-28 w-28 fill-indigo-600/5 dark:fill-white/5 mx-auto rotate-[30deg]"></Icon.Hexagon>
                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 dark:text-white rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                  <MdAirplay className="w-7 h-7" />
                </div>
              </div>

              <div className="mt-6">
                <Link className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out">
                  UX / UI Design
                </Link>
                <p className="text-slate-400 transition duration-500 ease-in-out mt-3">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>

            <div className="group relative hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 p-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center h-fit md:mt-16">
              <div className="relative overflow-hidden text-transparent -m-3">
                <Icon.Hexagon className="h-28 w-28 fill-indigo-600/5 dark:fill-white/5 mx-auto rotate-[30deg]"></Icon.Hexagon>
                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 dark:text-white rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                  <MdApi className="w-7 h-7" />
                </div>
              </div>

              <div className="mt-6">
                <Link className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out">
                  IOS App Designer
                </Link>
                <p className="text-slate-400 transition duration-500 ease-in-out mt-3">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>

            <div className="group relative hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 p-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center h-fit">
              <div className="relative overflow-hidden text-transparent -m-3">
                <Icon.Hexagon className="h-28 w-28 fill-indigo-600/5 dark:fill-white/5 mx-auto rotate-[30deg]"></Icon.Hexagon>
                <div
                  className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 dark:text-white rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle 
                                justify-center items-center"
                >
                  <HiOutlineCog6Tooth className="w-7 h-7" />
                </div>
              </div>

              <div className="mt-6">
                <Link className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out">
                  Web Security
                </Link>
                <p className="text-slate-400 transition duration-500 ease-in-out mt-3">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>

            <div className="group relative hover:bg-white dark:hover:bg-slate-900 hover:shadow dark:hover:shadow-gray-800 p-6 transition duration-500 ease-in-out rounded-xl overflow-hidden text-center h-fit md:mt-16">
              <div className="relative overflow-hidden text-transparent -m-3">
                <Icon.Hexagon className="h-28 w-28 fill-indigo-600/5 dark:fill-white/5 mx-auto rotate-[30deg]"></Icon.Hexagon>
                <div className="absolute top-2/4 -translate-y-2/4 start-0 end-0 mx-auto text-indigo-600 dark:text-white rounded-xl transition duration-500 ease-in-out text-3xl flex align-middle justify-center items-center">
                  <FaRegComments className="w-7 h-7" />
                </div>
              </div>

              <div className="mt-6">
                <Link className="text-xl font-medium hover:text-indigo-600 duration-500 ease-in-out">
                  24/7 Support
                </Link>
                <p className="text-slate-400 transition duration-500 ease-in-out mt-3">
                  If the distribution of letters and 'words' is random, the
                  reader will not be distracted from making.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { HowItWorksPage };
