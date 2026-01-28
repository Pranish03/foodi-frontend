import Image from "next/image";
import Link from "next/link";
import { getDiscountedPricePercentage } from "@/utils/helper";

const MenuCard = ({ data }) => {
  return (
    <Link
      href={`/menu/${data.slug}`}
      className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
    >
      <Image
        width={500}
        height={500}
        src={data.thumbnail?.url}
        alt={data.name}
        className="rounded-lg"
      />

      <div className="p-4 text-black/90">
        <h2 className="text-lg font-medium">{data.name}</h2>

        <div className="flex items-center text-black/50">
          <p className="mr-2 text-lg font-semibold">Rs. {data.price}</p>

          {data.original_price && (
            <>
              <p className="text-base font-medium line-through">
                Rs. {data.original_price}
              </p>
              <p className="ml-auto text-base font-medium text-green-500">
                {getDiscountedPricePercentage(data.original_price, data.price)}%
                off
              </p>
            </>
          )}
        </div>
      </div>
    </Link>
  );
};

export default MenuCard;
