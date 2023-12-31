import Image from "next/image";
import React from "react";
import Button from "./Button";

const About = () => {
  return (
    <section className="w-screen pt-16 flex flex-col pr-4 pl-4 sm:pr-8 sm:pl-8 gap-10 md:pr-10 md:flex-row md:pl-0 lg:max-w-[1190px] lg:mx-auto lg:px-10">
      <div className="flex flex-col w-[300px] h-[300px] relative mx-auto md:w-[364px] md:h-[364px] lg:w-[445px] lg:h-[445px] md:-ml-6 lg:-ml-0 ">
        <Image
          src="/image-amy.webp"
          fill={true}
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="flex flex-col gap-6 items-center md:w-1/2 md:items-start justify-center">
        <h2 className="text-center font-semibold md:text-left">
          I’m Amy, and I’d love to work on your next project
        </h2>
        <p className="text-T-grey text-center text-base md:text-[18px] md:text-left">
          I love working with others to create beautiful design solutions. I’ve
          designed everything from brand illustrations to complete mobile apps.
          I’m also handy with a camera!
        </p>
        <Button parameters="hover:bg-orange-pastel bg-rouge-pastel" />
      </div>
    </section>
  );
};

export default About;
