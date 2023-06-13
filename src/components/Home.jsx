import React from "react";
import { BsArrowRight } from "react-icons/bs";

const Home = () => {
  return (
    <div className="bg-amber-50 flex flex-col md:flex-row justify-center items-center">
      <div className="ml-7 mr-10 md:mr-0 md:w-1/2">
        <h1 className="text-4xl md:text-7xl ml-1 font-bold text-gray-800 text-center md:text-left">
          The VPN that <br /> just works
        </h1>
        <p className="text-sm md:text-md mt-5 font-bold text-gray-800 text-center md:text-left">
          Exclusive offer: Get 3 extra months FREE
        </p>
        <button className="bg-emerald-600 flex text-xl text-white px-6 py-2 mt-8 rounded-3xl hover:bg-yellow-200 hover:text-black">
          Start Your Risk-Free Trial
          <span className="flex items-center">
            <BsArrowRight className="mt-1 ml-1" />
          </span>
        </button>
        <p className="ml-7 text-xs text-center md:text-left mt-5">
          30-DAY MONEY-BACK GUARANTEE
        </p>
      </div>
      <img
        className="w-full md:w-1/2 h-auto"
        alt=""
        src="https://ftr.imgix.net/21JMuWvXG3fAvOiDFKNHhT/2b8e98ddc5e35d0fe259b55732395926/co-branded-new-hero-desktop-800w.png?auto=format%2Ccompress&cs=srgb&fit=max&q=60&w=800&s=bf99ffb540be1d7917ffe5a9f1412119"
      />
    </div>
  );
};

export default Home;
