import React from "react";
import Container from "../Container";
import Image from "next/image";

const Hero = () => {
  return (
    <Container>
      <section className="w-full pt-4">
        <h1 className="text-T-black text-center font-bold w-11/12 mx-auto mb-4">
          Design solutions made easy
        </h1>
        <p className="text-T-grey mx-auto text-center w-4/5 text-base md:text-lg lg:w-3/5 ">
          With over ten years of experience in various design disciplines, I’m
          your one-stop shop for your design needs.
        </p>
        <div className="flex flex-col lg:flex-row gap-6 my-16">
          <div className="w-full lg:w-2/3 flex sm:flex-row flex-col gap-6">
            <div className="bg-light-purple sm:w-1/2 w-full lg:w-1/2 h-[364px] rounded-lg relative">
              <Image
                src="./pattern-graphic-design.svg"
                width={128}
                height={192}
                alt="Abstract image for Graphic design"
                style={{ position: "absolute", top: "24px", right: "24px" }}
              />
              <span className="absolute text-T-white left-6 bottom-6 font-bold">
                Graphic Design
              </span>
            </div>
            <div className="flex flex-col sm:w-1/2 lg:w-1/2 h-[364px] gap-6">
              <div className="flex flex-row w-full h-1/2 lg:h-1/2 gap-6">
                <div className="bg-orange-pastel h-full w-1/2 lg:w-1/2 lg:h-full rounded-lg relative">
                  <Image
                    src="./pattern-ui-ux.svg"
                    width={64}
                    height={64}
                    alt="Abstract vector image for UI/UX"
                    style={{ position: "absolute", top: "24px", right: "24px" }}
                  />
                  <span className="absolute text-T-white left-6 bottom-6 font-bold">
                    UI / UX
                  </span>
                </div>
                <div className="bg-rose-pastel h-full w-1/2 lg:w-1/2 lg:h-full rounded-lg relative">
                  <Image
                    src="./pattern-apps.svg"
                    width={64}
                    height={64}
                    alt="Abstract vector image for Apps"
                    style={{ position: "absolute", top: "24px", right: "24px" }}
                  />
                  <span className="absolute text-T-white left-6 bottom-6 font-bold">
                    Apps
                  </span>
                </div>
              </div>
              <div className="bg-rouge-pastel w-full h-1/2 rounded-lg relative">
                <Image
                  src="./pattern-illustrations.svg"
                  width={128}
                  height={64}
                  alt="Abstract vector image for illustrations"
                  style={{ position: "absolute", top: "24px", right: "24px" }}
                />
                <span className="absolute text-T-white left-6 bottom-6 font-bold">
                  Illustrations
                </span>
              </div>
            </div>
          </div>
          <div className="flex h-[364px] lg:w-1/3 gap-6 flex-col sm:flex-row lg:flex-col">
            <div className="bg-bleu-turquoise w-full h-1/2 rounded-lg relative">
              <Image
                src="./pattern-photography.svg"
                width={160}
                height={64}
                alt="Abstract vector image for Photography"
                style={{ position: "absolute", top: "24px", right: "24px" }}
              />
              <span className="absolute text-T-white left-6 bottom-6 font-bold">
                Photography
              </span>
            </div>
            <div className="bg-dark-purple w-full h-1/2 rounded-lg relative">
              <Image
                src="./pattern-motion-graphics.svg"
                width={160}
                height={64}
                alt="Abstract vector image for Motion Graphics"
                style={{ position: "absolute", top: "24px", right: "24px" }}
              />
              <span className="absolute text-T-white left-6 bottom-6 font-bold">
                Motion Graphics
              </span>
            </div>
          </div>
        </div>
      </section>
    </Container>
  );
};

export default Hero;
