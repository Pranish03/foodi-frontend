import Link from "next/link";
import React from "react";
import { BsChevronDown } from "react-icons/bs";

const data = [
  { id: 1, name: "Home", url: "/" },
  { id: 3, name: "Restaurants", subMenu: true },
];

const Menu = ({ showResMenu, setShowResMenu, restaurants }) => {
  return (
    <ul className="hidden md:flex items-center gap-8 font-semibold text-black text-lg">
      {data.map((item) => {
        return (
          <React.Fragment key={item.id}>
            {!!item?.subMenu ? (
              <li
                className="cursor-pointer flex items-center gap-2 relative"
                onMouseEnter={() => setShowResMenu(true)}
                onMouseLeave={() => setShowResMenu(false)}
              >
                {item.name}
                <BsChevronDown size={14} />

                {showResMenu && (
                  <ul className="bg-white absolute top-6 left-0 min-w-62.5 px-1 py-1 text-black shadow-lg">
                    {/* {restaurants?.map(({ attributes: r, id }) => { */}
                    {restaurants?.map((r) => {
                      return (
                        <Link
                          key={r.id}
                          // href={`/restaurant/${r.slug}`}
                          href={`/restaurant/${r.id}`}
                          onClick={() => setShowResMenu(false)}
                        >
                          <li className="h-12 flex justify-between items-center px-3 hover:bg-black/3 rounded-md">
                            {r.name}
                            {/* <span className="opacity-50 text-sm">
                              {`(${r.products.data.length})`}
                            </span> */}
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

export default Menu;
