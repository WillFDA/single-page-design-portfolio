import React from "react";

const Container = ({ children }) => {
  return (
    <div className="w-screen max-w-[1190px] md:px-10 px-4 mx-auto">
      {children}
    </div>
  );
};

export default Container;
