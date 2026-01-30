"use client";

import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import Wrapper from "./Wrapper";

const HeroBanner = () => {
  return (
    <div className="bg-green-600/10">
      <Wrapper>
        <div className="flex md:flex-row flex-col gap-5 md:gap-0 items-center justify-between py-10">
          <div className="basis-[55%] md:text-left text-center">
            <p className="md:text-lg text-base font-medium text-green-600 mb-2">
              Up to 30% off
            </p>

            <h1 className="md:text-5xl text-4xl md:leading-12 leding-8 line font-bold text-gray-900 mb-4">
              Your favorite food,
              <br /> just a few clicks away.
            </h1>

            <p className="md:text-lg text-base text-gray-700 mb-6">
              Discover nearby restaurants and get your meal delivered hot and
              fresh.
            </p>

            <div className="flex items-center md:justify-start justify-center gap-8">
              <button className="bg-green-700 hover:bg-green-700/95 md:text-lg text-base text-white px-5 py-2.5 rounded-lg">
                Order now
              </button>

              <button className="flex items-center gap-1 md:text-lg text-base text-gray-900">
                Learn More
                <FiArrowRight size={18} />
              </button>
            </div>
          </div>

          <div className="basis-[45%] flex justify-end  md:px-0 px-4">
            <div className="relative sm:w-87.5 sm:h-87.5 w-80 h-80">
              <Image
                src={"/item-1.png"}
                alt="Hero food"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default HeroBanner;
