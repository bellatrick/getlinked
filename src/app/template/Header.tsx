"use client";
import React, { useState } from "react";
import { usePathname } from "next/navigation";
import { clash_display, inter } from "../fonts";
import HeaderLink from "../components/HeaderLink";
import Button from "../components/Button";
import Image from "next/image";
import Link from "next/link";

type props = {
  form?: boolean;
};
const Header = ({ form }: props) => {
  const navLinks = [
    {
      name: "Timeline",
      href: "#timeline",
    },
    {
      name: "Overview",
      href: "#rules",
    },
    {
      name: "FAQs",
      href: "#faq",
    },
    {
      name: "Contact",
      href: "/contact",
    },
  ];
  const [openMenu, setOpenMenu] = useState(false);
  const handleToggleMenu = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <nav
      className={`${
        form ? "" : "pb-[30px] border-b border-[#FFFFFF2E]"
      } z-[8] bg-body px-[30px] lg:px-[80px] pt-[67px] `}
    >
      <div className="max-w-screen-xl   lg:px-0 flex flex-wrap items-center justify-between mx-auto lg:p-4">
        <div className="flex items-center">
          <Link
            href={"/"}
            className={`${clash_display.className} cursor-pointer text-white text-[15px] lg:text-[36px] font-[700]`}
          >
            get<span className="text-themepurple">linked</span>
          </Link>
        </div>
        <button
          onClick={handleToggleMenu}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex z-[100]  cursor-pointer transition-all duration-500 items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-[#110b22] focus:outline-none  dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <div className="">
            {openMenu ? (
              <Image
                src="/images/close.png"
                alt="Sample Image"
                width={25}
                height={25}
                className=" object-cover "
              />
            ) : (
              <Image
                src="/images/menu.png"
                alt="Sample Image"
                width={19}
                height={17}
                className=" object-cover "
              />
            )}
          </div>{" "}
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <div className="flex items-center gap-[121px]">
            <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-[56px] md:mt-0">
              {navLinks.map((link, i) => (
                <div key={i}>
                  <HeaderLink name={link.name} href={link.href} />
                </div>
              ))}
            </ul>
            <Link href={"/register"}>
              {" "}
              <Button text="Register" active={usePathname()==='/register'}/>
            </Link>
          </div>
        </div>
        <div
          className={`${
            openMenu
              ? "top-0 animate-topslide"
              : "top-[-4000px] hidden animate-downslide"
          } absolute md:hidden  z-[10] bg-[#110b22] transition-all duration-[1500ms]  w-full h-[100vh] left-0 bottom-0 right-0 block`}
          id="navbar-default"
        >
          {" "}
          <div className="flex mt-[100px] flex-col p-[50px] items-start gap-[21px]">
            <div onClick={handleToggleMenu} className="self-end"></div>
            <ul
              onClick={handleToggleMenu}
              className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row gap-[21px] md:mt-0"
            >
              {navLinks.map((link, i) => (
                <div key={i}>
                  <Link
                    href={link.href}
                    className={`${inter.className} text-[18px] transition-all hover:text-themepurple cursor-pointer font-medium`}
                  >
                    {link.name}
                  </Link>
                </div>
              ))}
            </ul>
            <Link href={"/register"}>
              {" "}
              <Button text="Register" />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
