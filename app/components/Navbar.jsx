import Image from "next/image";
import React from "react";
import Container from "../container";

const Navbar = () => {
  return (
    <Container>
      <nav className="flex justify-between py-9">
        <Image
          src="./logo.svg"
          width={64}
          height={64}
          alt="Logo single page design portfolio"
        />
        <button className="rounded-full px-10 bg-T-black font-bold  hover:bg-light-purple text-T-white">
          Free Consultation
        </button>
      </nav>
    </Container>
  );
};

export default Navbar;
