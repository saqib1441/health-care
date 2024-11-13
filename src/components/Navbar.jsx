"use client";
import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/logo.png";
import { FaBars, FaStethoscope, FaXmark } from "react-icons/fa6";
import { useRef } from "react";
import Button from "./Button";

const Navbar = () => {
  const navbar = useRef(null);

  const NavbarHandler = () => {
    navbar.current.classList.toggle("translate-x-[100%]");
  };
  return (
    <nav className="bg-primary/5">
      <div className="wrapper py-3 flex items-center justify-between">
        <Link href="/">
          <Image src={Logo} alt="health-care-logo" className="w-[150px]" />
        </Link>
        <div
          className="flex flex-col justify-center items-center gap-5 fixed left-0 top-0 w-full h-full bg-primary text-white translate-x-[100%] transition-all duration-500 md:static md:translate-x-0 md:bg-transparent md:text-primary md:flex-row md:w-auto"
          ref={navbar}
        >
          <Link href="#" onClick={NavbarHandler}>
            Home
          </Link>
          <Link href="#services" onClick={NavbarHandler}>
            Services
          </Link>
          <Link href="#about-us" onClick={NavbarHandler}>
            About Us
          </Link>
          <Link href="#contact-us" onClick={NavbarHandler}>
            Contact Us
          </Link>
          <Link
            href="#contact-us"
            onClick={NavbarHandler}
            className="flex sm:hidden bg-white text-primary rounded-full"
          >
            <Button>
              <span>
                <FaStethoscope />
              </span>
              Patient Register
            </Button>
          </Link>
          <span
            className="text-xl bg-white text-primary p-1 rounded absolute top-7 right-6 md:hidden cursor-pointer"
            onClick={NavbarHandler}
          >
            <FaXmark />
          </span>
        </div>
        <div className="flex items-center gap-2">
          <span
            className="text-lg p-1 cursor-pointer md:hidden"
            onClick={NavbarHandler}
          >
            <FaBars />
          </span>
          <Link
            href="#contact-us"
            onClick={NavbarHandler}
            className="hidden sm:flex bg-primary rounded-full text-white"
          >
            <Button>
              <span>
                <FaStethoscope />
              </span>
              Patient Register
            </Button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
