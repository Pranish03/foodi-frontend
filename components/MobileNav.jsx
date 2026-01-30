import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 2, name: "Menus", url: "/menus" },
  { id: 3, name: "Restaurants", options: true },
];

const MobileNav = ({
  showRestaurantOptions,
  setShowRestaurantOptions,
  setMobileNav,
  restaurants,
}) => {
  return (
    <ul className="flex flex-col md:hidden absolute top-15 left-0 w-full h-[calc(100vh-50px)] bg-white border-t border-gray-200/95 text-gray-900">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.options ? (
              <li
                className="cursor-pointer py-4 px-5 border-b border-gray-200/95 flex flex-col relative"
                onClick={() => setShowRestaurantOptions(!showRestaurantOptions)}
              >
                <div className="flex justify-between items-center">
                  {item.name}
                  <BsChevronDown size={14} />
                </div>

                {showRestaurantOptions && (
                  <ul className="bg-black/5 -mx-5 mt-4 -mb-4">
                    {restaurants?.map((r) => {
                      return (
                        <Link
                          key={r.id}
                          href={`/restaurant/${r.slug}`}
                          onClick={() => setShowRestaurantOptions(false)}
                        >
                          <li className="py-4 px-8 border-t border-gray-200/95 flex justify-between">
                            {r.name}
                            <span className="text-gray-700 text-sm">
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
              <li className="py-4 px-5 border-b border-gray-200/95">
                <Link href={item?.url} onClick={() => setMobileNav(false)}>
                  {item.name}
                </Link>
              </li>
            )}
          </React.Fragment>
        );
      })}
    </ul>
  );
};

export default MobileNav;
