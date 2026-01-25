import Image from "next/image";
import { FiArrowRight } from "react-icons/fi";
import Wrapper from "./Wrapper";

const HeroBanner = () => {
  return (
    <Wrapper>
      <div className="bg-green-800/30 rounded-lg flex items-center justify-between p-10 mt-4">
        <div>
          <h1 className="text-[45px]/12 font-bold text-gray-900 mb-3 y">
            Your favorite food, just a few <br /> clicks away
          </h1>
          <p className="text-lg mb-10">
            Discover nearby restaurants and get your meal delivered hot and
            fresh.
          </p>
          <div className="flex items-center gap-8">
            <button className="bg-green-700 hover:bg-green-700/95 text-lg text-white px-4 py-3 rounded-lg cursor-pointer">
              Order now
            </button>

            <button className="flex items-center gap-1 text-lg cursor-pointer">
              Learn More
              <FiArrowRight size={18} />
            </button>
          </div>
        </div>
        <Image
          src="/item.png"
          alt="Hero"
          width={320}
          height={320}
          className="md:aspect-auto object-cover mr-4"
        />
      </div>
    </Wrapper>
  );
};

export default HeroBanner;
