import React from "react";

const Button = (props) => {
  return (
    <button
      className={`rounded-full h-fit py-4 px-7 md:px-10 bg-T-black font-bold min-w-[228px] hover:bg-light-purple text-T-white ${props.parameters}`}
    >
      Free Consultation
    </button>
  );
};

export default Button;
