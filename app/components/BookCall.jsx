import React from "react";
import Button from "./Button";

const BookCall = () => {
  return (
    <section className="w-full px-4 md:px-9 mt-20 mb-14">
      <div className="max-w-[1110px] mx-auto bg-T-black rounded-xl p-16">
        <div className="flex md:justify-between items-center flex-col md:flex-row justify-center gap-6">
          <div className="flex flex-col md:w-2/3 justify-center w-full gap-6">
            <h4 className="text-T-white text-2xl md:text-3xl lg:text-[40px] font-bold text-center md:text-left">
              Book a call with me
            </h4>
            <p className="text-T-white text-base md:text-[18px] font-medium md:w-10/12 text-center md:text-left mx-auto md:mx-0">
              I’d love to have a chat to see how I can help you. The best first
              step is for us to discuss your project during a free consultation.
              Then we can move forward from there.
            </p>
          </div>
          <Button parameters="hover:bg-orange-pastel bg-rouge-pastel" />
        </div>
      </div>
    </section>
  );
};
export default BookCall;
