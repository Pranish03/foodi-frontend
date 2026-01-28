import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Menus", url: "/menus" },
  { id: 3, name: "Restaurants", options: true },
];

const Nav = ({
  showRestaurantOptions,
  setShowRestaurantOptions,
  restaurants,
}) => {
  return (
    <ul className="hidden md:flex items-center gap-8 text-black text-lg">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.options ? (
              <li
                className="cursor-pointer flex items-center gap-2 relative"
                onMouseEnter={() => setShowRestaurantOptions(true)}
                onMouseLeave={() => setShowRestaurantOptions(false)}
              >
                {item.name}
                <BsChevronDown size={14} />

                {showRestaurantOptions && (
                  <ul className="bg-white border border-gray-200 rounded-lg absolute top-7 left-0 min-w-62.5 px-1 py-1 text-black shadow-lg">
                    {restaurants?.map((r) => {
                      return (
                        <Link
                          key={r.id}
                          href={`/restaurant/${r.slug}`}
                          onClick={() => setShowRestaurantOptions(false)}
                        >
                          <li className="h-12 flex justify-between items-center px-3 hover:bg-black/3 rounded-md">
                            {r.name}
                            <span className="opacity-50 text-sm">
                              {r.menus?.length}
                            </span>
                          </li>
                        </Link>
                      );
                    })}
                  </ul>
                )}
              </li>
            ) : (
              <li className="cursor-pointer">
                <Link href={item?.url}>{item.name}</Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default Nav;
