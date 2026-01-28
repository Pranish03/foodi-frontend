import React from "react";
import Link from "next/link";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 3, name: "Restaurants", options: true },
];

const MobileNav = ({
  showRestaurantOptions,
  setShowRestaurantOptions,
  setMobileNav,
  restaurants,
}) => {
  return (
    <ul className="flex flex-col md:hidden absolute top-12.5 left-0 w-full h-[calc(100vh-50px)] bg-white border-t text-black">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.options ? (
              <li
                className="cursor-pointer py-4 px-5 border-b flex flex-col relative"
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
                          <li className="py-4 px-8 border-t flex justify-between">
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
              <li className="py-4 px-5 border-b">
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
