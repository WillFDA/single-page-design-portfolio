import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-screen max-w-[1240px] xl:px-[65px] md:px-[39] px-4 mx-auto">
      {children}
    </div>
  );
};

export default Container;
