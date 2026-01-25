import Image from "next/image";

const HeroBanner = () => {
  return (
    <div className="relative text-white bg-[#E6E9F2] text-[20px] w-full max-w-340 mx-auto rounded-xl overflow-clip">
      <Image
        src="/bannerimg.svg"
        alt="Hero"
        width={1360}
        height={500}
        className="md:aspect-auto object-cover"
      />
    </div>
  );
};

export default HeroBanner;
