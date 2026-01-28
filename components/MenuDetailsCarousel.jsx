"use client";

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import Image from "next/image";

const MenuDetailsCarousel = ({ images }) => {
  return (
    <div className="text-white text-[20px] w-full max-w-340 mx-auto sticky top-12.5">
      <Carousel
        infiniteLoop
        showIndicators={false}
        showStatus={false}
        thumbWidth={60}
        className="productCarousel"
        showThumbs={false}
      >
        {images?.map((img) => (
          <Image
            key={img.id}
            src={img.url}
            alt={img.name}
            width={300}
            height={400}
          />
        ))}
      </Carousel>
    </div>
  );
};

export default MenuDetailsCarousel;
