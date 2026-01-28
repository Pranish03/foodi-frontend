import Image from "next/image";
import Link from "next/link";
import { getDiscountedPricePercentage } from "@/utils/helper";

const MenuCard = ({ data }) => {
  return (
    <Link
      href={`/menu/${data.slug}`}
      className="transform overflow-hidden bg-white duration-200 cursor-pointer"
    >
      <Image
        width={500}
        height={500}
        src={data.thumbnail?.url}
        alt={data.name}
        className="rounded-lg mb-4"
      />

      <h2 className="text-lg font-bold text-gray-900">{data.name}</h2>

      <p className="truncate text-gray-700">
        {data.description[0]?.children[0]?.text}
      </p>

      {data.original_price && (
        <>
          <span className="text-base font-medium line-through text-gray-700">
            Rs. {data.original_price}
          </span>

          <div className="flex items-center justify-between">
            <span className="mr-2 text-lg font-semibold text-gray-900">
              Rs. {data.price}
            </span>

            <span className="text-base px-2 rounded font-medium bg-green-600 text-white">
              {getDiscountedPricePercentage(data.original_price, data.price)}%
              off
            </span>
          </div>
        </>
      )}
    </Link>
  );
};

export default MenuCard;
