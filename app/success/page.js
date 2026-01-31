import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Success = () => {
  return (
    <div className="md:min-h-162.5 min-h-140 flex items-center">
      <Wrapper>
        <div className="max-w-150 rounded-lg p-5 mx-auto flex flex-col text-center">
          <div className="md:text-4xl text-3xl font-bold text-gray-900">
            Thanks for shopping with us!
          </div>
          <div className="md:text-xl text-lg font-bold md:mt-2 mt-1 md:mb-2 mb-1 text-gray-900">
            Your order has been placed successfully.
          </div>
          <div className="text-gray-700 md:text-lg text-base">
            For any food related query, drop an email to
          </div>
          <div className="md:mb-5 mb-3 md:text-lg text-base underline text-gray-700">
            foodi@gmail.com
          </div>

          <Link
            href="/"
            className="self-center bg-green-700 hover:bg-green-700/95 md:text-lg text-base text-white px-4 py-2.5 rounded-lg cursor-pointer"
          >
            Continue Ordering
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Success;
