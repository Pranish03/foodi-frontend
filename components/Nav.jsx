import Link from "next/link";
import React from "react";
import { FiChevronDown } from "react-icons/fi";

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
    <ul className="hidden md:flex items-center gap-8 text-gray-900 text-lg">
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
                <FiChevronDown size={22} />

                {showRestaurantOptions && (
                  <ul className="bg-white border border-gray-200 rounded-lg absolute top-7 -left-1 min-w-72 px-1 py-1 text-gray-900 shadow-lg">
                    {restaurants?.map((r) => {
                      return (
                        <Link
                          key={r.id}
                          href={`/restaurant/${r.slug}`}
                          onClick={() => setShowRestaurantOptions(false)}
                        >
                          <li className="h-12 flex justify-between items-center px-3 hover:bg-black/3 rounded-md">
                            {r.name}
                            <span className="text-gray-700">
                              ({r.menus?.length}{" "}
                              {r.menus?.length > 1 ? "menus" : "menu"})
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
