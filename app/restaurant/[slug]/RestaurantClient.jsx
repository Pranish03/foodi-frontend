"use client";

import MenuCard from "@/components/MenuCard";
import { useState } from "react";

export default function RestaurantClient({ initialMenus, maxResult }) {
  const [pageIndex, setPageIndex] = useState(1);

  const totalPages = Math.ceil(initialMenus.length / maxResult);
  const paginatedMenus = initialMenus.slice(
    (pageIndex - 1) * maxResult,
    pageIndex * maxResult,
  );

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 my-14 px-5 md:px-0">
        {paginatedMenus.map((menu) => (
          <MenuCard key={menu.id} data={menu} />
        ))}
      </div>

      {initialMenus.length > maxResult && (
        <div className="flex gap-3 items-center justify-center my-16 md:my-0">
          <button
            className="rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500"
            disabled={pageIndex === 1}
            onClick={() => setPageIndex((p) => p - 1)}
          >
            Previous
          </button>

          <span className="font-bold">{`${pageIndex} of ${totalPages}`}</span>

          <button
            className="rounded py-2 px-4 bg-black text-white disabled:bg-gray-200 disabled:text-gray-500"
            disabled={pageIndex === totalPages}
            onClick={() => setPageIndex((p) => p + 1)}
          >
            Next
          </button>
        </div>
      )}

      {paginatedMenus.length === 0 && (
        <div className="text-center text-gray-500 mt-10">
          No menus available
        </div>
      )}
    </>
  );
}
