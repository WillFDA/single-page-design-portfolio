import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-screen max-w-[1240px] 2xl:mx-16 md:mx-10 px-4 flex justify-center">
      {children}
    </div>
  );
};

export default Container;
