/* eslint-disable @next/next/no-img-element */
"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

const MenuDetailsCarousel = ({ images }) => {
  return (
    <div className="text-white text-[20px] w-full max-w-340 mx-auto sticky top-12.5">
      <Carousel
        infiniteLoop={true}
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="menuCarousel"
      >
        {images?.map((img) => (
          <img
            key={img.id}
            src={img.url}
            alt={img.name}
            className="rounded-lg"
          />
        ))}
      </Carousel>
    </div>
  );
};

export default MenuDetailsCarousel;
