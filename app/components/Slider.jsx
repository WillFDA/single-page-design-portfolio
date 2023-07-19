import Image from "next/image";
import React from "react";

const Slider = () => {
  const images = [
    "/image-slide-1.jpg",
    "/image-slide-2.jpg",
    "/image-slide-3.jpg",
    "/image-slide-4.jpg",
    "/image-slide-5.jpg",
  ];
  return (
    <section className="w-full mt-36">
      <h3 className="text-T-black text-center text-2xl md:text-4xl font-bold">
        My Work
      </h3>
      <div className="flex">
        {images.map((src, index) => {
          return (
            <Image
              src={src}
              key={index}
              width={540}
              height={360}
              alt={`image-slider-${index + 1}`}
            />
          );
        })}
      </div>
      <div className="flex justify-center mx-auto gap-4">
        <button className="bg-T-black w-16 h-16 rounded-full flex items-center justify-center hover:bg-light-purple">
          <Image
            src="/icon-arrow-left.svg"
            width={15}
            height={16}
            alt="left arrow"
          />
        </button>
        <button className="bg-T-black w-16 h-16 rounded-full flex items-center justify-center hover:bg-light-purple">
          <Image
            src="/icon-arrow-right.svg"
            width={15}
            height={16}
            alt="right arrow"
          />
        </button>
      </div>
    </section>
  );
};

export default Slider;
