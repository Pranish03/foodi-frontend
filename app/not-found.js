import Wrapper from "@/components/Wrapper";
import Link from "next/link";

export default function NotFound({ params }) {
  return (
    <div className="min-h-162.5 flex items-center">
      <Wrapper>
        <div className="max-w-150 rounded-lg p-5 mx-auto flex flex-col text-center">
          <div className="text-4xl font-bold text-gray-900">404</div>
          <div className="text-lg font-bold mt-2 text-gray-900">
            Oops, page not found
          </div>
          <div className="my-5 text-gray-700">
            This page you are looking for may have been moved, deleted or
            <br />
            possibly never existed.
          </div>

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
}
