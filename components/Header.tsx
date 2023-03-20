"use client";

import { Bars2Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { useState } from "react";
import { headerMenu } from "../lib/data/HeaderMenus";
import Logo from "../public/images/1stLogo.png";
import HeaderButton from "./HeaderButton";
import LinkTo from "./core/LinkTo";

export default function Header() {
  const [openNav, setOpenNav] = useState<boolean>(true);

  const handleOnClickNav = () => {
    setOpenNav(!openNav);
    openNav === true
      ? (document.body.style.overflow = "hidden")
      : (document.body.style.overflow = "unset");
  };

  return (
    <header className="flex items-center justify-between font-bold py-5 px-4 md:px-6 max-w-7xl mx-auto">
      <div>
        <LinkTo className="flex items-center space-x-2" href="/">
          <Image
            src={Logo}
            width={50}
            height={50}
            alt="Logo"
            className="rounded-full"
          />
          <h1
            className="lg:text-2xl md:text-xl xl:text-2xl text-2xl ease-in duration-300"
            style={{ fontFamily: "Montserrat ExtraBold Alt1" }}
          >
            Noir Tech Tribe
          </h1>
        </LinkTo>
      </div>

      <div>
        <ul className="hidden sm:flex">
          {headerMenu.map((menu) => {
            return (
              <li className="" key={menu.name}>
                <HeaderButton
                  headerItem={menu.name}
                  headerLink={menu.link}
                  type="desktop"
                />
              </li>
            );
          })}
        </ul>
      </div>
      {/* Mobile button */}
      <div
        className={`sm:hidden block z-20 h-10 w-10 ${
          openNav ? "text-black" : "text-white"
        } cursor-pointer ease-in duration-300`}
        onClick={handleOnClickNav}
      >
        {openNav ? <Bars2Icon /> : <XMarkIcon />}
      </div>

      {/* Mobile Nav */}
      <div
        className={`sm:hidden absolute top-0 ${
          openNav ? "left-[-100%]" : "left-0"
        } right-0 bottom-0 flex justify-center items-center w-full h-screen bg-black text-center ease-in duration-300 text-white z-10`}
      >
        <ul>
          {headerMenu.map((menu) => {
            return (
              <li className="" key={menu.name}>
                <HeaderButton
                  headerItem={menu.name}
                  headerLink={menu.link}
                  type="mobile"
                  isOpen={openNav}
                  setIsOpen={setOpenNav}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </header>
  );
}
