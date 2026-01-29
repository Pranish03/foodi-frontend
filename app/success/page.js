import Wrapper from "@/components/Wrapper";
import Link from "next/link";

const Success = () => {
  return (
    <div className="min-h-162.5 flex items-center">
      <Wrapper>
        <div className="max-w-150 rounded-lg p-5 mx-auto flex flex-col text-center">
          <div className="text-2xl font-bold text-gray-900">
            Thanks for shopping with us!
          </div>
          <div className="text-lg font-bold mt-2 text-gray-900">
            Your order has been placed successfully.
          </div>
          <div className="mt-5 text-gray-700">
            For any food related query, drop an email to
          </div>
          <div className="underline text-gray-700 mb-5">foodi@gmail.com</div>

          <Link
            href="/"
            className="self-center bg-green-700 hover:bg-green-700/95 text-lg text-white px-4 py-2.5 rounded-lg cursor-pointer"
          >
            Continue Ordering
          </Link>
        </div>
      </Wrapper>
    </div>
  );
};

export default Success;
