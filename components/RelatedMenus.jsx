"use client";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MenuCard from "./MenuCard";

const RelatedMenus = ({ menus }) => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1023, min: 464 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 767, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="mt-4 md:mt-24 mb-24 md:mb-0">
      <div className="md:text-2xl text-xl font-bold md:mb-5 mb-2">
        You Might Also Like
      </div>
      <Carousel
        responsive={responsive}
        containerClass="-mx-2.5"
        itemClass="px-2.5"
      >
        {menus?.data?.map((menu) => (
          <MenuCard key={menu?.id} data={menu} />
        ))}
      </Carousel>
    </div>
  );
};

export default RelatedMenus;
