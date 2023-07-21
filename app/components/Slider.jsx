"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation } from "swiper/core";
import Image from "next/image";
import React, { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";

SwiperCore.use([Navigation]);

const Slider = () => {
  const images = [
    "/image-slide-1.jpg",
    "/image-slide-2.jpg",
    "/image-slide-3.jpg",
    "/image-slide-4.jpg",
    "/image-slide-5.jpg",
  ];

  const swiperRef = useRef(null);

  const goNext = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiperRef.current) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  return (
    <section className="w-full mt-36 gap-4 overflow-x-hidden max-w-[1440px] mx-auto">
      <h3 className="text-T-black text-center text-2xl md:text-4xl font-bold">
        My Work
      </h3>

      <Swiper
        ref={swiperRef}
        centeredSlides
        initialSlide={2}
        spaceBetween={8}
        slidesPerView="auto"
        className="mt-20 mb-12"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index} style={{ width: "auto", minWidth: "540px" }}>
            <Image
              src={src}
              width={540}
              height={360}
              alt={`image-slider-${index + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center mx-auto gap-6">
        <button
          onClick={goPrev}
          className="bg-T-black w-16 h-16 rounded-full flex items-center justify-center hover:bg-light-purple"
        >
          <Image
            src="/icon-arrow-left.svg"
            width={15}
            height={16}
            alt="left arrow"
          />
        </button>
        <button
          onClick={goNext}
          className="bg-T-black w-16 h-16 rounded-full flex items-center justify-center hover:bg-light-purple"
        >
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
