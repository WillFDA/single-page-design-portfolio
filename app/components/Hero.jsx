import React from "react";
import Container from "../Container";
import Image from "next/image";

const Hero = () => {
  return (
    <Container>
      <section className="w-full">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="w-full lg:w-2/3 flex sm:flex-row flex-col gap-6">
            <div className="bg-light-purple sm:w-1/2 w-full lg:w-1/2 h-[364px] rounded-lg relative">
              <Image
                src="./pattern-graphic-design.svg"
                width={128}
                height={192}
                alt="Abstract image for Graphic design"
                style={{ position: "absolute", top: "24px", right: "24px" }}
              />
            </div>
            <div className="flex flex-col sm:w-1/2 lg:w-1/2 h-[364px] gap-6">
              <div className="flex flex-row w-full h-1/2 lg:h-1/2 gap-6">
                <div className="bg-orange-pastel h-full w-1/2 lg:w-1/2 lg:h-full rounded-lg"></div>
                <div className="bg-rose-pastel h-full w-1/2 lg:w-1/2 lg:h-full rounded-lg"></div>
              </div>
              <div className="bg-rouge-pastel w-full h-1/2 rounded-lg"></div>
            </div>
          </div>
          <div className="flex h-[364px] lg:w-1/3 gap-6 flex-col sm:flex-row lg:flex-col">
            <div className="bg-bleu-turquoise w-full h-1/2 rounded-lg"></div>
            <div className="bg-dark-purple w-full h-1/2 rounded-lg"></div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Hero;
