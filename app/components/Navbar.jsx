import Image from "next/image";
import React from "react";
import Container from "../Container";
import Button from "./Button";

const Navbar = (props) => {
  const isNav = props.boolean;
  if (isNav) {
    return (
      <Container>
        <>
          <nav className="flex justify-between py-9">
            <Image
              src="./logo.svg"
              width={64}
              height={64}
              alt="Logo single page design portfolio"
            />
            <Button parameters="hover:bg-light-purple bg-T-black" />
          </nav>
        </>
      </Container>
    );
  } else {
    return (
      <Container>
        <>
          <footer className="flex justify-between py-9">
            <Image
              src="./logo.svg"
              width={64}
              height={64}
              alt="Logo single page design portfolio"
            />
            <Button parameters="hover:bg-light-purple bg-T-black" />
          </footer>
        </>
      </Container>
    );
  }
};

export default Navbar;
